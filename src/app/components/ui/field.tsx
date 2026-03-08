"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "./input";
import { Label } from "./label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

type FieldInputProps = {
  label: string;
  id: string;
  name?: string;
} & React.ComponentPropsWithoutRef<typeof Input>;

function FieldInput({ label, id, name, className, ...props }: FieldInputProps) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} name={name ?? id} className={cn("mt-1", className)} {...props} />
    </div>
  );
}

export type FieldSelectOption = { value: string; label: string };

type FieldSelectProps = {
  label: string;
  id: string;
  name?: string;
  options: FieldSelectOption[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  defaultValue?: string;
  className?: string;
};

function FieldSelect({
  label,
  id,
  name = id,
  options,
  placeholder = "Select…",
  required,
  disabled,
  defaultValue,
  className,
}: FieldSelectProps) {
  const [value, setValue] = useState(defaultValue ?? "");
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <input type="hidden" name={name} value={value} readOnly aria-hidden />
      <Select disabled={disabled} value={value} onValueChange={setValue}>
        <SelectTrigger id={id} className={cn("mt-1", className)} aria-required={required}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export { FieldInput, FieldSelect };
