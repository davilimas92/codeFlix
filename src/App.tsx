import { ThemeProvider, Box, createTheme } from "@mui/material"
import Header from "./components/Header"
import Layout from "./components/Layout"

const theme = createTheme({})

export const App = () => (
  <ThemeProvider theme={theme}>
    <Box
      component="main"
      sx={{
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        height: "100vh",
      }}
    >
      <Header />
      <Layout>
        <h1>Davi</h1>
      </Layout>
    </Box>
  </ThemeProvider>
)
