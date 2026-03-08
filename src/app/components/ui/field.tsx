import { cn } from "@/lib/utils";
import { Input } from "./input";
import { Label } from "./label";
import { Select } from "./select";

type FieldInputProps = {
  label: string;
  id: string;
  name?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function FieldInput({ label, id, name, className, ...props }: FieldInputProps) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} name={name ?? id} className={cn("mt-1", className)} {...props} />
    </div>
  );
}

type FieldSelectProps = {
  label: string;
  id: string;
  name?: string;
  children: React.ReactNode;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

function FieldSelect({ label, id, name, children, className, ...props }: FieldSelectProps) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Select id={id} name={name ?? id} className={cn("mt-1", className)} {...props}>
        {children}
      </Select>
    </div>
  );
}

export { FieldInput, FieldSelect };
