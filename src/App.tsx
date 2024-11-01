import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import DashboardLayout from "./layout/DashboardLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewEmailCompaign from "./pages/NewEmailCompaign";
import Targets from "./pages/Targets";
import EmailTemplates from "./pages/EmailTemplates";
import LandinPageTemplate from "./pages/LandinPageTemplate";
import CompaignRunning from "./pages/CompaignRunning";
import Reporting from "./pages/Reporting";
import TemplateEditor from "./components/TemplateEditor";
import Settings from "./pages/Settings";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!localStorage.getItem("userInfo")
  );

   const handleLogout = () => {
     localStorage.removeItem("userInfo"); // Clear user data from local storage
     setIsAuthenticated(false); // Update authentication state
   };

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem("userInfo"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <DashboardLayout onLogout={handleLogout}>
                <Home />
              </DashboardLayout>
            ) : (
              <Login onLoginSuccess={() => setIsAuthenticated(true)} />
            )
          }
        />{" "}
        <Route
          path="/new-email-campaign"
          element={
            <DashboardLayout onLogout={handleLogout}>
              <NewEmailCompaign />
            </DashboardLayout>
          }
        />
        <Route
          path="/targets"
          element={
            <DashboardLayout onLogout={handleLogout}>
              <Targets />
            </DashboardLayout>
          }
        />
        <Route
          path="/email-templates"
          element={
            <DashboardLayout onLogout={handleLogout}>
              <EmailTemplates />
            </DashboardLayout>
          }
        />
        <Route
          path="/landing-page-templates"
          element={
            <DashboardLayout onLogout={handleLogout}>
              <LandinPageTemplate />
            </DashboardLayout>
          }
        />
        <Route
          path="/campaigns-running"
          element={
            <DashboardLayout onLogout={handleLogout}>
              <CompaignRunning />
            </DashboardLayout>
          }
        />
        <Route
          path="/reporting"
          element={
            <DashboardLayout onLogout={handleLogout}>
              <Reporting />{" "}
            </DashboardLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <DashboardLayout onLogout={handleLogout}>
              <Settings />
            </DashboardLayout>
          }
        />{" "}
        <Route
          path="/template-editor"
          element={
            <DashboardLayout onLogout={handleLogout}>
              <TemplateEditor />
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
