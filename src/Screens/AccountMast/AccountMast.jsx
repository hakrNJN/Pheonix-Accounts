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
import Address from "./Components/Address";
import Bank from "./Components/Bank";
import ContactDetails from "./Components/ContactDetails.jsx";
import Taxation from "./Components/Taxation";
import FormButtonGroup from "../../Components/ButtomButton.jsx";


const AccountMast = () => {
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
        <Container maxWidth="md" sx={{ height: '100vh', overflow: 'auto' }}>
            <Card variant="outlined" sx={{ m: 2 }}>
                <TitleBar />
                <Box sx={{ flexGrow: 1 }}>
                    <AccHead />
                </Box>
                <FullWidthTabs labels={['Address & Transportation', 'Bank Details', 'Taxations and Others']}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Address />
                        <Divider />
                        <ContactDetails />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Bank />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Taxation />
                    </Box>
                </FullWidthTabs>
                <FormButtonGroup/>
            </Card>
        </Container>
    );
};

export default AccountMast;