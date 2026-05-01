"use client";

import { Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import userAPI from "../../api/userAPI";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    userAPI
      .register({ email, password, username })
      .then(() => {
        alert("Registration successful");
      })
      .catch((error) => {
        alert("Registration failed: " + error);
        console.error(error);
      });
  };

  return (
    <>
      <TextField
        variant="outlined"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
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
