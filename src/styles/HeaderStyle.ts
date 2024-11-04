import { AppBar, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Appbar = styled(AppBar)(({ theme }) => ({
    position: "static",
    backgroundColor: theme.palette.primary.main,
    justifyContent: "space-between"
}))

export const ProfileContainer = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
}))

export const ProfileName = styled(Typography)(({ theme }) => ({
    marginLeft: 2,
    color: theme.palette.common.white,
    fontSize: "15px",
    fontWeight: 400
}))