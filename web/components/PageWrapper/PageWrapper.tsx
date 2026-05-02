"use client";
import { Box } from "@mui/material";
import { ReactNode } from "react";
import SideBar from "../../components/SideBar/SideBar";

const SIDEBAR_WIDTH = 240;
const CONTAINER_WIDTH = 1200;
export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <Box>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: `translateX(-${CONTAINER_WIDTH / 2}px)`,
          width: SIDEBAR_WIDTH,
        }}
      >
        <SideBar />
      </Box>
      <Box sx={{ padding: 2, maxWidth: `${CONTAINER_WIDTH}px`, mx: "auto", display: "flex" }}>
        <Box sx={{ width: `${SIDEBAR_WIDTH}px` }} />
        <Box sx={{ flex: 1, p: 2 }}>{children}</Box>
      </Box>
    </Box>
  );
}
