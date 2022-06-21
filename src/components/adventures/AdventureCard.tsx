import { Button, Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import { useRef } from "react";

export interface AdventureCardProps {
    adventureName: string;
    date: Date;
    maxPlayers: number;
    playerCount: number;
    gameMaster: string;
    length: number;
    balance: string;
    synopsis: string;
}

export default function AdventureCard(props: AdventureCardProps) {
    const { adventureName, date, maxPlayers, playerCount, gameMaster, length, balance, synopsis } = props

    return(
        <Grid container pb='10px'>
            <Card sx={{maxWidth: 1}} raised>
                <CardContent>
                    <Grid container>
                        <Grid item xs={6} textAlign='left'>
                            <Typography variant='h4' component='div' sx={{ flexGrow: 1 }} pb='10px'>
                                {adventureName}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} textAlign='right'>
                        <Button
                            onClick={() => console.log('clicked')}
                            variant="outlined"
                            size='medium'
                            color='info'
                        >
                            Join Adventure
                        </Button>
                        </Grid>
                        <Grid item xs={12} pb='10px'>
                            <Divider/>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography variant='body1' component='div' sx={{ flexGrow: 1 }} pb='10px'>
                                Date: {date.getMonth()}/{date.getDay()}/{date.getFullYear()}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant='body1' component='div' sx={{ flexGrow: 1 }} pb='10px'>
                                Players: {playerCount}/{maxPlayers}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant='body1' component='div' sx={{ flexGrow: 1 }} pb='10px'>
                                GM: {gameMaster}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant='body1' component='div' sx={{ flexGrow: 1 }} pb='10px'>
                                Time: {date.getHours()}:{date.getMinutes()}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant='body1' component='div' sx={{ flexGrow: 1 }} pb='10px'>
                                Length: {length} hours
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant='body1' component='div' sx={{ flexGrow: 1 }} pb='10px'>
                                Combat/Roleplay/Exploration Balance: {balance}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} pb='10px'>
                            <Divider>
                                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} pb='10px'>
                                    Synopsis
                                </Typography>
                            </Divider>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='body1' component='div' sx={{ flexGrow: 1 }} pb='10px'>
                                {synopsis}
                            </Typography>
                        </Grid>               
                    </Grid>
                </CardContent>
            </Card>
        </Grid>

    )
}