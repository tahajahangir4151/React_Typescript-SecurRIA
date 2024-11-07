import { Grid } from "@mui/material";
import React from "react";
import {
  DescriptionTypography,
  StyledGrid,
  StyledHeading,
  TitleTypography,
} from "../styles/PageHeadingStyle";

const Reporting: React.FC = () => {
  return (
    <>
      <StyledGrid container spacing={2}>
        <Grid item xs={12} md={8}>
          <StyledHeading>
            <TitleTypography>Reporting</TitleTypography>
            <DescriptionTypography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </DescriptionTypography>
          </StyledHeading>
        </Grid>
      </StyledGrid>
    </>
  );
};

export default Reporting;
