import { Box } from "@mui/material";
import { ReactNode } from "react";

export default function LoginWrapper({ children }: { children: ReactNode }) {
  return (
    <Box sx={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Box>
        <img
          src="bg.jpg"
          alt="Background"
          style={{
            width: "60vw",
            height: "100vh",
            objectFit: "cover",
            filter: "blur(2px) grayscale(50%)",
          }}
        />
      </Box>
      <Box
        sx={{
          padding: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "16px",
          width: "40vw",
        }}
      >
        <img src="logo.png" alt="Logo" style={{ width: "200px", height: "auto" }} />
        {children}
      </Box>
    </Box>
  );
}
