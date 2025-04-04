import { Box, Container } from "@mui/material"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ mt: 8, mb: 8, color: "White" }}>
        {children}
      </Container>
    </Box>
  )
}
