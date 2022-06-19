import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

export default function Logout() {
    const { logout } = useAuth0();

    return(
        <Button
            onClick={() => logout()}
            variant="text"
            size='large'
            color='info'
        >
            Logout
        </Button>
    )
}