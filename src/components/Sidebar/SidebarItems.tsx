import React from 'react';
import {Box} from "@mui/material";

function SidebarItem({title, Icon}) {
    return (
        <Box className="sidebar__items">
            {
                Icon && <Icon/>
            }
            {
                Icon ? <h4>{title}</h4> : <h5>{title}</h5>
            }
        </Box>
    );
}

export default SidebarItem;