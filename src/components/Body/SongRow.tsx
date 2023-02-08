import React from 'react';
import SongRowContainer from "./SongRowContainer";
import SongInfo from "./SongInfo";

function SongRow({track}) {
    return (
        <SongRowContainer>
            <img src={track.album.images[0].url} alt=""/>
            <SongInfo>
                <h4>{track.name}</h4>
                <p>
                    {
                        track.artists.map(artist => artist.name).join(", ")
                    }
                    {
                        track.album.name
                    }
                </p>
            </SongInfo>
        </SongRowContainer>
    )
}


export default SongRow;