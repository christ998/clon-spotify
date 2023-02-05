import React from 'react';
import {Box} from "@mui/material";

function HeaderLeft({children}) {
    return (
        <Box className="header_left">
            {children}
        </Box>
    );
}

export default HeaderLeft;