import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {
    Stream,
    ArrowCircleRight,
    ArrowCircleLeft,
    WhatsApp,
    Menu as MoreIcon,
    Search as SearchIcon
} from "@mui/icons-material";
import { Print } from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto"
    }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch"
        }
    }
}));

export default function TitleBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const hadleSendWhatsapp = (event) => {
        console.log("Clicked Whatsapp");
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

  

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right"
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right"
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
            flexDirection="row"
            justifyContent="flex-end"
        >
            <MenuItem>
                <IconButton size="large" color="inherit">
                    <ArrowCircleLeft />
                </IconButton>
                <p>Previous</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" color="inherit">
                    <ArrowCircleRight />
                </IconButton>
                <p>Next</p>
            </MenuItem>
            <MenuItem onClick={hadleSendWhatsapp}>
                <IconButton size="large" color="inherit">
                    <WhatsApp />
                </IconButton>
                <p>Whatsapp</p>
            </MenuItem>
            <MenuItem onClick={hadleSendWhatsapp}>
                <IconButton size="large" color="inherit">
                    <Print />
                </IconButton>
                <p>Whatsapp</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Stream />
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ "aria-label": "search" }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                        <IconButton
                            size="large"
                            color="inherit"
                        >
                            <ArrowCircleLeft />
                        </IconButton>
                        <IconButton
                            size="large"
                            color="inherit"
                        >
                            <ArrowCircleRight />
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            onClick={hadleSendWhatsapp}
                            color="inherit"
                        >
                            <WhatsApp />
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            // onClick={hadleSendWhatsapp}
                            color="inherit"
                        >
                            <Print />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </Box>
    );
}
