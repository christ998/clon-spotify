import React from 'react';
import {Box} from "@mui/material";

function HeaderContainer({children}) {
    return (
        <Box className="header_container">
            {children}
        </Box>
    );
}

export default HeaderContainer;