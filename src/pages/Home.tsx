import React, { useState } from "react";
import { Box, Grid, useTheme } from "@mui/material";
import { compaignData } from "../data/compaignData";
import TableComponent from "../components/Table";
import PaginationComponent from "../components/Pagination";
import {
  ButtonGrid,
  DescriptionTypography,
  StyledButton,
  StyledGrid,
  StyledHeading,
  TitleTypography,
} from "../styles/PageHeadingStyle";

const Home: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const theme = useTheme();

  const handlePageChange = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getRowBackgroundColor = (index: number) => {
    return index % 2 === 0 ? "#E6F2FF" : theme.palette.common.white;
  };

  const headers = [
    "Sent Date",
    "Name",
    "Open",
    "Internal Clicks",
    "Time Opened",
  ];

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
        <ButtonGrid item xs={12} md={4}>
          <StyledButton>Create New Email</StyledButton>
        </ButtonGrid>
      </StyledGrid>
      <Box sx={{ mt: 3 }}>
        <TableComponent
          data={compaignData.slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage
          )}
          headers={headers}
          getRowBackgroundColor={getRowBackgroundColor}
        />
        <PaginationComponent
          count={compaignData.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>{" "}
    </>
  );
};

export default Home;
