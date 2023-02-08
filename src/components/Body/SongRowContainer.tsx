import React from 'react';
import {Box} from "@mui/material";

function SongRowContainer({children}) {
    return (
        <Box className="songRowContainer">
            {children}
        </Box>
    );
}

export default SongRowContainer;