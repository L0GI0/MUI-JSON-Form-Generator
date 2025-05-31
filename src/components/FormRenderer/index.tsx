import React from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Button,
  Typography,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import type { FormConfig, Field } from "./types";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";

interface Props {
  config: FormConfig;
}

const renderField = (field: Field, index: number) => {
  switch (field.type) {
    case "numeric":
      return (
        <TextField
          key={index}
          type="number"
          label={field.label}
          fullWidth
          margin="normal"
        />
      );
    case "string":
      return (
        <TextField
          key={index}
          type="text"
          label={field.label}
          fullWidth
          margin="normal"
        />
      );
    case "multi-line":
      return (
        <TextField
          key={index}
          label={field.label}
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
      );
    case "boolean":
      return (
        <FormControlLabel
          key={index}
          control={<Checkbox />}
          label={field.label}
          sx={{
            my: 1,
            display: "flex",
            alignContent: "center",
          }}
        />
      );
    case "date":
      return (
        <DatePicker key={index} label={field.label} defaultValue={dayjs()} />
      );
    case "enum":
      return (
        <FormControl
          key={index}
          component="fieldset"
          margin="normal"
          sx={{ display: "block" }}
        >
          <FormLabel component="legend">{field.label}</FormLabel>
          <RadioGroup row>
            {field.options?.map((opt, i) => (
              <FormControlLabel
                key={i}
                value={opt}
                control={<Radio />}
                label={opt}
              />
            ))}
          </RadioGroup>
        </FormControl>
      );
  }
};

const FormRenderer: React.FC<Props> = ({ config }) => (
  <Card>
    <CardContent>
      <Typography variant="h5" gutterBottom>
        {config.title}
      </Typography>
      {config.fields.map(renderField)}
      <Box sx={{ mt: 3 }} display="flex" gap={2}>
        {config.buttons.map((btn, i) => (
          <Button key={i} variant="outlined">
            {btn.text}
          </Button>
        ))}
      </Box>
    </CardContent>
  </Card>
);

export default FormRenderer;
