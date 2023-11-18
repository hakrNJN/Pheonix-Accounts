import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Avatar, FormControl, Grid, Paper } from '@mui/material'
import React from 'react'
import SelectInput from '../../../Components/SelectInput'
import TextInput from '../../../Components/TextInput'
import ImageBox from '../../../Components/Global/ImageCard'

const AccHead = () => {
    return (
        <Grid container padding={1}>
            <Grid items xs={12} sm={12} md={8} lg={10}>
                <Accordion sx={{ '&.MuiAccordion-root:before': { display: 'none' } }}>
                    <AccordionSummary expandIcon={<ExpandMore />}
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
                            <div>
                                <TextInput name={"Display Name"} label={"Display Name"} fullWidth />
                                <div style={{ visibility: 'hidden' }}><ExpandMore /></div>
                            </div>
                        </FormControl>
                    </AccordionDetails>
                </Accordion>
                <Grid container justifyContent={"space-evenly"}>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <TextInput name={"GSTIN"} label={"GSTIN"} width="200" />
                    </Grid>
                    <Grid items xs={12} sm={6} md={4} lg={4}>
                        <SelectInput
                            variant="outlined"
                            name={"Group"}
                            label={"Group"}
                            options={["Option 1", "Option 2", "Option 3"]}
                        />
                    </Grid>
                    <Grid items xs={12} sm={6} md={4} lg={4}>
                        <SelectInput
                            variant="outlined"
                            name={"Category"}
                            label={"Category"}
                            options={["General", "Customer", "Supplier"]}
                        />
                    </Grid>
                    <Grid items xs={12} sm={6} md={4} lg={4}>
                    </Grid>
                </Grid>
                <Grid container justifyContent={"space-evenly"}>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <SelectInput
                            variant="outlined"
                            name={"Schedule"}
                            label={"Schedule"}
                            options={["Sundry Creditor", "Sundry Debtor", "Loan"]}
                        />
                    </Grid>
                    <Grid items xs={12} sm={6} md={4} lg={4}>
                        <SelectInput
                            variant="outlined"
                            name={"Reg Type"}
                            label={"Reg Type"}
                            options={["Registered", "Un-Registered", "Composite", "Unknown"]}
                        />
                    </Grid>
                    <Grid items xs={12} sm={12} md={4} lg={4}>
                        <SelectInput
                            variant="outlined"
                            name={"Agent"}
                            label={"Agent"}
                            options={["Agent1", "Agent 2", "Agent 3"]}
                        />
                    </Grid>
                    <Grid items xs={0} sm={6} md={0} lg={0}>
                    </Grid>
                </Grid>
            </Grid>
            <Grid items xs={12} sm={12} md={4} lg={2} paddingX={1}>
            <ImageBox height={150}
            image="https://tier4marketing.com/wp-content/uploads/2015/10/Client-Logo-Placeholder.png"
                alt="365452"
            />
            
            </Grid>
        </Grid>)
}

export default AccHead;