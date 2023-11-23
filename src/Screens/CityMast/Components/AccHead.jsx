import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Divider, Grid } from '@mui/material'
import React from 'react'
import ImageBox from '../../../Components/Global/ImageCard'
import SelectInput from '../../../Components/SelectInput'
import TextInput from '../../../Components/TextInput'

const AccHead = () => {
    return (
        <Grid container padding={1}>
            <Grid container justifyContent={"space-evenly"}>
                <Grid items xs={12} sm={12} md={12} lg={12}>
                    <TextInput label={"City Name"} name={'City Name'} fullWidth />
                </Grid>

                <Grid items xs={12} sm={6} md={6} lg={6}>
                    <SelectInput
                        variant="outlined"
                        name={"State"}
                        label={"State"}
                        options={ [
                            { name: "Andhra Pradesh", value: "Andhra Pradesh" },
                            { name: "Arunachal Pradesh", value: "Arunachal Pradesh" },
                            { name: "Assam", value: "Assam" },
                            { name: "Bihar", value: "Bihar" },
                            { name: "Chhattisgarh", value: "Chhattisgarh" },
                            { name: "Goa", value: "Goa" },
                            { name: "Gujarat", value: "Gujarat" },
                            { name: "Haryana", value: "Haryana" },
                            { name: "Himachal Pradesh", value: "Himachal Pradesh" },
                            { name: "Jammu and Kashmir", value: "Jammu and Kashmir" },
                            { name: "Jharkhand", value: "Jharkhand" },
                            { name: "Karnataka", value: "Karnataka" },
                            { name: "Kerala", value: "Kerala" },
                            { name: "Madhya Pradesh", value: "Madhya Pradesh" },
                            { name: "Maharashtra", value: "Maharashtra" },
                            { name: "Manipur", value: "Manipur" },
                            { name: "Meghalaya", value: "Meghalaya" },
                            { name: "Mizoram", value: "Mizoram" },
                            { name: "Nagaland", value: "Nagaland" },
                            { name: "Odisha", value: "Odisha" },
                            { name: "Punjab", value: "Punjab" },
                            { name: "Rajasthan", value: "Rajasthan" },
                            { name: "Sikkim", value: "Sikkim" },
                            { name: "Tamil Nadu", value: "Tamil Nadu" },
                            { name: "Telangana", value: "Telangana" },
                            { name: "Tripura", value: "Tripura" },
                            { name: "Uttarakhand", value: "Uttarakhand" },
                            { name: "Uttar Pradesh", value: "Uttar Pradesh" },
                            { name: "West Bengal", value: "West Bengal" },
                            { name: "Andaman and Nicobar Islands", value: "Andaman and Nicobar Islands" },
                            { name: "Chandigarh", value: "Chandigarh" },
                            { name: "Dadra and Nagar Haveli", value: "Dadra and Nagar Haveli" },
                            { name: "Daman and Diu", value: "Daman and Diu" },
                            { name: "Delhi", value: "Delhi" },
                            { name: "Lakshadweep", value: "Lakshadweep" },
                            { name: "Puducherry", value: "Puducherry" }
                          ]}
                    />
                </Grid>
                <Grid items xs={12} sm={6} md={6} lg={6}>
                <Grid container justifyContent={"space-evenly"}>
                    <Grid items xs={12} sm={3} md={6} lg={6}><TextInput label={"PIN Code"} type={'number'} name={'PIN Code'} fullWidth /></Grid>
                    <Grid items xs={12} sm={6} md={6} lg={6}><TextInput label={"Distance"} type={'number'} name={'Distance'} fullWidth /></Grid>
                    </Grid>
                </Grid>


            </Grid>
        </Grid>)
}

export default AccHead;