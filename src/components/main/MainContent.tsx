import { Container, createTheme, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import ProtectedRoutes from "./ProtectedRoutes";

const theme = createTheme({
    spacing: 16
});

export default function MainContent() {
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container maxWidth={false} style={{paddingTop: '16px'}}>
                <ProtectedRoutes/>
            </Container>
        </ThemeProvider>
    )
}