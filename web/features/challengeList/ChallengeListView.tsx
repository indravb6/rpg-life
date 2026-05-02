"use client";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { Box, styled, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import PointGain from "../../components/PointGain/PointGain";
import { Challenge } from "../../types/challenge";

interface ChallengeListViewProps {
  categoryTitle: string;
  challenges: Challenge[];
}

const ChallengeList = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.action.hover,
}));

export default function ChallengeListView({ challenges, categoryTitle }: ChallengeListViewProps) {
  const router = useRouter();
  const theme = useTheme();

  const groupedByLevel = challenges.reduce((acc, challenge) => {
    const level = challenge.requiredLevel;
    if (!acc[level]) {
      acc[level] = [];
    }
    acc[level].push(challenge);
    return acc;
  }, {} as Record<number, Challenge[]>);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
          marginBottom: "32px",
        }}
      >
        <ArrowBackIosNewIcon onClick={() => router.back()} />
        <Typography variant="h4">{categoryTitle}</Typography>
      </Box>
      {Object.entries(groupedByLevel).map(([level, challenges]) => (
        <Box
          sx={{
            padding: theme.spacing(2),
            borderRadius: theme.shape.borderRadius,
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
          key={level}
        >
          <Typography variant="h5">Level {level}</Typography>
          {challenges.map((challenge) => (
            <Box
              sx={{
                padding: theme.spacing(2),
                borderRadius: theme.shape.borderRadius,
                backgroundColor: theme.palette.action.hover,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
              key={challenge.id}
            >
              <Typography>{challenge.title}</Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <PostAddIcon />
                <Box sx={{ display: "flex", gap: "8px", justifyContent: "end" }}>
                  <PointGain type={"STR"} point={challenge.strengthPoint} />
                  <PointGain type={"CUL"} point={challenge.culturePoint} />
                  <PointGain type={"ENV"} point={challenge.environmentPoint} />
                  <PointGain type={"CHA"} point={challenge.charismaPoint} />
                  <PointGain type={"TAL"} point={challenge.talentPoint} />
                  <PointGain type={"INT"} point={challenge.intellectPoint} />
                  <PointGain type={"EXP"} point={challenge.exp} />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}
