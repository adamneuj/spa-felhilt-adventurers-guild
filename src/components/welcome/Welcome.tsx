import { Divider, Grid, Typography } from "@mui/material";

export default function Welcome() {
    return(
        <Grid container>
            <Grid item xs={12}>
                <Divider>
                    <Typography variant="h3" component="div">
                        Welcome to Felhilt!
                    </Typography>
                </Divider>
            </Grid>
            <Grid item xs={12}>
                <Typography align='center' variant="body1" component="div">
                        Let's begin our adventure.
                </Typography>
            </Grid>
        </Grid>
    )
}