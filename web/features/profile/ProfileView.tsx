"use client";

import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import userAPI from "../../api/userAPI";
import { UserInfo } from "../../types/user";
import ProfileHeader from "./ProfileHeader";
import ProfileStats from "./ProfileStats";
import ProfileTabs from "./ProfileTabs";

export default function ProfileView() {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    userAPI
      .getUserInfo()
      .then((data) => {
        console.log("USER:", data);
        setUser(data);
      })
      .catch((err) => {
        console.error("ERROR:", err);
        setError(true);
      });
  }, []);

  if (error) {
    return (
      <Box sx={{ mt: 3 }}>
        <Typography>Failed to load profile data</Typography>
        <Button variant="contained" onClick={() => window.location.reload()}>
          Retry
        </Button>
      </Box>
    );
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <ProfileTabs />
      <ProfileHeader user={user} />
      <ProfileStats user={user} />
    </Box>
  );
}
