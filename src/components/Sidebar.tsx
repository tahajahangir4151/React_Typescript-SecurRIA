import { Box, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import LogoImg from "../images/Logo.jpeg";
import { Link, useLocation } from "react-router-dom";
import { Logo, LogoutBtn, Separator, SidebarContainer } from "../styles/SideBarStyle";

interface SidebarProps {
  setActiveMenu: (menuName: string) => void;
  setIsSidebarOpen?: (isOpen: boolean) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  setActiveMenu,
  setIsSidebarOpen,
  onLogout,
}) => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const location = useLocation();
  const theme = useTheme();

  const menuItems = [
    { text: "Dashboard", path: "/" },
    { text: "New Email Campaign", path: "/new-email-campaign" },
    { text: "Targets", path: "/targets" },
    { text: "Email Templates", path: "/email-templates" },
    { text: "Landing Page Templates", path: "/landing-page-templates" },
    { text: "Campaigns Running", path: "/campaigns-running" },
    { text: "Reporting", path: "/reporting" },
    { text: "Settings", path: "/settings" },
  ];

  useEffect(() => {
    const currentItem = menuItems.find(
      (item) => item.path === location.pathname
    );
    if (currentItem) {
      setActiveItem(currentItem.text);
      setActiveMenu(currentItem.text === "Dashboard" ? "" : currentItem.text);
    } else if (location.pathname === "/template-editor") {
      setActiveItem("Email Templates");
      setActiveMenu("Email Templates");
    }
  }, [location.pathname, menuItems, setActiveMenu]);

  return (
    <SidebarContainer>
      <Logo src={LogoImg} alt="Logo" />

      <Separator />

      <Box sx={{ flexGrow: 1 }}>
        {menuItems.map((item) => (
          <Link
            key={item.text}
            to={item.path}
            style={{
              display: "block",
              padding: "10px 0",
              textDecoration: activeItem === item.text ? "underline" : "none",
              color:
                activeItem === item.text
                  ? theme.palette.primary.main
                  : theme.palette.secondary.main,
              fontWeight: activeItem === item.text ? "bold" : "normal",
              fontFamily: theme.typography.fontFamily,
            }}
            onClick={() => {
              setActiveItem(item.text);
              setActiveMenu(item.text === "Dashboard" ? "" : item.text);
              if (setIsSidebarOpen) {
                setIsSidebarOpen(false);
              }
            }}
          >
            {item.text}
          </Link>
        ))}
      </Box>
      <Separator />

      <LogoutBtn
        onClick={() => {
          if (setIsSidebarOpen) setIsSidebarOpen(false);
          onLogout();
        }}
      >
        Log Out
      </LogoutBtn>
    </SidebarContainer>
  );
};

export default Sidebar;
