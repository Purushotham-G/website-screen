import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

//components
import { PersionalizedApps } from './PersionalizedApps'

//responsive
import { useMediaQuery } from 'react-responsive'

export const PersonalizedMessage = () => {

  const isMobile = useMediaQuery({ maxWidth: 786 });
  return (
    <Box sx={{backgroundColor:"#FAFAFA"}}>
    <Container sx={{maxWidth:"1440px !important"}}>
      <Stack sx={{p:2,py:4, alignItems:"center", justifyContent:"center"}}>
          <Grid container spacing={2} sx={{alignItems:"center", justifyContent:"center"}}>
              <Grid item md={6} xs={12}> 
              <Stack sx={{ width:{md:"482px", xs:"313px"}, justifyContent:"center", px:{md:10, xs:1}, gap:{md:3, xs:2}}}>
                <Typography sx={{fontSize:{md:"32px"}, fontWeight:"600"}}> Send <span style={{ color: "#0085FF" }}> personalized messages</span> to unlimited contacts</Typography>
                <Typography sx={{fontSize:{md:"18px"}, fontWeight:"400", textAlign:"justify"}}>Create high-impact engagement & sales campaigns using interactive message templates. Segment your audience by tags or data attributes and evaluate success using real-time reports.</Typography>
                <Stack sx={{flexDirection:"row"}}>
                  <Button variant='contained' disableElevation sx={{ fontWeight: 'bold', borderRadius: 2.5, backgroundColor:"#0085FF", boxShadow:"0px 16px 24px #0085FF29" }}>Leran More</Button> 
                  <Typography></Typography>
                </Stack>
              </Stack>           
              </Grid>
              <Grid item md={6} xs={12}>
                <Stack sx={{width:{md:"774px", xs:"360px"}, height:{md:"790px", xs:"364px"}, background:"rgba(255, 255, 255, 0.79);", borderRadius:"50%", justifyContent:"center", backdropFilter:"blur(70.06295776367188px)"}}>
                  <PersionalizedApps />
                </Stack>
              </Grid>
          </Grid>
      </Stack>
    </Container>
    </Box>
  )
}
