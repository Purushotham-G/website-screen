import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

//components
import { PersionalizedApps } from './PersionalizedApps'

//responsive
import { useMediaQuery } from 'react-responsive'

export const PersonalizedMessage = () => {

  const isMobile = useMediaQuery({ maxWidth: 786 });
  return (
    <Stack sx={{backgroundColor:"#FAFAFA", width:"100%", height:{md:"690px", xs:"auto", sm:"auto"}, justifyContent:"center", py:2}}>
      <Stack sx={{alignItems:"center", justifyContent:"center"}}>
          <Grid container spacing={2} sx={{alignItems:"center", justifyContent:"center"}}>
              <Grid item md={6} xs={12}> 
              <Stack sx={{ justifyContent:"center", px:{md:10, xs:5}, gap:{md:2, xs:2}}}>
                <Typography sx={{fontSize:{md:"26px", xs:"20px", sm:"24px"}, fontWeight:"600", color:"#0085FF"}}>Make Smart Moves</Typography>
                <Typography sx={{fontSize:{md:"32px", xs:"24px", sm:"28px"}, fontWeight:"600"}}>Boost Sales and Engagement with WhatsApp Business Tools</Typography>
                <Typography sx={{fontSize:{md:"18px", xs:"16px", sm:"17px"}, fontWeight:"400", textAlign:"justify"}}>Using pre-approved templates in WhatsApp Business helps ensure consistent, professional communication that boosts sales and maintains customer engagement. Sorting your audience with tags allows for tailored messaging and campaigns, while instant reports provide valuable insights into the effectiveness of your strategies, enabling quick adjustments and optimization.</Typography>
                <Stack sx={{flexDirection:"row"}}>
                  <Button variant='contained' disableElevation sx={{ fontWeight: 'bold', borderRadius: 2.5, backgroundColor:"#0085FF", boxShadow:"0px 16px 24px #0085FF29", textTransform:"none", fontSize:{md:"18px", xs:"16px", sm:"17px"} }}>Learn More</Button> 
                  <Typography></Typography>
                </Stack>
              </Stack>           
              </Grid>
              <Grid item md={6} xs={12}>
                <Stack sx={{alignItems:"center"}}>
                  <PersionalizedApps />
                </Stack>
                  
              </Grid>
          </Grid>
      </Stack>
    </Stack>
  )
}
