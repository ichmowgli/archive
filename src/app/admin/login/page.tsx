"use client";

import { requestAdminMagicLink } from "@/app/admin/actions";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

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
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    setMessage("");
    const callbackUrl =
      typeof window !== "undefined" ? `${window.location.origin}/auth/callback` : "";
    const { error } = await requestAdminMagicLink(email.trim(), callbackUrl);
    if (error) {
      setStatus("error");
      setMessage(
        error === "unauthorized"
          ? "This email is not allowed to access admin."
          : "Something went wrong. Please try again.",
      );
      return;
    }
    setStatus("sent");
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
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
              className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50"
              autoComplete="email"
              required
            />
            {message && <p className="text-sm text-destructive">{message}</p>}
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50"
            >
              {status === "loading" ? "Sending…" : "Send magic link"}
            </button>
          </form>
        )}

        <LoginErrorMessage />
      </div>
    </div>
  );
}
