import React from "react";
import HomeHeader from "./HomeHeader";
import {Box} from "@mui/material";
import useTheme, {themeType} from "../../hooks/useTheme";

const Home : React.FC = () => {
    const theme : themeType = useTheme();
    return(
        <>
            <Box sx={{ flex: 1, flexDirection: 'column', height: '90vh', display: 'flex'
                ,backgroundColor: 'red' }}>
            <HomeHeader theme={theme}/>
            </Box>
    </>
    )
}
export default Home;