import React from 'react';
import {Box} from "@mui/material";

function FooterContainer({children}) {
    return (
        <Box className="footer_container">
            {children}
        </Box>
    );
}

export default FooterContainer;