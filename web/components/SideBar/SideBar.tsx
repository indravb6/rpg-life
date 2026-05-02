import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import HomeIcon from "@mui/icons-material/Home";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Menu, MenuItem } from "@mui/material";
import { styled } from "@mui/system";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import userAPI from "../../api/userAPI";

const MenuList = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ theme, active }) => ({
  backgroundColor: active ? theme.palette.background.paper : "initial",
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,

  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  cursor: "pointer",
}));

const menus = [
  { icon: <HomeIcon />, label: "Home", path: "/home" },
  { icon: <AutoAwesomeIcon />, label: "Challenge", path: "/challenge" },
  { icon: <Diversity1Icon />, label: "Friends", path: "/friends" },
  { icon: <PersonIcon />, label: "Profile", path: "/profile" },
];

export default function SideBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const pathname = usePathname();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    userAPI.logout().then(() => {
      alert("Logout successful");
      window.location.href = "/login";
    });
  };

  const renderMenuItem = (icon: ReactNode, label: string, path: string) => {
    const isActive = pathname === path;

    return (
      <MenuList key={label} active={isActive} onClick={() => (window.location.href = path)}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {icon}
          {label}
        </Box>
      </MenuList>
    );
  };

  const renderMenuItems = () => {
    return menus.map((menu) => renderMenuItem(menu.icon, menu.label, menu.path));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        paddingY: "32px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <Box>
          <img src="images/logo.png" alt="logo" width={100} height={100} />
        </Box>
        {renderMenuItems()}
      </Box>
      <MenuList onClick={handleClick}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <MoreHorizIcon />
          More
        </Box>
      </MenuList>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  );
}
