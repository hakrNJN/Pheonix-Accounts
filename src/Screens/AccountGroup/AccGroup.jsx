import {
    Card,
    Divider,
    Paper,
    useMediaQuery
} from "@mui/material";
import { Box, Container, styled } from "@mui/system";
import React, { useState } from "react";
import TitleBar from "../../Components/Global/TitleBar";
import FullWidthTabs from "../../Components/Tabs";
import AccHead from "./Components/AccHead";
import ContactDetails from "./Components/ContactDetails.jsx";
import Taxation from "./Components/Taxation";


const AccGroup = () => {
    const isMobile = useMediaQuery("(max-width:600px)");
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
    }));

    return (
        <Container maxWidth="md">
            <Card variant="outlined" sx={{ m: 2 }}>
                <TitleBar />
                <Box sx={{ flexGrow: 1 }}>
                    <AccHead />
                </Box>
                <FullWidthTabs labels={['Contact & Dhara', 'Account List']}>
                    <Box sx={{ flexGrow: 1 }}>
                        <ContactDetails />
                        <Divider />
                        <Taxation />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        THIS IS LIST SECTION
                    </Box>

                </FullWidthTabs>
            </Card>
        </Container>
    );
};

export default AccGroup
