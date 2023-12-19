import { Box, Grid, Stack } from '@mui/material'
import React from 'react'
import { HeaderTitle } from './HeaderTitle'
import { CustomerRelationship } from '../../layouts/Home/CustomerRelationship'
import { SocialMedia } from '../../layouts/Home/SocialMedia'

export const Header = () => {
  return (
    <Stack sx={{position:"relative", height:{md:"800px", xs:"800px"}}}>
      <Grid container>
          <Grid item md={3} xs={3} sx={{backgroundColor:"#0085FF", opacity:"5%", height:"800px"}}></Grid>
          <Grid item md={3} xs={3} sx={{backgroundColor:"#0085FF", opacity:"7%", height:"800px"}}></Grid>
          <Grid item md={3} xs={3} sx={{backgroundColor:"#0085FF", opacity:"9%", height:"800px"}}></Grid>
          <Grid item md={3} xs={3} sx={{backgroundColor:"#0085FF", opacity:"11%", height:"800px"}}></Grid>  
      </Grid>
      <Stack sx={{position:"relative", px:{md:10}, top:{md:"-800px", xs:"-800px"}}}>
        <HeaderTitle />
      </Stack>
      <Stack sx={{position:"relative", top:{md:"-750px", xs:"-750px"}}}>
        <CustomerRelationship />
      </Stack>
      <Stack sx={{position:"relative", bottom:{md:"800px", xs:"800px"}, px:{md:10, xs:2, sm:5}}}>
        <SocialMedia />
      </Stack>
    </Stack>
  )
}
