export interface Field {
  type: "numeric" | "string" | "multi-line" | "boolean" | "date" | "enum";
  label: string;
  options?: string[];
}

export interface FormConfig {
  title: string;
  fields: Field[];
  buttons: { text: string }[];
}
