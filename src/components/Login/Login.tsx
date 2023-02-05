import React from "react";
import {Box, Link} from "@mui/material";
import LoginButton from "./LoginButton";
import {endpoint, parameters} from "../../logicSpotify";


const Login = () => {
    return (
        <Box className={"login_container"}>
            <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="logo"/>
            <Link href={endpoint + parameters} underline="none">
                <LoginButton>Login with Spotify</LoginButton>
            </Link>
        </Box>
    )
};

export default Login;
