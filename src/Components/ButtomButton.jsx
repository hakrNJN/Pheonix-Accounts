import { Edit, Save } from '@mui/icons-material'
import { Container, Grid } from '@mui/material'
import React from 'react'
import FlatButton from './Button'

const ButtomButtonGroup = () => {
    return (
        <Container sx={{ p: 4 }}>
            <Grid container padding={1}>
                <Grid container justifyContent={"space-evenly"}>
                    <Grid items xs={6} sm={6} md={6} lg={6}>
                    </Grid>
                    <Grid items xs={6} sm={6} md={6} lg={6}>
                        <Grid container justifyContent={"space-evenly"}>
                            <FlatButton label={'Edit'} icon={<Edit />} />
                            <FlatButton label={'Save'} icon={<Save />} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ButtomButtonGroup
