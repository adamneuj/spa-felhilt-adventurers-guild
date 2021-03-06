import Button from '@mui/material/Button';
import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
    const { loginWithRedirect } = useAuth0();

    return(
        <Button
            onClick={() => loginWithRedirect()}
            variant="text"
            size='large'
            color='info'
        >
            Login
        </Button>
    )
}