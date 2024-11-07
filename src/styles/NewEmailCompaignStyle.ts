import { Box, Button, Select, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface StyledSelectProps {
    hasValue: boolean;
}

export const StyledLabel = styled(Typography)(({ theme }) => ({
    marginBottom: "5px",
    fontWeight: "bold",
    color: theme.palette.primary.main,
    fontFamily: theme.typography.fontFamily
}))

export const StyledTextField = styled(TextField)(({ theme }) => ({
    "& .MuiInputLabel-root": {
        color: "#000",
        fontWeight: "bold",
        fontSize: "16px",
    },
    "& .MuiInputBase-root": {
        marginTop: "5px",
        border: `1px solid #053065`,
        height: "45px",
        borderRadius: theme.shape.borderRadius,
        "& input::placeholder": {
            color: "#8E8E8E",
            opacity: 1,
            fontWeight: "500",
        },
    },
    "& .MuiInputAdornment-root": {
        color: theme.palette.primary.main,
    }
}));


export const StyledSelect = styled(Select)<StyledSelectProps>(({ theme, hasValue }) => ({
    marginTop: "5px",
    border: `1px solid #053065`,
    height: "45px",
    borderRadius: theme.shape.borderRadius,
    "& .MuiSelect-select": {
        color: hasValue ? "#000" : "#8E8E8E",
  fontWeight: "500",
    },
    "& .MuiSvgIcon-root": {
        color: theme.palette.primary.main,
    },
}));


export const DateTimeContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    marginTop: "15px",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
        flexDirection: "row",
    },
}))

export const StyledNowButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: "17px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
        width: "48%",
    },
    textTransform: "none",
    marginBottom: "10px",
    [theme.breakpoints.up("md")]: {
        marginBottom: "0px",
    },
}))

export const StyledScheduledBtn = styled(Button)(({ theme }) => ({
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    fontSize: "17px",
    width: "100%",
    textTransform: "none",
    marginLeft: "0px",
    [theme.breakpoints.up("lg")]: {
        marginLeft: "15px",
    },
}))

export const FollowUpContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column"
}))

export const StyledBtnContainer = styled(Box)(() => ({
    display: "flex",
    justifyContent: "flex-start",
    marginTop: "40px",
}))

export const StyledBtn = styled(Button)(({ theme }) => ({
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    fontSize: "17px",
    width: "100%",
    textTransform: "none",
}))

export const StyledSimulateBtn = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: "17px",
    width: "100%",
    textTransform: "none",
    marginBottom: "10px",
}))

