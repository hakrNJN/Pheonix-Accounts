import {
    Card,
    Paper,
    useMediaQuery
} from "@mui/material";
import { Box, Container, styled } from "@mui/system";
import React, { useState } from "react";
import TitleBar from "../../Components/Global/TitleBar";
import AccHead from "./Components/AccHead";
import FormButtonGroup from "../../Components/ButtomButton";


const CityMaster = () => {
    const isMobile = useMediaQuery("(max-width:600px)");
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;



    return (
        <Container maxWidth="md">
            <Card variant="outlined" sx={{ m: 2 }}>
                <TitleBar />
                <Box sx={{ flexGrow: 1 }}>
                    <AccHead />
                </Box>
                <FormButtonGroup/>
            </Card>
        </Container>
    );
};

export default CityMaster
