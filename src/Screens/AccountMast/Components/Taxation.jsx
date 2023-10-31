import { Divider, Grid } from '@mui/material'
import React from 'react'
import TextInput from '../../../Components/TextInput'
const Taxation = () => {
    return (
        <Grid container padding={1}>
            <Grid items xs={12} sm={12} md={12} lg={12}>
                <Grid container justifyContent={"space-evenly"}>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextInput name={"CST No"} label={"CST No"} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextInput name={"TIN"} label={"TIN"} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextInput name={"PAN"} label={"PAN"} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextInput name={"TAN"} label={"TAN"} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextInput name={"Ref. By"} label={"Ref. By"} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextInput name={"TDS Date"} label={"TDS Date"} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextInput name={"TDS Rate"} label={"TDS Rate"} type={'number'} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextInput name={"TDS Natutre"} label={"TDS Nature"} />
                    </Grid>
                    <Divider />
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextInput name={"Dhara"} label={"Dhara"} type={'number'} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextInput name={"Mudhat"} label={"Mudhat"} type={'number'} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextInput name={"Rate Of Interest"} label={"Rate of Interest"} type={'number'} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextInput name={"Credit Days Limit"} label={"Credit Days Limit"} type={'number'} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <TextInput name={"Credit Limit"} label={"Credit Limit"} type={'number'}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Taxation
