import { Box, Grid, useTheme } from "@mui/material";
import React, { useState } from "react";
import TableComponent from "../components/Table";
import { campaignRunningData } from "../data/compaignRunningData";
import PaginationComponent from "../components/Pagination";
import { useNavigate } from "react-router-dom";
import {
  DescriptionTypography,
  StyledGrid,
  StyledHeading,
  TitleTypography,
} from "../styles/PageHeadingStyle";

const CompaignRunning: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();
  const theme = useTheme();

  const handlePageChange = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  // Handle Number of rows change per page
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Function to dynamically set row background colors
  const getRowBackgroundColor = (index: number) => {
    return index % 2 === 0 ? "#E6F2FF" : theme.palette.common.white;
  };

  const headers = [
    "1st Quarter Staff ",
    "Targets Sent",
    "Date Sent",
    "Delivered",
    "Opens",
    "Clicks",
  ];

  // Handle row click based on the "quarterStaff" value
  const handleRowClick = (row: any) => {
    if (row.quarterStaff === "Preview Email") {
      navigate("/email-templates");
    } else if (row.quarterStaff === "Preview Landing Page") {
      navigate("/landing-page-templates");
    }
  };

  return (
    <>
      <StyledGrid container spacing={2}>
        <Grid item xs={12} md={8}>
          <StyledHeading>
            <TitleTypography variant="h4">Campaigns Running</TitleTypography>
            <DescriptionTypography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </DescriptionTypography>
          </StyledHeading>
        </Grid>
      </StyledGrid>
      <Box sx={{ mt: 3 }}>
        <TableComponent
          data={campaignRunningData.slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage
          )}
          headers={headers}
          getRowBackgroundColor={getRowBackgroundColor}
          onRowClick={handleRowClick}
        />
        <PaginationComponent
          count={campaignRunningData.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>{" "}
    </>
  );
};

export default CompaignRunning;
