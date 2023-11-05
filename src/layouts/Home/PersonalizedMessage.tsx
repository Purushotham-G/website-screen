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
              <Stack sx={{ justifyContent:"center", px:{md:10, xs:5}, gap:{md:3, xs:2}}}>
                <Typography sx={{fontSize:{md:"32px", xs:"24px", sm:"28px"}, fontWeight:"600"}}> Send <span style={{ color: "#0085FF" }}> personalized messages</span> to unlimited contacts</Typography>
                <Typography sx={{fontSize:{md:"18px", xs:"16px", sm:"17px"}, fontWeight:"400", textAlign:"justify"}}>Create high-impact engagement & sales campaigns using interactive message templates. Segment your audience by tags or data attributes and evaluate success using real-time reports.</Typography>
                <Stack sx={{flexDirection:"row"}}>
                  <Button variant='contained' disableElevation sx={{ fontWeight: 'bold', borderRadius: 2.5, backgroundColor:"#0085FF", boxShadow:"0px 16px 24px #0085FF29", textTransform:"none", fontSize:{md:"18px", xs:"16px", sm:"17px"} }}>Leran More</Button> 
                  <Typography></Typography>
                </Stack>
              </Stack>           
              </Grid>
              <Grid item md={6} xs={12}>
                <Stack sx={{alignItems:"center", px:{md:2, xs:5}}}>
                  <PersionalizedApps />
                </Stack>
                  
              </Grid>
          </Grid>
      </Stack>
    </Stack>
  )
}
