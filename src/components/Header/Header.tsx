import React from 'react';
import HeaderContainer from "./HeaderContainer";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import SearchIcon from '@mui/icons-material/Search';
import {Avatar} from "@mui/material";

function Header() {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <SearchIcon/>
                <input type="text" placeholder="Search for Artists, Songs or other"/>
            </HeaderLeft>
            <HeaderRight>
                <Avatar/>
                <h4>Oliverm316</h4>
            </HeaderRight>
        </HeaderContainer>
    );
}

export default Header;