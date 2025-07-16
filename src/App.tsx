import React from 'react';
import { Box } from '@mui/material';
import SideBar from "./components/SideBar/SideBar";
import useTheme, {themeType} from "./hooks/useTheme";
import Home from './components/Home/Home';

const App = () => {
    const theme : themeType = useTheme()
    return (
        <Box
            sx={{
                width: '100vw',
                height: '100vh',
                boxSizing: 'border-box', // to include padding in total size
                backgroundColor: theme.backgroundColor,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                gap: 3,
                p:3
            }}
            dir={'rtl'} // Right-to-left direction for Hebrew
        >
            <SideBar />
            <Home/>
        </Box>
    );
};

export default App;
