import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import EmailTemplateCard from "../components/EmailTemplateCard";
import { useNavigate } from "react-router-dom";
import { Email, emailTemplateData } from "../data/emailTemplateData";
import {
  ButtonGrid,
  DescriptionTypography,
  StyledButton,
  StyledGrid,
  StyledHeading,
  TitleTypography,
} from "../styles/HomeStyles";

const LandinPageTemplate: React.FC = () => {
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
      <StyledGrid container spacing={2}>
        <Grid item xs={12} md={8}>
          <StyledHeading>
            <TitleTypography variant="h4">
              Landing Page Templates{" "}
            </TitleTypography>
            <DescriptionTypography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </DescriptionTypography>
          </StyledHeading>
        </Grid>
        <ButtonGrid item xs={12} md={4}>
          <StyledButton onClick={handleCreateTemplate}>
            Create Template
          </StyledButton>
        </ButtonGrid>
      </StyledGrid>

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

export default LandinPageTemplate;
