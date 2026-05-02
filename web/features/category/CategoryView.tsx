"use client";

import { Box, styled } from "@mui/material";
import { useRouter } from "next/navigation";
import { Category } from "../../types/challenge";

interface CategoryViewProps {
  categories: Category[];
}

const CategoryList = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,

  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  cursor: "pointer",
}));

export default function CategoryView({ categories }: CategoryViewProps) {
  const router = useRouter();
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {categories.map((category) => (
        <CategoryList
          key={category.id}
          onClick={() => router.push(`/challenge/category/${category.title}`)}
        >
          {category.title}
        </CategoryList>
      ))}
    </Box>
  );
}
