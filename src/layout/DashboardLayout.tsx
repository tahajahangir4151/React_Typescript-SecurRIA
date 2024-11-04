import {
  Box,
  CssBaseline,
  Drawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const DashboardLayout: React.FC<{
  children: React.ReactNode;
  onLogout: () => void;
}> = ({ children, onLogout }) => {
  const [activeMenu, setActiveMenu] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuItemClick = () => {
    setMobileOpen(false); 
    setIsSidebarOpen(false);
  };

  const headerTitle = activeMenu ? `Dashboard | ${activeMenu}` : "Dashboard";

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 },
          }}
        >
          <Sidebar
            setActiveMenu={setActiveMenu}
            setIsSidebarOpen={handleMenuItemClick} 
            onLogout={onLogout}
          />
        </Drawer>
      ) : (
        <Sidebar
          setActiveMenu={setActiveMenu}
          setIsSidebarOpen={handleMenuItemClick} 
          onLogout={onLogout} 
        />
      )}
      <Box sx={{ flexGrow: 1 }}>
        <Header
          title={headerTitle}
          onMenuClick={handleDrawerToggle}
          isMobile={isMobile}
        />
        <Box component={"main"} sx={{ p: 3, mt: 1 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
