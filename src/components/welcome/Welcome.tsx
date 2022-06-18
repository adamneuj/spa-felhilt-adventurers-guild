import { Divider, Typography } from "@mui/material";

export default function Welcome() {
    return(
        <div>
            <Divider>
                <Typography variant="h3" component="div">
                    Welcome to Felhilt!
                </Typography>
            </Divider>
            <Typography align='center' variant="body1" component="div">
                    Let's begin our adventure.
            </Typography>
        </div>
    )
}