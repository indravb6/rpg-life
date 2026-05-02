import { Typography } from "@mui/material";

interface PointGainProps {
  type: "EXP" | "STR" | "CUL" | "ENV" | "CHA" | "TAL" | "INT";
  point: number | null;
}

const colors: Record<PointGainProps["type"], string> = {
  EXP: "#03A9F4",
  STR: "#4CAF50",
  CUL: "#4CAF50",
  ENV: "#4CAF50",
  CHA: "#4CAF50",
  TAL: "#4CAF50",
  INT: "#4CAF50",
};

export default function PointGain({ type, point }: PointGainProps) {
  if (!point) return null;

  if (type === "EXP") {
    return <Typography sx={{ color: colors[type] }}>+{point} EXP</Typography>;
  }

  return (
    <Typography sx={{ color: colors[type] }}>
      {type}+{point}
    </Typography>
  );
}
