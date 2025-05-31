import React from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import {
  CUSTOMER_FEEDBACK_SAMPLE,
  EMPLOYEE_REGISTRATION_SAMPLE,
  FORM_SAMPLE,
} from "../FormRenderer/constants";

interface Props {
  configText: string;
  error: string | null;
  onChange: (val: string) => void;
  onLoad: () => void;
}

const ConfigEditor: React.FC<Props> = ({
  configText,
  error,
  onChange,
  onLoad,
}) => (
  <Box sx={{ mt: 2 }}>
    <TextField
      label="Form Configuration (JSON)"
      value={configText}
      onChange={(e) => onChange(e.target.value)}
      multiline
      rows={20}
      fullWidth
      variant="outlined"
    />
    <Box sx={{ mt: 2 }}>
      <Button
        variant="contained"
        sx={{ display: "block", ml: "auto" }}
        onClick={onLoad}
      >
        Load Form
      </Button>
    </Box>
    {error && (
      <Typography color="error" sx={{ mt: 2 }}>
        {error}
      </Typography>
    )}
    <Box sx={{ mt: 5, textAlign: "center" }}>
      <Typography gutterBottom>Form Samples:</Typography>
      <Box sx={{ mt: 5, display: "flex", justifyContent: "center", gap: 10 }}>
        <Button
          variant="outlined"
          onClick={() => onChange(JSON.stringify(FORM_SAMPLE, null, 2))}
        >
          Sample Form
        </Button>
        <Button
          variant="outlined"
          onClick={() =>
            onChange(JSON.stringify(EMPLOYEE_REGISTRATION_SAMPLE, null, 2))
          }
        >
          Employee Registration
        </Button>
        <Button
          variant="outlined"
          onClick={() =>
            onChange(JSON.stringify(CUSTOMER_FEEDBACK_SAMPLE, null, 2))
          }
        >
          Customer Feedback
        </Button>
      </Box>
    </Box>
  </Box>
);

export default ConfigEditor;
