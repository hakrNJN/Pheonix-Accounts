import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Card,
  FormControl,
  Grid,
  Paper,
  useMediaQuery
} from "@mui/material";
import { Box, Container, styled } from "@mui/system";
import React, { useState } from "react";
import TitleBar from "../../Components/Global/TitleBar";
import NumberInput from "../../Components/NumberInput";
import SelectInput from "../../Components/SelectInput";
import TextInput from "../../Components/TextInput";
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
          <Grid container padding={1}>
            <Grid items xs={12} sm={12} md={8} lg={10}>
              <Accordion sx={{ '&.MuiAccordion-root:before': { display: 'none' } }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                  aria-controls="panella-content"
                  id="panella-content"
                  sx={{ p: 0 }}
                >
                  <FormControl fullWidth sx={{ m: 0, p: 0 }}>
                    <TextInput name={"Name"} label={"Name"} fullWidth />
                  </FormControl>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 0 }}>
                  <FormControl fullWidth>
                    <div style={{ display: 'flex' }}>
                      <TextInput name={"Display Name"} label={"Display Name"} fullWidth style={{ flexGrow: 1, width: '100%' }} />
                      <div style={{ visibility: 'hidden' }}><ExpandMoreIcon /></div>
                    </div>
                  </FormControl>
                </AccordionDetails>
              </Accordion>
              <Grid container justifyContent={"space-evenly"}>
                <Grid item xs={12} sm={12} md={12} lg={4}>
                  <TextInput name={"GSTIN"} label={"GSTIN"} width="200" />
                </Grid>
                <Grid items xs={12} sm={12} md={12} lg={4}>
                  <SelectInput
                    variant="outlined"
                    name={"Category"}
                    label={"Category"}
                    options={["Option 1", "Option 2", "Option 3"]}
                  />
                </Grid>
                <Grid items xs={12} sm={12} md={12} lg={4}>
                  <SelectInput
                    variant="outlined"
                    name={"Schedule"}
                    label={"Schedule"}
                    options={["Sundry Creditor", "Sundry Debtor", "Loan"]}
                  />
                </Grid>
              </Grid>

              <TextInput label={"Address 1"} name={'Address 1'} fullWidth />
              <TextInput label={"Address 2"} name={'Address 2'} fullWidth />
              <Grid container justifyContent={"space-evenly"}>
                <Grid items xs={12} sm={12} md={12} lg={4}>
                  <TextInput label={"City"} name={'City'} width="200" />
                </Grid>
                <Grid items xs={12} sm={12} md={12} lg={4}>
                  <TextInput label={"State"} name={'State'} width="200" />
                </Grid>
                <Grid items xs={12} sm={12} md={12} lg={4}>
                  <TextInput label={"Pin"} name={'Pin'} type={'number'} width="200" />

                </Grid>
              </Grid>
            </Grid>
            <Grid items xs={12} sm={12} md={4} lg={2} paddingX={1}>
              <Paper elevation={5}>
                <Avatar sizes="512" />
              </Paper>
            </Grid>
          </Grid>
        </Box>
        
        <NumberInput
          aria-label="Demo number input"
          placeholder="Type a number…"
        />
      </Card>
    </Container>
  );
};

export default Lab;