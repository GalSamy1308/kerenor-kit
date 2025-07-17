import React from "react";
import {themeType} from "../../hooks/useTheme";
import {Box, Typography} from "@mui/material";
import {getHebrewDate} from "../../Utils/utils";
import { Circle } from "@mui/icons-material";
import NotificationButton from "./NotificationButton";

type HomeHeaderProps = {
    theme: themeType;
}
const HomeHeader : React.FC<HomeHeaderProps> = (props: HomeHeaderProps) => {
    const sharedWelcome = {
        fontFamily: 'AssistantBold',
        fontSize: '40px',
    };
    const sharedInfoStyle = {
        fontFamily: 'AssistantSemiBold',
        fontSize: '32px',
    }
    const textGradient = {
        background: props.theme.onCallGradient,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    }
    return (
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: 170, backgroundColor: props.theme.containerColor, borderRadius: '15px', p:2}}>
        <Box sx={{textAlign: 'flex-end'}}>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
            <Typography sx={{...sharedWelcome, color: props.theme.textColor,}}>ברוך הבא,</Typography>
            <Typography sx={{...sharedWelcome, color: props.theme.accentColor}}>גל סמי</Typography>
            </Box>
            <Typography sx={{...sharedInfoStyle, color: props.theme.textColor}}>{getHebrewDate()}</Typography>
            <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Circle sx={{fontSize: '20px', color: '#57F895' }} />
                <Typography sx={{...sharedInfoStyle,...textGradient}}>בכוננות</Typography>
            </Box>

        </Box>
            <NotificationButton/>

        </Box>
    );
}
export default HomeHeader;