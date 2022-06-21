import { Button, Divider, Grid, Typography } from "@mui/material";
import { MouseEvent } from "react";
import AdventureCard from "./AdventureCard";
import { adventureCards } from "./AdventureCardData";

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
            <Grid item xs={12} pb='10px'>
            <Button
                onClick={() => startNewAdventure()}
                variant="outlined"
                size='medium'
                color='info'
            >
                Start New Adventure
            </Button>
            </Grid>
            <Grid item xs={12} pb='10px'>
                {adventureCards.map(card => {
                    return <AdventureCard 
                            adventureName={card.adventureName} 
                            date={card.date} 
                            maxPlayers={card.maxPlayers} 
                            playerCount={card.playerCount} 
                            gameMaster={card.gameMaster} 
                            length={card.length}
                            balance={card.balance} 
                            synopsis={card.synopsis}
                            />})}
            </Grid>
        </Grid>
    )
}