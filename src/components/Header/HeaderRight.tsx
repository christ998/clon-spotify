import React from 'react';
import {Box} from "@mui/material";

function HeaderRight({children}) {
    return (
        <Box className="header_right">
            {children}
        </Box>
    );
}

export default HeaderRight;