import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import EmailTemplateCard from "../components/EmailTemplateCard";
import { useNavigate } from "react-router-dom";
import { Email, emailTemplateData } from "../data/emailTemplateData";

const EmailTemplates: React.FC = () => {
  const navigate = useNavigate();
  const [templates, setTemplates] = useState<Email[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const numberOfCards = 8; // Adjust if necessary

  const handleCreateTemplate = () => {
    navigate("/template-editor");
  };

  useEffect(() => {
    // Set mounted state
    setIsMounted(true);

    // Populate templates with default instances of emailTemplateData
    const initialTemplates = Array.from({ length: numberOfCards }, () => ({
      ...emailTemplateData,
    }));
    setTemplates(initialTemplates); // Initialize with default templates

    // Check if there's a new template in sessionStorage
    const storedTemplate = sessionStorage.getItem("newTemplate");
    console.log("Stored Template:", storedTemplate); // Debug log
    if (storedTemplate && isMounted) {
      const newTemplate = JSON.parse(storedTemplate) as Email;
      // Update state to include existing templates and the new one
      setTemplates((prevTemplates) => [...prevTemplates, newTemplate]);
      // Clear the new template from sessionStorage
      sessionStorage.removeItem("newTemplate");
    }

    // Clean up the effect
    return () => setIsMounted(false);
  }, [isMounted]);

  return (
    <>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={12} md={8}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              component={"h4"}
              variant="h4"
              sx={{
                color: "#0473E9",
                fontWeight: "bold",
                fontSize: { xs: "24px", md: "30px" },
                fontFamily: "Nunito Sans",
              }}
            >
              Email Templates
            </Typography>
            <Typography
              color="#000000"
              mt={"10px"}
              fontSize={{ xs: "12px", md: "14px" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            onClick={handleCreateTemplate}
            sx={{
              backgroundColor: "#0473E9",
              color: "#FFFFFF",
              fontSize: "16px",
              padding: "5px 20px",
              borderRadius: "5px",
              height: "55px",
              "&:hover": { backgroundColor: "#005BB5" },
            }}
          >
            Create Template
          </Button>
        </Grid>
      </Grid>

      <Box
        sx={{
          maxHeight: "75vh",
          overflowY: "auto",
          marginTop: 2,
          border: "0.5px solid #C1C1C1",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <Grid container spacing={2}>
          {templates.map((email, index) => (
            <Grid item xs={12} sm={6} md={3} lg={4} key={index}>
              <EmailTemplateCard email={email} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default EmailTemplates;
