import React from 'react';
import {Box} from "@mui/material";

function Icons({children}) {
    return (
        <Box className="icons">
            {children}
        </Box>
    );
}

export default Icons;