import React from 'react';
import {Box} from "@mui/material";

function Info({children}) {
    return (
        <Box className="info_container">
            {children}
        </Box>
    );
}

export default Info;