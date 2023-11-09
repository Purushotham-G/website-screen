import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

//responsive
import { useMediaQuery } from 'react-responsive'
import { IndustrySlider } from './IndustrySlider';
import { TransformSlider } from './TransformSlider';

export const IndustryScreen = () => {
  return (
    <Box id='industries' sx={{width:"100%", backgroundColor:"#FAFAFA"}}>
      <Stack sx={{height:"auto", alignItems:"center", justifyContent:"center", gap:{md:3, xs:1}, py:{md:8, xs:3}}}>
        <Stack sx={{alignItems:"center", justifyContent:"center"}}>
          <Typography sx={{fontSize:{md:"32px", xs:"24px", sm:"28px"}, fontWeight:"600"}}><span style ={{color:"#0085FF"}}>Solutions </span> for Every Industry</Typography>
          <Typography sx={{fontSize:{md:"18px", xs:"16px", sm:"17px"}, fontWeight:"400", textAlign:"center"}}>Industry-specific use cases designed to increase leads, transactions, and repeat purchases</Typography>
        </Stack>
        <Stack sx={{mt:2}}>
          <IndustrySlider />
        </Stack>
      </Stack>
    </Box>
  )
}