import React, {useState} from 'react';
import {Box, IconButton, List, ListItemButton, SvgIcon, Typography} from '@mui/material';
import buttonsData from './buttonsData';
import logo from '../../assets/pngs/logo.png';
import {ReactComponent as MenuIcon} from '../../assets/svg/Menu.svg';
import {ReactComponent as Moon} from '../../assets/svg/Moon.svg';
import {ReactComponent as Sun} from '../../assets/svg/Sun.svg';
import {RootState} from "../../store";
import {toggleColorMode} from "../../store/slices/ColorModeSlice"; // make it useTheme function?
import {useDispatch, useSelector} from "react-redux";
import {ColorMode} from "../../enums/ColorMode";
import useTheme, {themeType} from "../../hooks/useTheme";
import {SelectedPageState, setSelectedPage} from "../../store/slices/SelectedPageSlice";


const Sidebar: React.FC = () => {
    const {page} : SelectedPageState = useSelector((state: RootState) => state.SelectedPageSlice);
    const theme : themeType = useTheme()
    const dispatch = useDispatch();
    const [isMinimized, setIsMinimized] = useState(false);
    const isMinimizedString = isMinimized? 'none' : 'inherit';
    return (
        <Box
            sx={{
                height: '90vh',
                width:isMinimized? '3rem' : '25%',
                minWidth: isMinimized ? '3rem' : '200px',
                borderRadius: '15px',
                overflow: 'auto',
                backgroundColor: theme.containerColor,
                paddingX: 1,
            }}
        >
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}
                 flexWrap="wrap"
                 gap={1}

                 sx={{textAlign: 'center','& *' : {color: theme.textColor}}}

            dir={'ltr'}>
                <img src={logo} alt="Logo" style={{width:isMinimized ? 60 :  98, height: isMinimized ? 60 :  98}}/>
                <Typography sx={{fontFamily: 'AssistantBold', fontSize: '40px', display: isMinimizedString}}>KerenOrKit</Typography>
                <IconButton
                    size="small"
                    sx={{
                        padding: 0.5,
                        width: 40,
                        height: 40,
                    }}
                    onClick={() => setIsMinimized(!isMinimized)}
                >
                    <MenuIcon style={{ fontSize: 24 }} />
                </IconButton>

                <IconButton
                    size="small"
                    sx={{
                        padding: 0.5,
                        width: 40,
                        height: 40,
                    }}
                    onClick={() => dispatch(toggleColorMode())}
                >
                    {theme.themeName === ColorMode.Light ? (
                        <Moon style={{ fontSize: 24 }} />
                    ) : (
                        <Sun style={{ fontSize: 24 }} />
                    )}
                </IconButton>
            </Box>
            <Box

                 dir={'rtl'}>
                <Typography sx={{fontFamily: 'AssistantBold', m: 1, fontSize: '24px', color: theme.secondaryTextColor, display : isMinimizedString}}>תפריט</Typography>
                <List>
                    {buttonsData.map((button) => (

                        <ListItemButton key={button.text}
                                        sx={{
                                            mt:1,
                                            p:1,
                                            display: 'flex',
                                            justifyContent: isMinimized ? 'center' : 'flex-start',
                                            alignItems: 'center',
                                            borderRadius: '15px',
                                            background : button.page === page ? theme.menuSelectedGradient : 'none',
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
                                sx={{fontFamily: 'Assistant', fontSize: '24px',color: button.page === page ? 'white' : theme.secondaryTextColor,display : isMinimizedString}}
                            >{button.text}</Typography>
                        </ListItemButton>
                    ))}
                </List>
            </Box>
        </Box>
    );
};

export default Sidebar;
