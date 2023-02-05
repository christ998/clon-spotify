import React from 'react';
import BodyContainer from "./BodyContainer";
import Header from "../Header/Header";
import {useSelector} from "react-redux";
import {selectPlaylist} from "../../reducers/PlaylistSlice";
import Info from "./Info";

function SpotifyBody() {

    const playlist = useSelector(selectPlaylist)
    return (
        <BodyContainer>
            <Header/>
            <Info>
                <img src={playlist?.images[0]?.url}/>
            </Info>
        </BodyContainer>
    );
}

export default SpotifyBody;