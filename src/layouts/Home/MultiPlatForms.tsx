import { Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

//components
import { MultiPlatFormImages } from './MultiPlatFormImages'

//responsive
import { useMediaQuery } from 'react-responsive';

export const MultiPlatForms = () => {
   const isMobile = useMediaQuery({ maxWidth: 786 });
  return (
    <Stack id ='integrations' sx={{width:"100%", py:{md:7, xs:3}, height:"auto"}}>
        <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6}>   
                <Stack sx={{px:{md:10, xs:3}, gap:{md:3, xs:2}, justifyContent:"center"}}>
                    <Typography sx={{fontSize:{md:"32px", xs:"24px"}, fontWeight:"600"}}><span style={{color:"#0085FF"}}>Integrate</span> with multi-platform apps & solutions</Typography>
                    <Typography sx={{fontSize:{md:"18px", xs:"16px"}, fontWeight:"400", textAlign:"justify"}}>Effortlessly link Avocado with your current technology infrastructure to exchange data and coordinate tasks across all your systems such as CRM, Billing aps and etcso you can optimize the tools you use.</Typography>
                    <Stack sx={{flexDirection:"row"}}>
                        <Button variant='contained' disableElevation sx={{ fontWeight: 'bold', borderRadius: 2.5, backgroundColor:"#0085FF", boxShadow:"0px 16px 24px #0085FF29", textTransform:"none", fontSize:{md:"18px", xs:"16px"} }}>Learn More</Button> 
                        <Typography></Typography>
                    </Stack>
                </Stack>  
            </Grid>
            <Grid item xs={12} md={6}>
                <Stack sx={{mt:{md:0, xs:4}}}>
                  <MultiPlatFormImages />
                </Stack>
            </Grid>
        </Grid>
    </Stack>
  )
}
