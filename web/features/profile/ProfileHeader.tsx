"use client";

import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { Box, Paper, Typography } from "@mui/material";
import { UserInfo } from "../../types/user";

interface ProfileHeaderProps {
  user: UserInfo;
}
export default function ProfileHeader({ user }: ProfileHeaderProps) {
  const progress = Math.floor((user.exp / user.maxExp) * 100);
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", gap: 3, mt: 3 }}>
      <Paper
        sx={{
          flex: 1,
          backgroundColor: "#15191F",
          p: 3,
          display: "flex",
          gap: 3,
          borderRadius: 2,
        }}
      >
        <Box sx={{ width: 120, height: 120, border: "2px solid #4FC3F7", overflow: "hidden", flexShrink: 0 }}>
          <img
            src="/images/logo.png"
            alt="Profile"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>

          <Typography sx={{ fontFamily: "monospace", fontSize: 42, fontWeight: 700, color: "#B8FFF2", letterSpacing: 1, lineHeight: 1 }}>
            {user.username}
          </Typography>

          <Typography sx={{ fontFamily: "monospace", fontSize: 24, color: "#20B9E5", letterSpacing: 1, mb: 3 }}>
            LVL {user.level}
          </Typography>

          <Box sx={{ mt: 2 }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: 24,
                backgroundColor: "#1B728A",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  width: `${progress}%`,
                  height: "100%",
                  backgroundColor: "#27C8F3",
                }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  left: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontFamily: "monospace",
                  fontSize: 18,
                  color: "#111",
                  fontWeight: 700,
                  letterSpacing: 1,
                }}
              >
                {user.exp} / {user.maxExp}
              </Typography>
            </Box>
          </Box>

          <Typography sx={{ color: "#9E9E9E", mt: 1, fontSize: 14 }} />
        </Box>
      </Paper>

      <Paper
        sx={{
          width: 190,
          backgroundColor: "#15191F",
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <LocalFireDepartmentIcon sx={{ color: "#FF7A00", fontSize: 55 }} />

        <Typography sx={{ fontFamily: "monospace", fontSize: 22, color: "#F6A434", letterSpacing: 1 }}>
          Current Streak
        </Typography>

        <Typography sx={{ fontFamily: "monospace", fontSize: 34, fontWeight: 700, color: "#FFFFFF" }}>
          {user.currentStreak} Days
        </Typography>
      </Paper>
    </Box>
  );
}