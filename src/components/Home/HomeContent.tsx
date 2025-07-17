import React from "react";
import {themeType} from "../../hooks/useTheme";
import {Box, SvgIcon, Typography} from "@mui/material";
import InfoBox from "../InfoBoxes/InfoBox";
import {ReactComponent as Profile} from "../../assets/svg/profile.svg";
import {ReactComponent as Goto} from "../../assets/svg/Arrow up-circle.svg";


type HomeContentProps = {
    theme: themeType;
}
const HomeContent: React.FC<HomeContentProps> = (props: HomeContentProps) => {

    const contentHeaders = {
        color: props.theme.textColor,
        fontFamily: 'AssistantBold',
        fontSize: '32px',
    };
    const infoBoxHeaders = {
        fontFamily: 'AssistantSemiBold',
        fontSize: '40px'
    }
    const infoBoxesStats = {
        color: 'white',
        textShadow: '0 0 6px rgba(255,255,255,0.5), 0 0 10px rgba(255,255,255,0.5)',
        m: 3,
        ...infoBoxHeaders
    }
    return (
        <Box sx={{
            flex: 1,
            borderRadius: '15px',
            height: '840px',
            mt: 4,
            backgroundColor: props.theme.containerColor,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            p: 2,
            overflowY: 'auto',
        }}>
            <Box sx={{height: '50%',display: 'flex', flexDirection: 'column', p:2}}>
                <Typography sx={{...contentHeaders}}>
                    נתונים
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flex: 1,
                    flexWrap: 'wrap',
                }}>
                    <InfoBox width={"30%"}
                             backgroundColor={props.theme.malfunctionsDocumentedGradient}>
                        <Typography sx={infoBoxesStats}>תקלות שתיעדת <br/> 42</Typography>
                    </InfoBox>
                    <InfoBox width={"30%"} backgroundColor={props.theme.receivedLikesGradient}>
                        <Typography sx={infoBoxesStats}>לייקים שהתקבלו <br/> 112</Typography>

                    </InfoBox>
                    <InfoBox width={"30%"} backgroundColor={props.theme.videosGradient}>
                        <Typography sx={infoBoxesStats}>סרטונים שנצפו <br/> 1</Typography>
                    </InfoBox>
                </Box>
            </Box>
            <Box sx={{
                p:2,
                height: '50%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flex: 1,
                minHeight: 0,
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '50%',
                    height: '100%',
                    flex: 1,
                    minHeight: 0,
                }}>
                    <Typography sx={contentHeaders}>
                        המשך לצפות
                    </Typography>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', width: '50%', flex: 1}}>
                    <Typography sx={contentHeaders}>
                        תיעוד אחרון במערכת
                    </Typography>
                    <InfoBox width={"100%"} backgroundColor={props.theme.secondaryContainerColor}>
                        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Box sx={{p: 2, pb: 0}}>
                                <Typography sx={{...infoBoxHeaders, color: props.theme.textColor}}>
                                    מאס פרוקסי לא עולה
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'AssistantRegular',
                                        fontSize: '32px',
                                        color: props.theme.textColor
                                    }}>
                                    בח"א 30
                                </Typography>
                                <Typography sx={{
                                    fontFamily: 'AssistantRegular',
                                    fontSize: '24px',
                                    color: props.theme.secondaryTextColor
                                }}>
                                    תיאור התקלה, רכיבים וכו...
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center'
                                }}>
                                    <SvgIcon
                                        component={Profile}
                                        inheritViewBox
                                        sx={{
                                            fontSize: '16px !important', ' & path': {
                                                stroke: 'none',
                                                fill: props.theme.secondaryTextColor,
                                            }
                                        }}/>
                                    <Typography sx={{
                                        fontFamily: 'AssistantRegular',
                                        fontSize: '16px',
                                        color: props.theme.textColor,
                                        mr: 1
                                    }}>חן אשכנזי</Typography>
                                </Box>
                            </Box>
                            <SvgIcon
                                component={Goto}
                                inheritViewBox
                                sx={{
                                    m: 1,
                                    fontSize: '32px !important', ' & path': {
                                        stroke: props.theme.secondaryTextColor,
                                        fill: 'none',
                                    }
                                }}/>
                        </Box>
                    </InfoBox>
                </Box>
            </Box>
        </Box>
    )
}
export default HomeContent;