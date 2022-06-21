import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Adventures from "../adventures/Adventures";
import Welcome from "../welcome/Welcome";

export default function ProtectedRoutes() {
    const { isAuthenticated, isLoading } = useAuth0();
    const [ loggedIn, changeLoggedIn ] = useState<boolean>(isAuthenticated && !isLoading)

    useEffect(() => {
        if(!isLoading) {
            changeLoggedIn(isAuthenticated)
        }
    }, [isLoading, isAuthenticated])

    const homeComponent = (<Route path='/' element={<Welcome/>}/>)

    if(loggedIn) {
        return(
            <Routes>
                {homeComponent}
                <Route path='/adventures' element={<Adventures/>}/>
            </Routes>
        )
    } else {
        return(
            <Routes>
                {homeComponent}
                <Route path='*' element={<Welcome/>}/>
            </Routes>
        )
    }
}
