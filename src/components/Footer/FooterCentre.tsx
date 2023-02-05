import React from 'react';
import {Box} from "@mui/material";

function FooterCentre({children}) {
    return (
        <Box className="footer_centre">
            {children}
        </Box>
    );
}

export default FooterCentre;