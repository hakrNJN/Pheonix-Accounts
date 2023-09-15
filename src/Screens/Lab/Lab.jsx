import React from "react";
import { Search } from '@mui/icons-material'
import { ArrowCircleLeft } from '@mui/icons-material'
import { Stream } from '@mui/icons-material'
import { ArrowCircleRight } from '@mui/icons-material'
import { WhatsApp } from '@mui/icons-material'
import { ArrowCircleDown } from '@mui/icons-material'
import { AppBar, Avatar, Card, Grid, Paper, Toolbar, Typography, useMediaQuery } from '@mui/material'
import { MenuItem, MenuList, Popover } from '@mui/material'
import { Box, Container, styled } from '@mui/system'
import { useState } from 'react'
import TextInput from "../../Components/TextInput";
import NumberInput from "../../Components/NumberInput";
import TitleBar from "../../Components/Global/TitleBar";
import SelectInput from "@mui/material/Select/SelectInput";

const Lab = () => {
  const isMobile = useMediaQuery('(max-width:600px)')
  const [anchorEl, setAnchorEl] = useState(null)



  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Container maxWidth='md'>
      <Card variant="outlined" sx={{ m: 2 }}>
        <TitleBar />


        <Box sx={{ flexGrow: 1 }}>
          <Grid container padding={1}>
            <Grid items xs={12} sm={12} md={8} lg={10}>
              <TextInput label={'Name'} fullWidth />
              <Grid container justifyContent={'space-evenly'} >
                <Grid items xs={12} sm={12} md={12} lg={4}>
                  <TextInput label={'GSTIN'} width="200" />
                </Grid>
                <Grid items xs={12} sm={12} md={12} lg={4}>
                  <TextInput label={'Category'} width="200" />
                </Grid>
                <Grid items xs={12} sm={12} md={12} lg={4}>
                  <TextInput label={'Schedule'} width="200" />
                </Grid>
              </Grid>

              <TextInput label={'Address 1'} fullWidth />
              <TextInput label={'Address 2'} fullWidth />
              <Grid container justifyContent={'space-evenly'} >
                <Grid items xs={12} sm={12} md={12} lg={4}>
                  <TextInput label={'City'} width="200" />
                </Grid>
                <Grid items xs={12} sm={12} md={12} lg={4}>
                  <TextInput label={'State'} width="200" />
                </Grid>
                <Grid items xs={12} sm={12} md={12} lg={4}>
                  <NumberInput label={'PIN'} width="100" />
                </Grid>
              </Grid>


            </Grid>
            <Grid items xs={12} sm={12} md={4} lg={2} paddingX={1}>
              <Paper elevation={5}>
                <Avatar sizes="512" />
              </Paper>
            </Grid>
          </Grid>
        </Box>

        <NumberInput aria-label="Demo number input" placeholder="Type a number…" />
      </Card>
    </Container>
  )
}

export default Lab
