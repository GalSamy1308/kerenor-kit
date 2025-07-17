import { Box } from "@mui/material";
import React from "react";
import useTheme, { themeType } from "../../hooks/useTheme";
import { ColorMode } from "../../enums/ColorMode";

export type InfoBoxProps = {
    height?: string;
    width?: string;
    margin?: string;
    backgroundColor: string;
    children: React.ReactNode;
};

const InfoBox: React.FC<InfoBoxProps> = (props: InfoBoxProps) => {
    const theme: themeType = useTheme();
    const shadowColor =
        theme.themeName === ColorMode.Light
            ? "rgba(0,0,0,0.3)"
            : "rgba(255,255,255,0.2)";

    const hoverShadowColor =
        theme.themeName === ColorMode.Light
            ? "rgba(0,0,0,0.5)"
            : "rgba(255,255,255,0.35)";

    return (
        <Box
            height={props.height}
            width={props.width}
            sx={{
                minWidth: "200px",
                overflow: 'auto',
                background: props.backgroundColor,
                borderRadius: "15px",
                boxShadow: `0 0 10px ${shadowColor}`,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: `0 0 20px ${hoverShadowColor}`,
                },
            }}
        >
            {props.children}
        </Box>
    );
};

export default InfoBox;