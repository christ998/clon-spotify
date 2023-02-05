import React from 'react';
import FooterContainer from "./FooterContainer";
import FooterLeft from "./FooterLeft";
import FooterCentre from "./FooterCentre";
import FooterRight from "./FooterRight";
import {Box, Grid, Slider} from "@mui/material";
import {
    PlayCircleOutline,
    PlaylistPlay,
    Repeat,
    ShuffleOn,
    SkipNext,
    SkipPrevious,
    VolumeDown
} from "@mui/icons-material";
import ShuffleIcon from '@mui/icons-material/Shuffle';
function Footer() {
    return (
        <FooterContainer>
            <FooterLeft>
                <img src="https://static.posters.cz/image/750/buque-costero/coldplay-parachutes-album-cover-i56853.jpg"/>
                <Box>
                    <h4>Shape of My heart</h4>
                    <p>Sting</p>
                </Box>
            </FooterLeft>
            <FooterCentre>
                <ShuffleIcon/>
                <SkipPrevious/>
                <PlayCircleOutline/>
                <SkipNext/>
                <Repeat/>
            </FooterCentre>
            <FooterRight>
                <Grid container spacing={2}>
                    <Grid item><PlaylistPlay/></Grid>
                    <Grid item><VolumeDown/></Grid>
                    <Grid item xs><Slider/></Grid>
                </Grid>
            </FooterRight>
        </FooterContainer>
    );
}

export default Footer;