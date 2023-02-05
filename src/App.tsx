import "./App.scss";
import Login from "./components/Login/Login";
import {ThemeProvider} from "@mui/material";
import theme from "./theme"
import Player from "./components/Player/Player";
import Footer from "./components/Footer/Footer";
import SpotifyWebApi from "spotify-web-api-js";
import {useEffect} from "react";
import {getTokenFromUrl} from "./logicSpotify";
import {useDispatch, useSelector} from "react-redux";
import {selectUser, SET_USER} from "./reducers/UserSlice";
import {selectToken, SET_TOKEN} from "./reducers/TokenSlice";

const spotifyApi = new SpotifyWebApi()

function App() {
    const dispatch = useDispatch()
    const token = useSelector(selectToken)
    const user = useSelector(selectUser)

    useEffect(() => {
        const hash = getTokenFromUrl()
        // window.location.hash=""
        const _token = hash.access_token
        if (_token){
            dispatch(SET_TOKEN(_token))
            spotifyApi.setAccessToken(_token)
            spotifyApi.getMe().then(user => {
                dispatch(SET_USER({user:user}))
            })
            console.log("token => ", token)
            spotifyApi.getPlaylist().then(playlist => console.log(playlist))
        }

    },[dispatch])

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                {
                    user ? <Player/> : <Login/>
                }

            </div>
        </ThemeProvider>
    );
}

export default App;
