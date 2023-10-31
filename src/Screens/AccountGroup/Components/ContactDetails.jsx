import { Grid } from '@mui/material'
import React from 'react'
import SelectInput from '../../../Components/SelectInput'
import TextInput from '../../../Components/TextInput'

const ContactDetails = () => {
    return (
        <Grid container padding={1}>
            <Grid container justifyContent={"space-evenly"}>
                <Grid items xs={12} sm={6} md={4} lg={4}>
                    <TextInput label={"Mobile"} name={'Mobile'} type={'number'} width="200" />
                </Grid>
                <Grid items xs={12} sm={6} md={4} lg={4}>
                    <TextInput label={"Phone"} name={'Phone'} type={'number'} width="200" />
                </Grid>
                <Grid items xs={12} sm={6} md={4} lg={4}>
                    <TextInput label={"Email"} name={'Email'} type={'email'} width="200" />
                </Grid>
                <Grid items xs={12} sm={6} md={12} lg={12}>
                </Grid>

                <Grid items xs={12} sm={6} md={4} lg={4}>
                    <TextInput label={"Whatsapp"} name={'Whatsapp'} type={'number'} width="200" />
                </Grid>
                <Grid items xs={12} sm={6} md={4} lg={4}>
                    <TextInput label={"SMS"} name={'SMS'} type={'number'} width="200" />
                </Grid>
                <Grid items xs={12} sm={12} md={4} lg={4}>
                    <TextInput label={"Contact Person"} name={'Contact Person'} width="200" />
                </Grid>
                <Grid items xs={12} sm={12} md={12} lg={12}>
                <SelectInput
                variant="outlined"
                name={"Agent Name"}
                label={"Agent Name"}
                options={["Option 1", "Option 2", "Option 3"]}
            />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ContactDetails
