"use client";

import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import userAPI from "../../api/userAPI";
import { UserInfo } from "../../types/user";
import ProfileHeader from "./ProfileHeader";
import ProfileStats from "./ProfileStats";
import ProfileTabs from "./ProfileTabs";

export default function ProfileView() {
  const [user, setUser] = useState<UserInfo | null>(null);

  useEffect(() => {
    userAPI
      .getUserInfo()
      .then((data) => {
        console.log("USER:", data);
        setUser(data);
      })
      .catch((err) => {
        console.error("ERROR:", err);
      });
  }, []);

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