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
import useTheme, {themeType} from "../../hooks/useTheme";
import {SelectedPageState, setSelectedPage} from "../../store/slices/SelectedPageSlice";


const Sidebar: React.FC = () => {
    const {mode}: ColorModeState = useSelector((state: RootState) => state.ColorModeSlice);
    const {page} : SelectedPageState = useSelector((state: RootState) => state.SelectedPageSlice);
    const theme : themeType = useTheme()
    const dispatch = useDispatch();
    return (
        <Paper
            sx={{
                height: '90vh',
                width: 430,
                borderRadius: '15px',
                overflow: 'auto',
                backgroundColor: theme.containerColor,
                paddingX: 1,
            }}
        >
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}
                 sx={{'& *' : {color: theme.textColor}}}

            dir={'ltr'}>
                <img src={logo} alt="Logo" width={98} height={98}/>
                <Typography sx={{fontFamily: 'AssistantBold', fontSize: '40px'}}>KerenOrKit</Typography>
                <IconButton sx={{ml: 1}}><MenuIcon/></IconButton>
                <IconButton onClick={() => dispatch(toggleColorMode())}>
                    {mode === ColorMode.Light ? <Moon/> : <Sun/>}
                </IconButton>
            </Box>
            <Box
                 dir={'rtl'}>
                <Typography sx={{fontFamily: 'AssistantBold', m: 1, fontSize: '24px', color: theme.secondaryTextColor}}>תפריט</Typography>
                <List>
                    {buttonsData.map((button) => (

                        <ListItemButton key={button.text}
                                        sx={{
                                            borderRadius: '15px',
                                            background : button.page === page ? theme.menuSelectedGradient : 'none',
                                            '& *' : {
                                            },
                                        }}
                                        onClick={() => dispatch(setSelectedPage(button.page))}>
                            <SvgIcon
                                component={button.icon}
                                inheritViewBox
                                sx={{
                                    ml: 1,
                                    fontSize: '24px',
                                    '& path': {
                                        stroke: button.page === page ? '#ffffff' : theme.secondaryTextColor,
                                        fill: 'none',
                                    },
                                }}
                            />
                            <Typography
                                sx={{fontFamily: 'Assistant', fontSize: '24px',color: button.page === page ? 'white' : theme.secondaryTextColor,}}
                            >{button.text}</Typography>
                        </ListItemButton>
                    ))}
                </List>
            </Box>
        </Paper>
    );
};

export default Sidebar;
