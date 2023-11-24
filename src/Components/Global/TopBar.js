import {
    Avatar,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Typography,
    Tooltip,
    useTheme,
  } from "@mui/material";
  import { useContext, useState } from "react";
  import { ColorModeContext, tokens } from "../../theme";
  import {
    WbSunnyOutlined,
    DarkModeOutlined,
    NotificationsOutlined,
    SettingsOutlined,
  } from "@mui/icons-material";
  import Notification from "./Notifications";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../Store/Slice/AuthSlice";
  
const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // const dispatch = useDispatch();
    const colorMode = useContext(ColorModeContext);
    // const [open, setOpen] = useState(false);
    const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElNotification, setAnchorElNotification] = useState(null);
  const dispatch = useDispatch(); // need to remove later

    const handleSignOut = () => {
      // signOu( dispatch);
      dispatch(logout(null));
    }
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  
    const handleOpenNotificationMenu = (event) => {
      setAnchorElNotification(event.currentTarget);
    };
  
    const handleCloseNotificationMenu = () => {
      setAnchorElNotification(null);
    };
  
    return (
      <Box display="flex" justifyContent="space-between" p={2}>
        {/* SEARCH BAR */}
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
        >
        </Box>
  
        {/* ICONS */}
        <Box display="flex">
          <Tooltip
            title={
              theme.palette.mode === "dark" ? "Turn on Light" : "Turn off Light"
            }
            arrow
          >
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlined />
              ) : (
                <WbSunnyOutlined />
              )}
            </IconButton>
          </Tooltip>
          <Tooltip title="Open Notifications" arrow>
            <IconButton onClick={handleOpenNotificationMenu}>
              <NotificationsOutlined />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElNotification}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElNotification)}
            onClose={handleCloseNotificationMenu}
          >
            {/* <MenuItem onClick={handleCloseUserMenu}> <Typography textAlign="center">Settings</Typography></MenuItem> */}
            <MenuItem>
              {" "}
              <Notification />
            </MenuItem>
            <MenuItem>
              {" "}
              <Notification />
            </MenuItem>
            <MenuItem>
              {" "}
              <Notification />
            </MenuItem>
            <MenuItem>
              {" "}
              <Notification />
            </MenuItem>
            <MenuItem>
              {" "}
              <Notification />
            </MenuItem>
            <MenuItem>
              {" "}
              <Notification />
            </MenuItem>
          </Menu>
          <Tooltip title="Open settings" arrow>
            <IconButton>
              <SettingsOutlined />
            </IconButton>
          </Tooltip>
          <Tooltip title="Open Personal Profile" arrow>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt="Debojit"
                src={`https://s6.imgcdn.dev/Raoby.png`}
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {/* <MenuItem onClick={handleCloseUserMenu}> <Typography textAlign="center">Settings</Typography></MenuItem> */}
            <MenuItem
              component={Link}
              to="/user/profile"
              
            >
              <Typography textAlign="center">Profile</Typography>
            </MenuItem>
            <MenuItem onClick={handleSignOut} >
              {" "}
              <Typography textAlign="center">Logout</Typography>
            </MenuItem>
            <MenuItem>
              {" "}
              <Typography textAlign="center">Profile</Typography>
                    </MenuItem>
                    {/* <Link to="/dashboard">Dashboard</Link> */}
          </Menu>
        </Box>
      </Box>
    );
  };
  
  export default Topbar;