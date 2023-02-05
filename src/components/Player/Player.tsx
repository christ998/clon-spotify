import React from 'react';
import SpotifyBody from "../Body/SpotifyBody";
import Sidebar from "../Sidebar/Sidebar";
import PlayerContainer from "./PlayerContainer";

function Player() {
    return (
        <PlayerContainer>
            <Sidebar/>
            <SpotifyBody/>
        </PlayerContainer>
    );
}

export default Player;