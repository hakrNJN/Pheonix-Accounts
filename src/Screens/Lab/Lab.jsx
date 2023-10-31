import {
  Card,
  Paper,
  useMediaQuery
} from "@mui/material";
import { Box, Container, styled } from "@mui/system";
import React, { useState } from "react";
import TitleBar from "../../Components/Global/TitleBar";
import AccHead from "./Components/AccHead";


const Lab = () => {
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
          <AccHead/>
        </Box>
      </Card>
    </Container>
  );
};

export default Lab;