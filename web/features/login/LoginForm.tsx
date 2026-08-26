"use client";

import userAPI from "@/api/userAPI";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<LoginForm> = ({ username, password }) => {
    userAPI.login({ username, password }).then(() => {
      window.location.href = "/";
    });
  };

  return (
    <>
      <Typography variant="h6">Welcome!</Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 2 }}
      >
        <TextField
          type="text"
          placeholder="Username"
          variant="outlined"
          {...register("username")}
          error={!!errors.username}
          helperText={errors.username?.message}
        />
        <TextField
          type="password"
          placeholder="Password"
          variant="outlined"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </Box>
      <Typography variant="body2" sx={{ marginTop: "16px" }}>
        Don't have an account?{" "}
        <Link href={"/register"} style={{ textDecoration: "none" }}>
          Register
        </Link>
      </Typography>
    </>
  );
}
