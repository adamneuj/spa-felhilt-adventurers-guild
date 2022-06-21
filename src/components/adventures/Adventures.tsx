import { Button, Divider, Grid, Typography } from "@mui/material";
import { MouseEvent } from "react";

export default function Adventures() {
    const startNewAdventure = () => {
        console.log('clicked!')
    }
    return(
        <Grid textAlign='center' container>
            <Grid item xs={12}>
                <Divider>
                    <Typography variant='h4' component='div' sx={{ flexGrow: 1 }} pb='10px'>
                        Adventures
                    </Typography>
                </Divider>
            </Grid>
            <Grid item xs={12}>
            <Button
                onClick={() => startNewAdventure()}
                variant="outlined"
                size='medium'
                color='info'
            >
                Start New Adventure
            </Button>
            </Grid> 
        </Grid>
    )
}