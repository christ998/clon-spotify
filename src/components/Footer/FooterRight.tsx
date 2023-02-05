import React from 'react';
import {Box} from "@mui/material";

function FooterRight({children}) {
    return (
        <Box className="footer_right">
            {children}
        </Box>
    );
}

export default FooterRight;