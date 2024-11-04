import { Box, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledGrid = styled(Grid)(() => ({
    padding: 0
}))

export const StyledHeading = styled(Box)(() => ({
    display: " flex",
    flexDirection: "column"
}))

export const TitleTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: theme.typography.fontFamily,
    fontSize: "24px",
    [theme.breakpoints.up("md")]: {
        fontSize: "30px"
    }
}));

export const DescriptionTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.main,
    marginTop: "10px", fontSize: "12px",
    [theme.breakpoints.up("md")]: {
        fontSize: "14px"
    }
}))

export const ButtonGrid = styled(Grid)(() => ({
    display: "flex",
    justifyContent: "flex-end"
}))

export const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: "16px",
    padding: "5px 20px",
    borderRadius: theme.shape.borderRadius,
    height: "55px",
    "&:hover": {
        backgroundColor: theme.palette.primary.dark,
    },
}))