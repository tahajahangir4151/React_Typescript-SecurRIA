import React from "react";
import { Email } from "../data/emailTemplateData";
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import {
  AuthenticateBtn,
  CardContainer,
  LogoContainer,
  LogoImg,
  MessageContainer,
  MessageTypography,
  Separator,
  StyledList,
  StyledListItem,
  TypographyStrong,
} from "../styles/EmailTemplateStyles";

interface EmailCardProps {
  email: Email;
}

const EmailTemplateCard: React.FC<EmailCardProps> = ({ email }) => {
  const eventList = email.eventOccured
    .split("\n")
    .filter((event) => event.trim() !== "");

  return (
    <CardContainer>
      <Grid
        container
        spacing={2}
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Grid item xs={10} sx={{ textAlign: "justify" }}>
          <Typography variant="body2" color="textSecondary">
            <TypographyStrong>From:</TypographyStrong> {email.from}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <TypographyStrong>Sent:</TypographyStrong> {email.date}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <TypographyStrong>To:</TypographyStrong> {email.to}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <TypographyStrong>Subject:</TypographyStrong> {email.subject}
          </Typography>
        </Grid>
      </Grid>
      <LogoContainer>
        <LogoImg src={email.logoUrl} alt="Logo" />
      </LogoContainer>
      <MessageContainer>
        <MessageTypography variant="body1">
          <strong>Dear Customer,</strong>
        </MessageTypography>
        <MessageTypography
          variant="body1"
          sx={{ mt: "25px" }}
          color="textSecondary"
        >
          {email.message}
        </MessageTypography>
        <Separator />
        <MessageTypography
          variant="body1"
          sx={{
            fontWeight: "bold",
            marginTop: "16px",
          }}
        >
          Possible events occurred:
        </MessageTypography>
        <StyledList>
          {eventList.map((event, index) => (
            <StyledListItem key={index}>{event.trim()}</StyledListItem>
          ))}
        </StyledList>
        <Separator />
        <MessageTypography
          variant="body1"
          sx={{ marginTop: "16px" }}
          color="textSecondary"
        >
          {email.authenticationMessage}
        </MessageTypography>
        <Box sx={{ marginTop: 3 }}>
          <AuthenticateBtn variant="contained">Authenticate now</AuthenticateBtn>
        </Box>
        <MessageTypography
          variant="body1"
          sx={{ marginTop: "16px" }}
          color="textSecondary"
        >
          {email.Regards.split(",").map((line, index) => (
            <span key={index}>
              {line.trim()}
              <br />
            </span>
          ))}
        </MessageTypography>
      </MessageContainer>
    </CardContainer>
  );
};

export default EmailTemplateCard;
