"use client";
import { Box } from "@mui/material";
import SideBar from "../../components/SideBar/SideBar";

export default function HomeView() {
  return (
    <Box sx={{ display: "flex", height: "100vh", justifyContent: "center", gap: "12px" }}>
      <Box sx={{ width: "200px" }}>
        <SideBar />
      </Box>
      <Box sx={{ backgroundColor: "gray", padding: 2, width: "600px" }}>timeline</Box>
    </Box>
  );
}
