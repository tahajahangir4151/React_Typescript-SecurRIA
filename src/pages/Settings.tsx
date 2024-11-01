import { Box, Grid, Typography } from '@mui/material';
import React from 'react'

const Settings: React.FC = () => {
  return (
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
            Settings
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
  );
};

export default Settings
