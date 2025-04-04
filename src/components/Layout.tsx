import { Box, Container } from "@mui/material"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <Container maxWidth="xs" sx={{ mt: 8, mb: 8, bg: "White" }}>
        {children}
      </Container>
    </Box>
  )
}
