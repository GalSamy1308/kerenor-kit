import React from "react";
import HomeHeader from "./HomeHeader";
import {Box} from "@mui/material";
import useTheme, {themeType} from "../../hooks/useTheme";
import HomeContent from "./HomeContent";

const Home: React.FC = () => {
    const theme: themeType = useTheme();
    return (
        <>
            <Box sx={{
                flex: 1, flexDirection: 'column', height: '90vh', display: 'flex', minWidth: 0
            }}>
                <HomeHeader theme={theme}/>
                <HomeContent theme={theme}/>
            </Box>
        </>
    )
}
export default Home;