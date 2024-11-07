import { Button, Divider } from "@mui/material"
import { styled } from "@mui/material/styles"

export const SidebarContainer = styled("div")(({ theme }) => ({
    width: "250px",
    backgroundColor: theme.palette.common.white,
    height: "100vh",
    padding: "20px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    boxShadow: "rgba(0, 0, 0, 0.50) 0px 3px 8px",
}))

export const Logo = styled("img")(() => ({
    textAlign: "center", marginBottom: "20px"
}))

export const Separator = styled(Divider)(() => ({
    borderBottomWidth: 2.5, marginBottom: "20px"
}))

export const LogoutBtn = styled(Button)(({ theme }) => ({
    width: "100%",
    padding: "15px 0",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    border: "none",
    borderRadius: theme.shape.borderRadius,
    cursor: "pointer",
    fontWeight: "bold",
    textTransform: "none"
}))