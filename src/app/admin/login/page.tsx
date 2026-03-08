"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState, useTransition } from "react";
import { requestAdminMagicLink } from "@/app/admin/actions";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";

function LoginErrorMessage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  if (error === "unauthorized")
    return (
      <p className="mt-4 text-sm text-destructive">This email is not allowed to access admin.</p>
    );
  if (error === "auth_failed")
    return <p className="mt-4 text-sm text-destructive">Sign-in failed. Please try again.</p>;
  if (error === "missing_code")
    return <p className="mt-4 text-sm text-destructive">Missing auth code. Please try again.</p>;
  return null;
}

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setMessage("");
    const callbackUrl =
      typeof window !== "undefined" ? `${window.location.origin}/auth/callback` : "";
    startTransition(() => {
      requestAdminMagicLink(email.trim(), callbackUrl).then(({ error: err }) => {
        if (err) {
          setStatus("error");
          setMessage(
            err === "unauthorized"
              ? "This email is not allowed to access admin."
              : "Something went wrong. Please try again.",
          );
        } else {
          setStatus("sent");
        }
      });
    });
  }

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-lg border border-border bg-card p-6 shadow-sm">
        <h1 className="mb-2 text-xl font-semibold text-foreground">Admin login</h1>
        <p className="mb-6 text-sm text-muted-foreground">
          Enter your email to receive a magic link.
        </p>

        {status === "sent" ? (
          <p className="text-sm text-primary">Check your email for the sign-in link.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Label htmlFor="email" className="sr-only">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isPending}
              autoComplete="email"
              required
            />
            {message ? <p className="text-sm text-destructive">{message}</p> : null}
            <Button type="submit" disabled={isPending}>
              {isPending ? "Sending…" : "Send magic link"}
            </Button>
          </form>
        )}

        <Suspense fallback={null}>
          <LoginErrorMessage />
        </Suspense>
      </div>
    </div>
  );
}
