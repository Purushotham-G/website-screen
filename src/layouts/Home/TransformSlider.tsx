
import React from 'react'
import {Container, Stack, Grid, Typography, Button, Box} from '@mui/material';

//components
import { AnalyticsImages } from './AnalyticsImages';

export const TransformSlider = () => {
  return (
    <>
        <Stack sx={{width:"100%", backgroundColor:"#ffffff", height:{md:"550px", xs:"auto", sm:"auto"}, alignItems:"center", justifyContent:"center", boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", border:"1px solid #0085FF1A", borderRadius:"8px"}}>
            {/* <Stack sx={{maxWidth:"1200px", alignItems:"center", p:2}}> */}
            <Grid container>
                <Grid item xs={12} md={6}>
                  <Stack sx={{px:2}}>
                    <AnalyticsImages />
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  {/* <Stack >
                    <Stack sx={{gap:2}}>
                        <Typography sx={{fontSize:{md:"32px", xs:"24px"}, fontWeight:"600"}}> <span style={{color:"#0085FF"}}>Transform Shopping </span> Experience with AI Chatbots</Typography>
                        <Typography sx={{fontSize:{md:"18px", xs:"16px"}, fontWeight:"400", lineHeight:{md:"28px",xs:"24px"}, textAlign:"justify"}}>Deliver expert guidance anytime, anywhere, and sell more with a personalized and easy-to-navigate shopping experience on chat. Answer routine queries such as shipping status and payment status with AI automation. Humanize the experience with intuitive text, voice, and video-based interactions for complex queries and concerns</Typography>
                    </Stack>
                    <Stack sx={{flexDirection:"row"}}>
                      <Button variant='contained' disableElevation sx={{ fontWeight: 'bold', borderRadius: 2.5, backgroundColor:"#0085FF", boxShadow:"0px 16px 24px #0085FF29", textTransform:"none" }}>Learn More</Button> 
                      <Typography></Typography>
                    </Stack>
                  </Stack>   */}
                </Grid>
            </Grid>
            </Stack>
            
            {/* </Stack> */}
    </>
  )
}