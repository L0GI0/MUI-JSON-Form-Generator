export const FORM_SAMPLE = {
  title: "Sample Form",
  fields: [
    { type: "string", label: "Name" },
    { type: "numeric", label: "Age" },
    { type: "multi-line", label: "Bio" },
    { type: "boolean", label: "Subscribe" },
    { type: "date", label: "Birth Date" },
    { type: "enum", label: "Gender", options: ["Male", "Female"] },
  ],
  buttons: [{ text: "Submit" }, { text: "Cancel" }],
};

export const EMPLOYEE_REGISTRATION_SAMPLE = {
  title: "Employee Registration",
  fields: [
    { type: "string", label: "Full Name" },
    { type: "numeric", label: "Employee ID" },
    { type: "date", label: "Joining Date" },
    {
      type: "enum",
      label: "Department",
      options: ["Engineering", "HR", "Sales", "Marketing"],
    },
    { type: "boolean", label: "Remote Worker" },
  ],
  buttons: [{ text: "Register" }, { text: "Clear" }],
};

export const CUSTOMER_FEEDBACK_SAMPLE = {
  title: "Customer Feedback",
  fields: [
    { type: "string", label: "Name" },
    { type: "multi-line", label: "Your Feedback" },
    {
      type: "enum",
      label: "Rate Us",
      options: ["Excellent", "Good", "Average", "Poor"],
    },
    { type: "boolean", label: "Would you recommend us?" },
  ],
  buttons: [{ text: "Submit Feedback" }],
};
