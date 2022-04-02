import { SessionProvider, useSession } from "@inrupt/solid-ui-react";
import { Console } from "console";
import { useState } from "react";
import FormLogIn from "./FormLogIn";
import ProfileViewer from "./ProfileViewer"
const Login_v2 = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const {session} = useSession();

    session.onLogin(() => {
        setIsLoggedIn(true);
    })

    session.onLogout(() => {
        setIsLoggedIn(false);
    })

    return(
        <SessionProvider sessionId="">
            {(!isLoggedIn) ? <FormLogIn/> : <ProfileViewer/>};
        </SessionProvider>
    )
}
export default Login_v2;