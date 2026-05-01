"use client";

import userAPI from "@/api/userAPI";
import { Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    userAPI.login({ username, password });
  };

  return (
    <>
      <Typography variant="h6">Welcome!</Typography>
      <TextField
        type="text"
        placeholder="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        type="password"
        placeholder="Password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
      <Typography variant="body2" sx={{ marginTop: "16px" }}>
        Don't have an account?{" "}
        <Link href={"/register"} style={{ textDecoration: "none" }}>
          Register
        </Link>
        <Button
          onClick={() => {
            userAPI
              .getUserInfo()
              .then((info) => {
                alert(`User Info: ${JSON.stringify(info)}`);
              })
              .catch((error) => {
                alert(`Error fetching user info: ${error.message}`);
              });
          }}
        >
          Get User Info
        </Button>
      </Typography>
    </>
  );
}
