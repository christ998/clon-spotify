import React from 'react';
import SidebarContainer from "./SidebarContainer";
import SidebarItem from "./SidebarItems";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
function Sidebar() {
    return (
        <SidebarContainer>
            <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="logo"/>
            <SidebarItem title="Home" Icon={HomeIcon}/>
            <SidebarItem title="Search" Icon={SearchIcon}/>
            <SidebarItem title="Your Library" Icon={LibraryMusicIcon}/>
        </SidebarContainer>
    );
}

export default Sidebar;