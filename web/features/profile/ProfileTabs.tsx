"use client";

import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

export default function ProfileTabs() {
  const [tab, setTab] = useState(0);

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, color: "#FFFFFF", mb: 3 }}>
        Profile
      </Typography>

      <Tabs
        value={tab}
        onChange={(_, value) => setTab(value)}
        sx={{
          minHeight: 42,
          "& .MuiTabs-indicator": {
            backgroundColor: "#29C8FF",
            height: 3,
          },
          "& .MuiTab-root": {
            color: "#D0D0D0",
            textTransform: "none",
            fontWeight: 700,
            minHeight: 42,
            px: 1,
            mr: 3,
          },
          "& .Mui-selected": {
            color: "#FFFFFF !important",
          },
        }}
      >
        <Tab label="Profile" />
        <Tab label="Activity" />
      </Tabs>

      <Box sx={{ width: "100%", height: 1, bgcolor: "#5E5E5E" }} />
    </Box>
  );
}