"use client";

import { Box, LinearProgress, Paper, Typography } from "@mui/material";
import { UserInfo } from "../../types/user";

interface ProfileStatsProps {
  user: UserInfo;
}

export default function ProfileStats({ user }: ProfileStatsProps) {
  const stats = [
    { label: "STR", value: user.strengthPoint },
    { label: "CUL", value: user.culturePoint },
    { label: "ENV", value: user.environmentPoint },
    { label: "CHA", value: user.charismaPoint },
    { label: "TAL", value: user.talentPoint },
    { label: "INT", value: user.intellectPoint },
  ];

  const history = [
    { title: "XP earned", value: "210 XP", color: "#2CCBFF" },
    { title: "Average XP per day", value: "210 XP", color: "#2CCBFF" },
    { title: "Achievements completed", value: "3", color: "#3EE46A" },
    { title: "Avg. completed per day", value: "3.0", color: "#3EE46A" },
    { title: "Unique achievements", value: "3", color: "#3EE46A" },
    {
      title: "Leveling up since",
      value: "2026-06-25 (0 days ago)",
      color: "#3EE46A",
    },
    { title: "High Scores rank", value: "#0", color: "#2CCBFF" },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
      <Paper
        sx={{
          background: "#1A1F24",
          border: "1px solid #27313A",
          p: 3,
          borderRadius: 0,
        }}
      >
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 3 }}>
          {stats.map((stat) => (
            <Box key={stat.label}>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <Typography sx={{ color: "#38E06F", fontWeight: 700, letterSpacing: 1 }}>
                  {stat.label}
                </Typography>

                <Typography sx={{ color: "#D7D7D7", fontWeight: 700 }}>
                  {stat.value}
                </Typography>
              </Box>

              <LinearProgress
                variant="determinate"
                value={stat.value}
                sx={{
                  height: 10,
                  borderRadius: 1,
                  bgcolor: "#101418",
                  border: "1px solid #2E3943",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#31D96A",
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </Paper>

      <Paper
        sx={{
          background: "#1A1F24",
          border: "1px solid #27313A",
          borderRadius: 0,
          p: 3,
        }}
      >
        <Typography sx={{ color: "#8FD7FF", fontWeight: 700, mb: 3, letterSpacing: 2 }}>
          [ HISTORICAL DATA ]
        </Typography>

        {history.map((item) => (
          <Box
            key={item.title}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 2,
              borderBottom: "1px solid #252C33",
            }}
          >
            <Typography sx={{ color: "#C9D0D6" }}>{item.title}</Typography>
            <Typography sx={{ color: item.color, fontWeight: 700 }}>{item.value}</Typography>
          </Box>
        ))}
      </Paper>
    </Box>
  );
}