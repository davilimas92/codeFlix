import { ThemeProvider, Box, Typography } from "@mui/material"
import Header from "./components/Header"
import Layout from "./components/Layout"
import { appTheme } from "./config/theme"
import { Routes, Route, Link } from "react-router-dom"

export const App = () => (
  <ThemeProvider theme={appTheme}>
    <Box
      component="main"
      sx={{
        height: "100vh",
        backgroundColor: theme => theme.palette.grey[900],
      }}
    >
      <Header />
      <Layout>
        <Typography variant="h1" component="h1">
          Welcome to CodeFlix!
        </Typography>
      </Layout>
    </Box>
  </ThemeProvider>
)
