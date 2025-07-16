import React from 'react';
import {Box, IconButton, List, ListItemButton, Paper, SvgIcon, Typography} from '@mui/material';
import buttonsData from './buttonsData';
import logo from '../../assets/pngs/logo.png';
import {ReactComponent as MenuIcon} from '../../assets/svg/Menu.svg';
import {ReactComponent as Moon} from '../../assets/svg/Moon.svg';
import {ReactComponent as Sun} from '../../assets/svg/Sun.svg';
import {RootState} from "../../store";
import {ColorModeState, toggleColorMode} from "../../store/slices/ColorModeSlice";
import {useDispatch, useSelector} from "react-redux";
import {ColorMode} from "../../enums/ColorMode";


const FloatingSidebar: React.FC = () => {
    const {mode}: ColorModeState = useSelector((state: RootState) => state.ColorModeSlice);
    const dispatch = useDispatch();
    return (
        <Paper
            sx={{
                position: 'fixed',
                top: 24,
                bottom: 24,
                right: 24,
                width: 430,
                borderRadius: '15px',
                overflow: 'auto',
                backgroundColor: '#EFEFEF80',
                paddingY: 2,
                paddingX: 1,
            }}
        >
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <img src={logo} alt="Logo" width={98} height={98}/>
                <Typography sx={{fontFamily: 'AssistantBold', color: 'black', fontSize: '40px'}}>KerenOrKit</Typography>
                <IconButton sx={{ml: 1}}><MenuIcon/></IconButton>
                <IconButton onClick={() => dispatch(toggleColorMode())}>
                    {mode === ColorMode.Light ? <Moon/> : <Sun/>}
                </IconButton>
            </Box>
            <Box sx={{
                '& *': {
                    color: '#373737',
                    fontSize: '24px'
                },
                '& .MuiList': {
                    '& *': {
                        color: '#373737',
                        fontSize: '24px'
                    }
                }
            }}
                 dir={'rtl'}>
                <Typography sx={{fontFamily: 'AssistantBold', m: 1}}>תפריט</Typography>
                <List>
                    {buttonsData.map((button) => (

                        <ListItemButton key={button.text} sx={{borderRadius: '15px'}}>
                            <SvgIcon
                                component={button.icon}
                                inheritViewBox
                                sx={{
                                    ml: 1,
                                    '& path': {
                                        stroke: 'currentColor',
                                        fill: 'none',
                                    },
                                }}
                            />
                            <Typography
                                sx={{fontFamily: 'Assistant'}}
                            >{button.text}</Typography>
                        </ListItemButton>
                    ))}
                </List>
            </Box>
        </Paper>
    );
};

export default FloatingSidebar;
