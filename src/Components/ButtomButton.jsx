import { Edit, Save } from '@mui/icons-material'
import { Container, Grid } from '@mui/material'
import React from 'react'
import FlatButton from './Button'

const FormButtonGroup = () => {
    return (
        <Container sx={{ pb: 2 }}>
            <Grid container padding={0.5}>
                <Grid container justifyContent={'end'}>
                    <FlatButton label={'Edit'}  icon={<Edit />} />
                    <FlatButton label={'Save'} icon={<Save />} />
                </Grid>
            </Grid>
        </Container>
    )
}


export default FormButtonGroup
