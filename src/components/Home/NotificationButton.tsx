import {Badge, IconButton, Box} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import useTheme, {themeType} from "../../hooks/useTheme";

const NotificationButton = () => {
    const theme: themeType = useTheme()
    const notificationCount = 1
    return (
        <Box
            sx={{
                position: 'relative',
                width: 50,
                height: 50,
                borderRadius: '50%',
                backgroundColor: theme.secondaryContainerColor, // light circle behind the bell
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* Alert dot */}


            {/* Bell icon */}
            <IconButton>
                <Badge
                    badgeContent={notificationCount}
                    color="error" // default red; can be customized
                    overlap="circular"
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    sx={{
                        '& .MuiBadge-badge': {
                            fontSize: '0.75rem',
                            height: 22,
                            minWidth: 22,
                            borderRadius: '50%',
                            fontWeight: 'bold',
                        },
                    }}
                >

                    <NotificationsIcon sx={{fontSize: 36, color: theme.textColor}}/>
                </Badge>
            </IconButton>
        </Box>
    );
};

export default NotificationButton;