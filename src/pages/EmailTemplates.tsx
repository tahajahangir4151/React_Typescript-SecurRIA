import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
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
} from "../styles/PageHeadingStyle";
import { EmailTemplateCardContainer } from "../styles/EmailTemplateStyles";

const EmailTemplates: React.FC = () => {
  const navigate = useNavigate();
  const [templates, setTemplates] = useState<Email[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const numberOfCards = 8;

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
            <TitleTypography variant="h4">Email Templates</TitleTypography>
            <DescriptionTypography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </DescriptionTypography>
          </StyledHeading>
        </Grid>
        <ButtonGrid
          item
          xs={12}
          md={4}
          sx={{ display: "flex", justifyContent: "flex-end", mb: "10px" }}
        >
          <StyledButton onClick={handleCreateTemplate}>
            Create Template
          </StyledButton>
        </ButtonGrid>
      </StyledGrid>

      <EmailTemplateCardContainer>
        <Grid container spacing={2}>
          {templates.map((email, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <EmailTemplateCard email={email} />
            </Grid>
          ))}
        </Grid>
      </EmailTemplateCardContainer>
    </>
  );
};

export default EmailTemplates;
