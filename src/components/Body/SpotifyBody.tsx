import React from 'react';
import BodyContainer from "./BodyContainer";
import Header from "../Header/Header";
import {useSelector} from "react-redux";
import {selectPlaylist} from "../../reducers/PlaylistSlice";
import Info from "./Info";
import InfoText from "./InfoText";
import Songs from "./Songs";
import {Favorite, MoreHoriz, PlayCircleFilled} from "@mui/icons-material";
import SongRow from "./SongRow";
import Icons from "./Icons";

function SpotifyBody() {

    const playlist = useSelector(selectPlaylist)
    return (
        <BodyContainer>
            <Header/>
            <Info>
                <img src={playlist?.images?.[0].url} alt=""/>
                <InfoText>
                    <h4>PLAYLIST</h4>
                    <h1>Exitos Chile</h1>
                    <p>{playlist?.name}</p>
                </InfoText>
            </Info>

            <Songs>
                <Icons>
                    <PlayCircleFilled className="playCircleButton"/>
                    <Favorite/>
                    <MoreHoriz/>
                </Icons>
                {
                    playlist?.tracks?.items.map((item, index) => (
                        <SongRow track={item.track} key={index}></SongRow>
                    ))
                }
            </Songs>
        </BodyContainer>
    );
}

export default SpotifyBody;