import Login from "./Login";
import Title from "./Title";
import { AppBar, createTheme, CssBaseline, ThemeProvider, Toolbar } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
    const { user, isAuthenticated } = useAuth0();

    const userAuthenticated = () => {
        if(user && isAuthenticated) {
            return(
                <ExpandMoreIcon fontSize='large' htmlColor="#252525"/>
            )
        }
    }

    return(
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AppBar position='static'>
                <Toolbar>
                    <Title/>
                    {user && isAuthenticated ? <Logout/> : <Login/>}
                </Toolbar>
                {userAuthenticated()}
            </AppBar>
        </ThemeProvider>
    )
}