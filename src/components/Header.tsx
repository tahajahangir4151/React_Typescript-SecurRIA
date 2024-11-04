import React from "react";
import {
  Avatar,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import profileImg from "../images/ae4134169130626f5a6ff03cd06719fb.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Appbar, ProfileContainer, ProfileName } from "../styles/HeaderStyle";

interface HeaderProps {
  title: string;
  onMenuClick: () => void;
  isMobile: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, onMenuClick, isMobile }) => {
  const theme = useTheme();
  return (
    <Appbar>
      <Toolbar>
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onMenuClick}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <ProfileContainer>
          <Avatar alt="User Profile" src={profileImg} />
          <ProfileName>Jenny Wilson</ProfileName>
          <ArrowDropDownIcon
            sx={{ color: theme.palette.secondary.main, ml: 0.5 }}
          />
        </ProfileContainer>
      </Toolbar>
    </Appbar>
  );
};

export default Header;
