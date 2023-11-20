import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, FormControl, Grid, Typography } from '@mui/material'
import React from 'react'
import SelectInput from '../../../Components/SelectInput'
import TextInput from '../../../Components/TextInput'

const Address = () => {
    return (
        <Grid container padding={1}>
            <Grid items xs={12} sm={12} md={12} lg={12}>
                <TextInput label={"Address 1"} name={'Address 1'} fullWidth />
                <Accordion sx={{ '&.MuiAccordion-root:before': { display: 'none' } ,boxShadow: 'none' }}>
                    <AccordionSummary expandIcon={<ExpandMore />}
                        aria-controls="panella-content"
                        id="panella-content"
                        sx={{ p: 0 }}
                    >
                        <FormControl fullWidth sx={{ m: 0, p: 0 }}>
                            <TextInput label={"Address 2"} name={'Address 2'} fullWidth />
                        </FormControl>
                    </AccordionSummary>
                    <AccordionDetails sx={{ p: 0 }}>
                        <FormControl fullWidth>
                            <div style={{ display: 'flex' }}>
                                <Grid container justifyContent={"space-evenly"}>
                                    <Grid item xs={12} sm={12} md={6} lg={4}>
                                        <TextInput name={"Market"} label={"Market"} fullWidth style={{ flexGrow: 1, width: '100%' }} />
                                    </Grid>
                                    <Grid items xs={12} sm={6} md={6} lg={4}>
                                        <TextInput name={"Land Mark"} label={"land Mark"} fullWidth style={{ flexGrow: 1, width: '100%' }} />
                                    </Grid>
                                    <Grid items xs={12} sm={6} md={6} lg={4}>
                                        <TextInput name={"District"} label={"District"} fullWidth style={{ flexGrow: 1, width: '100%' }} />
                                    </Grid>
                                    <Grid items xs={0} sm={0} md={6} lg={0}>
                                        
                                    </Grid>
                                </Grid>
                            </div>
                        </FormControl>
                    </AccordionDetails>
                </Accordion>
                <Grid container justifyContent={"space-evenly"}>
                    <Grid items xs={12} sm={6} md={6} lg={4}>
                        <TextInput label={"City"} name={'City'} width="200" />
                    </Grid>
                    <Grid items xs={12} sm={6} md={6} lg={4}>
                        <TextInput label={"State"} name={'State'} width="200" />
                    </Grid>
                    <Grid items xs={12} sm={6} md={6} lg={2}>
                        <TextInput label={"Pin"} name={'Pin'} type={'number'} width="200" />
                    </Grid>
                    <Grid items xs={6} sm={6} md={6} lg={2}>
                        <Grid items xs={12} sm={12} md={12} lg={12}>
                        <Typography variant="button" display="block" gutterBottom>
                            Distance : 452Kms
                        </Typography>
                        </Grid>
 
                    </Grid>
                </Grid>
            </Grid>
            <Grid items xs={12} sm={12} md={8} lg={8}>
                <SelectInput
                    variant="outlined"
                    name={"Transport"}
                    label={"Reg Type"}
                    options={["Transport", "Un-Registered", "Composite", "Unknown"]}
                />
            </Grid>
            <Grid items xs={12} sm={12} md={4} lg={4}>
                <TextInput label={"Delivery Station"} name={'Delivery Station'} width="200" />
            </Grid>
        </Grid>
    )
}

export default Address
