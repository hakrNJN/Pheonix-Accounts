import { Grid } from '@mui/material'
import React from 'react'
import TextInput from '../../../Components/TextInput'

const Bank = () => {
    return (
        <Grid container padding={1}>
            <Grid items xs={12} sm={12} md={12} lg={12}>
                <Grid container justifyContent={"space-evenly"}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextInput name={"Bank Name"} label={"Bank Name"} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextInput name={"Branch Name"} label={"Branch Name"} />
                    </Grid>
                    <Grid items xs={12} sm={12} md={8} lg={8}>
                        <TextInput name={"Account Name"} label={"Account Name"} />
                    </Grid>
                    <Grid items xs={12} sm={12} md={4} lg={4}>
                        <TextInput name={"IFSC"} label={"IFSC"} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextInput name={"Branch Address"} label={"Branch Address"} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <TextInput name={"SwiftCode"} label={"Swift Code"} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Bank
