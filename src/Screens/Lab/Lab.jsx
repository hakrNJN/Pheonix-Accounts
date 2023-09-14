import React from "react";
import { Search } from '@mui/icons-material'
import { ArrowCircleLeft } from '@mui/icons-material'
import { Stream } from '@mui/icons-material'
import { ArrowCircleRight } from '@mui/icons-material'
import { WhatsApp } from '@mui/icons-material'
import { ArrowCircleDown } from '@mui/icons-material'
import { AppBar, Card, Grid, Toolbar, Typography, useMediaQuery } from '@mui/material'
import { MenuItem, MenuList, Popover } from '@mui/material'
import { Box, Container } from '@mui/system'
import { useState } from 'react'
import TextInput from "../../Components/TextInput";

const Lab = () => {
  const isMobile = useMediaQuery('(max-width:600px)')
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <Container maxWidth='lg'>
      <Card variant="outlined" sx={{ m: 2 }}>
        <AppBar position="static">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, maxHeight:50, mx:1 }}>
              <Grid container spacing={1}>
                <Grid xs="auto">
                  <Stream />
                </Grid>
                <Grid xs justifyContent="center" alignItems="center">
                  <Typography align='center'>
                    Form Title Here
                  </Typography>
                </Grid>
                <Grid xs={4} sm={12} md={1} >
                  <Search/>
                  {isMobile ? (
                    <React.Fragment>
                      <ArrowCircleDown onClick={handleClick}/>
                      <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}
                      >
                        <MenuList>
                          <MenuItem><ArrowCircleLeft /></MenuItem>
                          <MenuItem><ArrowCircleRight/></MenuItem>
                          <MenuItem><WhatsApp/></MenuItem>
                        </MenuList>
                      </Popover>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <ArrowCircleLeft />
                      <ArrowCircleRight/>
                      <WhatsApp/>
                    </React.Fragment>
                  )}
                </Grid>
              </Grid>
            </Box>
          </Toolbar>
        </AppBar>
        <TextInput label={'Name'} fullWidth/>
      </Card>
    </Container>
  )
}

export default Lab
