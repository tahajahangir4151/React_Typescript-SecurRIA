import { Button, DialogActions, DialogTitle, IconButton, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledDialogueTitle = styled(DialogTitle)(({ theme }) => ({
    textAlign: "center",
    color: theme.palette.primary.main,
    fontSize: "40px",
    position: "relative",
    fontFamily: theme.typography.fontFamily
}))

export const StyledCloseButton = styled(IconButton)(() => ({
    position: "absolute",
    right: 8,
    top: 8,
    color: "#BE0505",
}))

export const Subtitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.main,
    textAlign: "center",
    fontSize: "14px",
    padding: "15px",
    fontFamily: theme.typography.fontFamily,
    margin: "0 15px 20px",
    fontWeight: 400
}))

export const InputLabel = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    color: theme.palette.secondary.main,
    marginTop: "10px",
    marginBottom: "5px",
    paddingLeft:"20px"
}))

export const StyledTextField = styled(TextField)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
        marginBottom: "15px",
        paddingLeft: "5px",
        height: "45px",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "#e6f2ff",
        "& input::placeholder": {
            color: "#8E8E8E",
            fontWeight: "500",
        },
        "&:hover fieldset": {
            borderColor: "#053065",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#053065",
        },
    },
}));

export const StyledDialogueAction = styled(DialogActions)(() => ({
    justifyContent: "center",
    paddingBottom: "15px"
}))

export const StyledDialogueButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: "#FFFFFF",
    "&:hover": {
        backgroundColor: "#333",
    },
    width: "100px",
    height: "40px",
    fontWeight: "bold",
    marginRight: "10px"
}))

export const StyledSubmitButton = styled(Button)(({theme})=>({
    backgroundColor: theme.palette.primary.main,
    color: "#FFFFFF",
    "&:hover": {
        backgroundColor: theme.palette.primary.dark,
    }, 
    width: "100px",
    height: "40px",
    fontWeight: "bold",
}))