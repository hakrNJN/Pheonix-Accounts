import { Divider, Grid } from '@mui/material'
import React from 'react'
import SelectInput from '../../../Components/SelectInput'
import TextInput from '../../../Components/TextInput'
const Taxation = () => {
    return (
        <Grid container padding={1}>
            <Grid items xs={12} sm={12} md={12} lg={12}>
                <Grid container justifyContent={"space-evenly"}>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextInput name={"Dhara"} label={"Dhara"} type={'number'} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextInput name={"Grace"} label={"Grace"} type={'number'} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <SelectInput
                            variant="outlined"
                            name={"Transport Name"}
                            label={"Transport Name"}
                            options={["Option 1", "Option 2", "Option 3"]}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextInput name={"Mudhat"} label={"Mudhat"} type={'number'} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextInput name={"Commission"} label={"Commission"} type={'number'} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextInput name={"Remark"} label={"Remark"} multiline={'true'}/>
                    </Grid>
                </Grid>
                <Divider />
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Grid container justifyContent={"space-evenly"}>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <TextInput name={"Dr Interest"} label={"Dr Interest"} type={'number'} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <TextInput name={"Packing"} label={"Packing"} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <TextInput name={"Bank Interest"} label={"Bank Interest"} type={'number'} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <TextInput name={"Purchase RD"} label={"Purchase RD"} type={'number'} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <SelectInput
                                variant="outlined"
                                name={"Status"}
                                label={"Status"}
                                options={["True", "False"]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <TextInput name={"Amount Limit"} label={"Amount Limit"} type={'number'} />
                        </Grid>
                    </Grid>
                    <Grid item xs={0} sm={0} md={6} lg={6}>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Taxation
