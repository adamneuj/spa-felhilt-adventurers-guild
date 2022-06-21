import { AppBar, Button, createTheme, CssBaseline, Grid, IconButton, ThemeProvider, Typography } from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ErrorIcon from '@mui/icons-material/Error';
import PeopleIcon from '@mui/icons-material/People';
import StoreIcon from '@mui/icons-material/Store';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { NavigationTheme } from "../../themes/NavigationTheme";

export default function Navigation() {
    const [ expanded, changeExpanded ] = useState<boolean>(false)

    const theme = createTheme(NavigationTheme);
    const buttonWidth = '120px'
    const buttonHeight = '80px'

    const navigation = (
        <Grid textAlign='center' container>
            <Grid item xs={12}>
                <Button style={{width: buttonWidth, height: buttonHeight}} color='info'>
                    <Grid container>
                        <Grid item xs={12}>
                            <ErrorIcon/>
                        </Grid>
                        <Grid item xs={12} pb={1}>
                            <Typography align='center' variant="subtitle2" component="div">
                                Adventures
                            </Typography>
                        </Grid>
                    </Grid>
                </Button>
                <Button style={{width: buttonWidth, height: buttonHeight}} color='info'>
                    <Grid textAlign='center' container>
                        <Grid item xs={12}>
                            <PeopleIcon/>
                        </Grid>
                        <Grid item xs={12} pb={1}>
                            <Typography align='center' variant="subtitle2" component="div">
                                Characters
                            </Typography>
                        </Grid>
                    </Grid>
                </Button>
                <Button style={{width: buttonWidth, height: buttonHeight}} color='info'>
                    <Grid textAlign='center' container>
                        <Grid item xs={12}>
                            <StoreIcon/>
                        </Grid>
                        <Grid item xs={12} pb={1}>
                            <Typography align='center' variant="subtitle2" component="div">
                                Shop
                            </Typography>
                        </Grid>
                    </Grid>
                </Button>
                <Button style={{width: buttonWidth, height: buttonHeight}} color='info'>
                    <Grid textAlign='center' container>
                        <Grid item xs={12}>
                            <TravelExploreIcon/>
                        </Grid>
                        <Grid item xs={12} pb={1}>
                            <Typography align='center' variant="subtitle2" component="div">
                                Lore
                            </Typography>
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
                            <Typography align='center' variant="subtitle2" component="div">
                            Menu
                            </Typography>
                        </Button>
                    </Grid>
                    {expanded ? navigation : null}
                </Grid>
            </AppBar>
        </ThemeProvider> 
    )
}