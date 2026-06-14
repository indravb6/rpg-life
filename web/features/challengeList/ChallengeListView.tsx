"use client";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PostAddIcon from "@mui/icons-material/PostAdd";
import {
  Box,
  Button,
  IconButton,
  styled,
  TextField,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import challengeAPI from "../../api/challengeAPI";
import PointGain from "../../components/PointGain/PointGain";
import { useToast } from "../../providers/ToastProvider/ToastProvider";
import { Challenge } from "../../types/challenge";
import { groupBy } from "../../utils/arrayUtils";

interface ChallengeListViewProps {
  categoryTitle: string;
  challenges: Challenge[];
}

const ChallengeList = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.action.hover,
  display: "flex",
  flexDirection: "column",
  gap: 1,
}));

export default function ChallengeListView({ challenges, categoryTitle }: ChallengeListViewProps) {
  const router = useRouter();
  const theme = useTheme();
  const [challengeId, setChallengeId] = useState<string | null>(null);
  const [comment, setComment] = useState<string>("");
  const showToast = useToast((s) => s.showToast);

  const groupedByLevel = groupBy(challenges, (challenge) => challenge.requiredLevel);

  const handleSubmit = async () => {
    await challengeAPI.submitChallenge({ challengeId: challengeId!, comment });
    showToast("success", "Challenge submitted");
    setChallengeId(null);
  };

  const renderSubmissionBox = () => {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <TextField
          placeholder="Add your comment"
          onChange={(e) => setComment(e.target.value)}
          autoComplete="off"
        />
        <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
          <Button color="error" onClick={() => setChallengeId(null)}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Share to your friend
          </Button>
        </Box>
      </Box>
    );
  };

  return (
    <>
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
              <ChallengeList key={challenge.id}>
                <Typography>{challenge.title}</Typography>
                <Box
                  sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <Tooltip title="Complete this challenge">
                    <IconButton>
                      <PostAddIcon
                        sx={{ color: theme.palette.primary.contrastText }}
                        onClick={() => {
                          setComment("");
                          setChallengeId(challenge.id);
                        }}
                      />
                    </IconButton>
                  </Tooltip>
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
                {challengeId === challenge.id && renderSubmissionBox()}
              </ChallengeList>
            ))}
          </Box>
        ))}
      </Box>
    </>
  );
}
