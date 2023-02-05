import {createTheme} from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
    palette: {
        primary: {
            main: "#1db954",
        }
    },
    typography: {
        fontFamily: [
            'Roboto'
        ].join(",")
    }

})
export default theme;