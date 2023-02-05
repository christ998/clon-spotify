import React from 'react';
import {Box} from "@mui/material";

function FooterLeft({children}) {
    return (
        <Box className="footer_left">
            {children}
        </Box>
    );
}

export default FooterLeft;