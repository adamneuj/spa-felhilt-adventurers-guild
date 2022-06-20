import { useAuth0 } from "@auth0/auth0-react";
import { AppBar, Button, createTheme, CssBaseline, Grid, IconButton, ThemeProvider, Typography } from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ErrorIcon from '@mui/icons-material/Error';
import PeopleIcon from '@mui/icons-material/People';
import StoreIcon from '@mui/icons-material/Store';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import './navigation.css'

export default function Navigation() {
    const [ expanded, changeExpanded ] = useState<boolean>(false)

    const theme = createTheme({
        typography: {
            h6: {
                color: '#aa3013'
            },
            h4: {
              color: '#aa3013'
            }
        },
        palette: {
          primary: {
            main: '#252525'
          },
          info: {
            main: '#aa3013'
          }
    }});

    const navigation = (
        <Grid textAlign='center' container>
            <Grid item xs={12}>
                <Button style={{width: '150px', height: '100px'}} color='info'>
                    <Grid container>
                        <Grid item xs={12}>
                            <ErrorIcon/>
                        </Grid>
                        <Grid item xs={12} pb={1}>
                            Adventures
                        </Grid>
                    </Grid>
                </Button>
                <Button style={{width: '150px', height: '100px'}} color='info'>
                    <Grid textAlign='center' container>
                        <Grid item xs={12}>
                            <PeopleIcon/>
                        </Grid>
                        <Grid item xs={12} pb={1}>
                            Characters
                        </Grid>
                    </Grid>
                </Button>
                <Button style={{width: '150px', height: '100px'}} color='info'>
                    <Grid textAlign='center' container>
                        <Grid item xs={12}>
                            <StoreIcon/>
                        </Grid>
                        <Grid item xs={12} pb={1}>
                            Shop
                        </Grid>
                    </Grid>
                </Button>
                <Button style={{width: '150px', height: '100px'}} color='info'>
                    <Grid textAlign='center' container>
                        <Grid item xs={12}>
                            <TravelExploreIcon/>
                        </Grid>
                        <Grid item xs={12} pb={1}>
                            Lore
                        </Grid>
                    </Grid>
                </Button>
            </Grid>
        </Grid>
    )

    return(
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AppBar position='static'>
                <Grid textAlign='center' container>
                    <Grid item xs={12} p={1}>
                        <Button color='info' size='large' endIcon={expanded ? <ExpandLessIcon/> : <ExpandMoreIcon/>} onClick={() => changeExpanded(!expanded)}>
                            Menu
                        </Button>
                    </Grid>
                    {expanded ? navigation : null}
                </Grid>
            </AppBar>
        </ThemeProvider> 
    )
}