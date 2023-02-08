import React from 'react';
import SpotifyBody from "../Body/SpotifyBody";
import Sidebar from "../Sidebar/Sidebar";
import PlayerContainer from "./PlayerContainer";
import Footer from "../Footer/Footer";

function Player() {
    return (
        <PlayerContainer>
            <Sidebar/>
            <SpotifyBody/>
            <Footer/>
        </PlayerContainer>
    );
}

export default Player;