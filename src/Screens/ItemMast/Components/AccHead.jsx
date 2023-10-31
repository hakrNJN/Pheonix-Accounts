import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Divider, Grid } from '@mui/material'
import React from 'react'
import SelectInput from '../../../Components/SelectInput'
import TextInput from '../../../Components/TextInput'

const AccHead = () => {
    return (
        <Grid container padding={1}>
            <Grid container justifyContent={"space-evenly"}>
                <Grid items xs={12} sm={3} md={4} lg={4}>
                    Place for Product Photograph
                </Grid>
                <Grid items xs={12} sm={9} md={8} lg={8}>
                    <Grid container justifyContent={"space-evenly"}>
                        <Grid items xs={12} sm={5} md={4} lg={4}>
                            <TextInput label={"Product Code"} name={'Product Code'} fullWidth />
                        </Grid>
                        <Grid items xs={12} sm={7} md={8} lg={8}>
                            <TextInput name={"Name"} label={"Name"} fullWidth />
                        </Grid>
                        <Grid items xs={12} sm={12} md={12} lg={12}>
                            <Accordion sx={{ '&.MuiAccordion-root:before': { display: 'none' } }}>
                                <AccordionSummary expandIcon={<ExpandMore />}
                                    aria-controls="panella-content"
                                    id="panella-content"
                                    sx={{ p: 0 }}
                                >
                                    <Grid items xs={12} sm={6} md={6} lg={6}>
                                        <SelectInput
                                            variant="outlined"
                                            name={"Type"}
                                            label={"Type"}
                                            options={["Option 1", "Option 2", "Option 3"]}
                                        />
                                    </Grid>
                                    <Grid items xs={12} sm={6} md={6} lg={6}>
                                        <SelectInput
                                            variant="outlined"
                                            name={"Item Group"}
                                            label={"Item Group"}
                                            options={["Option 1", "Option 2", "Option 3"]}
                                        />
                                    </Grid>
                                </AccordionSummary>
                                <AccordionDetails sx={{ p: 0 }}>
                                    <Grid container justifyContent={"space-evenly"}>
                                        <Grid items xs={12} sm={6} md={6} lg={6}>
                                            <SelectInput
                                                variant="outlined"
                                                name={"Base Item"}
                                                label={"Base Item"}
                                                options={["Option 1", "Option 2", "Option 3"]}
                                            />
                                        </Grid>
                                        <Grid items xs={12} sm={6} md={6} lg={6}>
                                            <SelectInput
                                                variant="outlined"
                                                name={"Grey Name"}
                                                label={"Grey Name"}
                                                options={["Option 1", "Option 2", "Option 3"]}
                                            />
                                        </Grid>
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>


                        <Grid items xs={12} sm={6} md={6} lg={6}>
                            <SelectInput
                                variant="outlined"
                                name={"Catelog"}
                                label={"Base Item"}
                                options={["Option 1", "Option 2", "Option 3"]}
                            />
                        </Grid>
                        <Grid items xs={12} sm={6} md={6} lg={6}>
                            <SelectInput
                                variant="outlined"
                                name={"Sec Name"}
                                label={"Sec Name"}
                                options={["Option 1", "Option 2", "Option 3"]}
                            />
                        </Grid>

                        <Grid items xs={12} sm={6} md={3} lg={3}>
                            <SelectInput
                                variant="outlined"
                                name={"Unit"}
                                label={"Unit"}
                                options={["Option 1", "Option 2", "Option 3"]}
                            />
                        </Grid>
                        <Grid items xs={12} sm={6} md={3} lg={3}>
                            <TextInput name={"Cut"} label={"Cut"} fullWidth />
                        </Grid>
                        <Grid items xs={0} sm={6} md={6} lg={6}></Grid>
                        <Divider />
                        <Grid items xs={12} sm={6} md={6} lg={6}>
                            <SelectInput
                                variant="outlined"
                                name={"Input Type"}
                                label={"Input Type"}
                                options={["Input Goods", "Capital Goods", "Service"]}
                            />
                        </Grid>
                        <Grid items xs={12} sm={6} md={6} lg={6}>
                            <TextInput name={"HSN"} label={"HSN"} fullWidth />
                        </Grid>
                        <Grid items xs={12} sm={6} md={6} lg={6}>
                            <SelectInput
                                variant="outlined"
                                name={"Status"}
                                label={"Status"}
                                options={["True", "False"]}
                            />
                        </Grid>
                        <Grid items xs={12} sm={6} md={6} lg={6}>
                            <TextInput name={"Remark"} label={"Remark"} type={'textarea'} fullWidth multiline={'true'}/>
                        </Grid>
                        <Grid items xs={0} sm={6} md={6} lg={6}></Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>)
}

export default AccHead;