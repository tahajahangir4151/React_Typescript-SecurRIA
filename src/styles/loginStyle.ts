import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const Logo = styled("img")(() => ({
    position: "absolute",
    top: "50px",
    left: "50px",
    height: "60px",
}));

export const StyledContainer = styled(Container)(() => ({
    marginTop: "30vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}))

export const FormContainer = styled(Box)(({ theme }) => ({
    padding: "30px",
    boxShadow: theme.shadows[3],
    borderRadius: "10px",
    backgroundColor: theme.palette.common.white,
    textAlign: "center",
    width: "60vh"
}))

export const FormHeading = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: theme.typography.h5.fontWeight,
    fontFamily: theme.typography.fontFamily,
    textWrap: "nowrap"
}))

export const FormSecondaryHeading = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20px",
    color: theme.palette.secondary.main,
    marginTop: "10px",
}))

export const StyledTextField = styled(TextField)(({ theme }) => ({
    backgroundColor: "#f9f9f9",
    borderRadius: theme.shape.borderRadius,
    "& .MuiInputLabel-root.Mui-focused": {
        color: "#053065",
    },
    "& .MuiOutlinedInput-root": {
        "&:hover fieldset": {
            borderColor: "#053065",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#053065",
        },
    },
}))

export const ForgotPwdBox = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "8px"
}))

export const ForgotLink = styled(Link)(({ theme }) => ({
    fontSize: "14px",
    fontWeight: "bolder",
    textDecoration: "none",
    color: theme.palette.primary.main
}))

export const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50px",
    fontSize: "16px",
    padding: "10px",
    width: "85%",
    marginTop: "20px",
    "&:hover": {
        backgroundColor: theme.palette.primary.dark,
    },
}))