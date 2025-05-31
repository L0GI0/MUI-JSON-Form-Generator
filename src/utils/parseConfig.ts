import type { FormConfig } from "../components/FormRenderer/types";

export function parseConfig(jsonText: string): {
  config: FormConfig | null;
  error: string | null;
} {
  try {
    const parsed = JSON.parse(jsonText);
    return { config: parsed, error: null };
  } catch {
    return { config: null, error: "Invalid JSON format." };
  }
}
