"use client";

import { Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import userAPI from "../../api/userAPI";
import { useToast } from "../../providers/ToastProvider/ToastProvider";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const showToast = useToast((s) => s.showToast);
  const router = useRouter();

  const handleRegister = () => {
    if (password !== confirmPassword) {
      showToast("error", "Passwords do not match");
      return;
    }

    userAPI.register({ email, password, username }).then(() => {
      showToast("success", "Registration successful");
      router.push("/login");
    });
  };

  return (
    <>
      <TextField variant="outlined" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField
        placeholder="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        type="password"
        variant="outlined"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        type="password"
        variant="outlined"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button variant="contained" onClick={handleRegister}>
        Register
      </Button>
      <Typography variant="body2" sx={{ marginTop: "16px" }}>
        Already have an account? <Link href="/login">Login</Link>
      </Typography>
    </>
  );
}
