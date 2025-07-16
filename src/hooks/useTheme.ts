import {useSelector} from "react-redux";
import {RootState} from "../store";
import {ColorModeState} from "../store/slices/ColorModeSlice";
import {ColorMode} from "../enums/ColorMode";
export type themeType ={
    backgroundColor: string;
    textColor: string;
    secondaryTextColor: string;
    containerColor: string;
    secondaryContainerColor: string;
    actionButtonColor: string;
    accentColor: string;
    onCallGradient: string;
    menuSelectedGradient: string;
    malfunctionsDocumentedGradient: string;
    receivedLikesGradient: string;
    videosGradient: string;
    criticalColor: string;
    highColor: string;
    mediumColor: string;
    lowColor: string;
}
const useTheme = () : themeType => {
    const {mode} : ColorModeState = useSelector((state: RootState) => state.ColorModeSlice);
    const commonColors = {
        actionButtonColor: '#E688EB',
        accentColor: '#7FC2F8',
        onCallGradient: 'radial-gradient(circle, #07EF59 0%, #57F895 100%)',
        menuSelectedGradient: 'linear-gradient(89.287deg, #7FC2F8 0%, #62B5F9 32%, #32A3FF 67%, #008CFF 100%)',
        malfunctionsDocumentedGradient: 'linear-gradient(62.538deg, #008BFF 0%, #1B66A4 50%, #1D4465 100%)',
        receivedLikesGradient: 'linear-gradient(62.537deg, #FF0000 0%, #BB1717 48%, #982222 73%, #722F2F 100%)',
        videosGradient: 'linear-gradient(75.189deg, #5E00FF 0%, #500AC8 34%, #431395 65%, #341E5C 100%)',
        criticalColor: '#FF0000',
        highColor: '#F5A623',
        mediumColor: '#F8E71C',
        lowColor: '#7ED321'
    }
    switch (mode) {
        case ColorMode.Light:
            return {
                backgroundColor: '#FFFFFF',
                textColor: '#000000',
                secondaryTextColor: '#373737',
                containerColor: '#F8F8F8',
                secondaryContainerColor: '#D9D9D9',
                ...commonColors
            };
        case ColorMode.Dark:
            return {
                backgroundColor: '#000000',
                textColor: '#FFFFFF',
                secondaryTextColor: '#CECECE',
                containerColor: '#1C1C1C',
                secondaryContainerColor: '#6E6E6E',
                ...commonColors
            };
        default:
            return {
                backgroundColor: '#FFFFFF',
                textColor: '#000000',
                secondaryTextColor: '#373737',
                containerColor: '#EFEFEF80',
                secondaryContainerColor: '#D9D9D9',
                ...commonColors
            };
    }
}
export default useTheme;