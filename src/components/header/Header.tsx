import Login from "./Login";
import Title from "./Title";
import { AppBar, createTheme, CssBaseline, ThemeProvider, Toolbar } from "@mui/material";

const theme = createTheme({
    typography: {
        h4: {
          color: '#252525'
        }
    },
    palette: {
      primary: {
        main: '#aa3013'
      },
      info: {
        main: '#252525'
      }
  }});

export default function Header() {
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AppBar position='static'>
                <Toolbar>
                    <Title/>
                    <Login/>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}