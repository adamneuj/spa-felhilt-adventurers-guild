import { Container, createTheme, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import Welcome from "../welcome/Welcome";

const theme = createTheme({
    spacing: 16
});

export default function MainContent() {
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container maxWidth={false} style={{paddingTop: '16px'}}>
                <Welcome/>
            </Container>
        </ThemeProvider>
    )
}