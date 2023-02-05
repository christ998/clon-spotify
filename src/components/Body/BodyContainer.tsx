import React from 'react';
import {Box} from "@mui/material";

function BodyContainer({children}) {
    return (
        <Box className="body_container">
            {children}
        </Box>
    );
}

export default BodyContainer;