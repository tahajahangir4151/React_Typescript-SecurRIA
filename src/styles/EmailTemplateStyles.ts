import { Box, Button, Divider, List, ListItem, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

export const EmailTemplateCardContainer = styled(Box)(() => ({
    maxHeight: "75vh",
    overflowY: "auto",
    marginTop: 2,
    border: "0.5px solid #C1C1C1",
    padding: "10px",
    borderRadius: "10px",
}))

export const CardContainer = styled(Box)(({ theme }) => ({
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
        padding: theme.spacing(3),
    },
}));

export const TypographyStrong = styled("strong")(({ theme }) => ({
    color: theme.palette.secondary.main
}))

export const LogoContainer = styled(Box)(() => ({
    marginTop: "8px",
    textAlign: "center"
}))

export const LogoImg = styled("img")(() => ({
    maxHeight: "40px",
    width: "auto"
}))

export const MessageContainer = styled(Box)(() => ({
    marginY: 2,
    textAlign: "justify",
    padding: "50px"
}))

export const MessageTypography = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    [theme.breakpoints.up("md")]: {
        fontSize: "16px"
    },
}))

export const Separator = styled(Divider)(() => ({
    marginTop: "35px"
}))

export const StyledList = styled(List)(() => ({
    textAlign: "left",
    padding: 0,
    maxWidth: "400px",
    marginTop: "25px",
}))

export const StyledListItem = styled(ListItem)(() => ({
    padding: "4px 0", color: "#666666"
}))

export const AuthenticateBtn = styled(Button)(({theme}) => ({
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    fontWeight: "bold",
    paddingX: 3,
    paddingY: 1,
    "&:hover": {
        backgroundColor: "#005BB5",
    },

}))
