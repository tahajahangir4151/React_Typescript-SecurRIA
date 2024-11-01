import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react'
import TableComponent from '../components/Table';
import { campaignRunningData } from '../data/compaignRunningData';
import PaginationComponent from '../components/Pagination';
import { useNavigate } from 'react-router-dom';

const CompaignRunning: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();

  const handlePageChange = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  // Handle Number of rows change per page
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page when changing rows per page
  };

  // Function to dynamically set row background colors
  const getRowBackgroundColor = (index: number) => {
    return index % 2 === 0 ? "#E6F2FF" : "#FFFFFF";
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
      navigate("/email-templates"); // Navigate to the email template page
    } else if (row.quarterStaff === "Preview Landing Page") {
      navigate("/landing-page-templates"); // Navigate to the landing page
    }
  };

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
                fontSize: { xs: "24px", md: "30px" }, // Responsive font size
                fontFamily: "Nunito Sans",
              }}
            >
              Campaigns Running
            </Typography>
            <Typography
              color="#000000"
              mt={"10px"}
              fontSize={{ xs: "12px", md: "14px" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </Typography>
          </Box>
        </Grid>
      </Grid>
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

export default CompaignRunning
