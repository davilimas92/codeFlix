import { createTheme } from "@mui/material"

export const appTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#f5f5f5" },
    secondary: { main: "#3f50b5" },
    background: { default: "#212121" },
    text: { primary: "#f5f5f5", secondary: "#ffffff" },
  },
})
