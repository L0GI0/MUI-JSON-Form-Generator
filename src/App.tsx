import { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import { parseConfig } from "./utils/parseConfig";
import ConfigEditor from "./components/ConfigEditor";
import FormRenderer from "./components/FormRenderer";

import type { FormConfig } from "./components/FormRenderer/types";
import { FORM_SAMPLE } from "./components/FormRenderer/constants";

function App() {
  const [tab, setTab] = useState(0);
  const [configText, setConfigText] = useState<string>(
    JSON.stringify(FORM_SAMPLE, null, 2)
  );

  const [formConfig, setFormConfig] = useState<FormConfig | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLoadConfig = () => {
    const { config, error } = parseConfig(configText);
    setFormConfig(config);
    setError(error);
  };

  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
      <Tabs value={tab} onChange={(_, newVal) => setTab(newVal)}>
        <Tab label="Config" />
        <Tab label="Result" />
      </Tabs>

      {tab === 0 ? (
        <ConfigEditor
          configText={configText}
          error={error}
          onChange={setConfigText}
          onLoad={handleLoadConfig}
        />
      ) : formConfig ? (
        <FormRenderer config={formConfig} />
      ) : (
        <Typography color="text.secondary" sx={{ mt: 2 }}>
          No valid form configuration loaded.
        </Typography>
      )}
    </Box>
  );
}

export default App;
