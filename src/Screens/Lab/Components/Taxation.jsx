import { Divider, Grid } from '@mui/material'
import React from 'react'
import TextInput from '../../../Components/TextInput'
const Taxation = () => {
    return (
        <Grid container padding={1}>
            <Grid items xs={12} sm={12} md={12} lg={12}>
                <Grid container justifyContent={"space-evenly"}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextInput name={"CST No"} label={"CST No"} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextInput name={"TIN"} label={"TIN"} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextInput name={"PAN"} label={"PAN"} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextInput name={"TAN"} label={"TAN"} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextInput name={"Ref. By"} label={"Ref. By"} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                    </Grid>
                </Grid>
            </Grid>
            <Divider />
            <Grid container justifyContent={'space-evenly'}>
                <Grid items xs={12} sm={6} md={3} lg={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextInput name={"TDS Date"} label={"TDS Date"} />
                    </Grid>
                </Grid>
                <Grid items xs={12} sm={6} md={3} lg={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextInput name={"TDS Rate"} label={"TDS Rate"} type={'number'} />
                    </Grid>
                </Grid>
                <Grid items xs={12} sm={6} md={3} lg={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextInput name={"Dhara"} label={"Dhara"} type={'number'} />
                    </Grid>
                </Grid>
                <Grid items xs={12} sm={6} md={3} lg={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextInput name={"Mudhat"} label={"Mudhat"} type={'number'} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justifyContent={'space-evenly'}>
                <Grid items xs={12} sm={6} md={6} lg={6}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextInput name={"TDS Natutre"} label={"TDS Nature"} />
                    </Grid>
                </Grid>
                <Grid items xs={12} sm={6} md={3} lg={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextInput name={"RateOfInterest"} label={"Rate of Interest"} type={'number'} />
                    </Grid>
                </Grid>
                <Grid items xs={12} sm={6} md={3} lg={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextInput name={"CreditDay"} label={"Credit Days Limit"} type={'number'} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid items xs={12} sm={12} md={12} lg={12}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextInput name={"CreditDayLimit"} label={"Credit Days Limit"} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Taxation
