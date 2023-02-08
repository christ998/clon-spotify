import React from 'react';
import {Box} from "@mui/material";

function InfoText({children}) {
    return (
        <Box className="info_text">
            {children}
        </Box>
    );
}

export default InfoText;