import { Grid } from '@mui/material'
import React from 'react'
import SelectInput from '../../../Components/SelectInput'
import TextInput from '../../../Components/TextInput'

const AccHead = () => {
    return (
        <Grid container padding={1}>
            <Grid items xs={12} sm={12} md={12} lg={12}>
                <Grid container justifyContent={"space-evenly"}>
                    <Grid items xs={12} sm={7} md={8} lg={8}>
                        <TextInput name={"Name"} label={"Name"} fullWidth />
                    </Grid>
                    <Grid items xs={12} sm={5} md={4} lg={4}>
                        <SelectInput
                            variant="outlined"
                            name={"Ac. Type"}
                            label={"Ac. Type"}
                            options={["Option 1", "Option 2", "Option 3"]}
                        />
                    </Grid>
                    <Grid items xs={12} sm={12} md={12} lg={12}>
                        <TextInput label={"Address 1"} name={'Address 1'} fullWidth />
                        <TextInput label={"Address 1"} name={'Address 2'} fullWidth />
                    </Grid>
                    <Grid items xs={12} sm={12} md={12} lg={12}>
                        <Grid container justifyContent={"space-evenly"}>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <TextInput name={"Market"} label={"Market"} fullWidth />
                            </Grid>
                            <Grid items xs={12} sm={12} md={6} lg={4}>
                                <TextInput name={"City"} label={"City"} fullWidth />
                            </Grid>
                            <Grid items xs={12} sm={12} md={6} lg={4}>
                                <TextInput name={"District"} label={"District"} fullWidth />
                            </Grid>
                            <Grid items xs={0} sm={0} md={6} lg={0}>

                            </Grid>
                        </Grid>
                        <Grid container justifyContent={"space-evenly"}>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <TextInput name={"State"} label={"State"} fullWidth />
                            </Grid>
                            <Grid items xs={12} sm={12} md={6} lg={4}>
                                <TextInput name={"Pin"} label={"Pin"} type={'number'} fullWidth />
                            </Grid>
                            <Grid items xs={12} sm={12} md={6} lg={4}>
                                <SelectInput
                                    variant="outlined"
                                    name={"Mfg. Type"}
                                    label={"Mfg. Type"}
                                    options={["Option 1", "Option 2", "Option 3"]}
                                />
                            </Grid>
                            <Grid items xs={0} sm={0} md={6} lg={0}>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>)
}

export default AccHead;