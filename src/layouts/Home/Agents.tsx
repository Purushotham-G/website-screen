import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { getAssetUrl } from '../../Assets/helper';

//components
import { AnalyticsImages } from './AnalyticsImages'

//responsive
import { useMediaQuery } from 'react-responsive'

export const Agents = () => {

  const isMobile = useMediaQuery({ maxWidth: 786 });

  return (
    <Box sx={{backgroundColor:"#FAFAFA", py:{md:6, xs:2}}}>
        <Container sx={{maxWidth:"1440px !important", gap:2}}>
            <Stack sx={{alignItems:"center", justifyContent:"center"}}>
                <Typography sx={{fontSize:{md:"32px", xs:"24px"}, fontWeight:"600"}}><span style ={{color:"#0085FF"}}>Solutions </span> for Every Industry</Typography>
                <Typography sx={{fontSize:{md:"18px", xs:"16px"}, fontWeight:"400"}}>Industry-specific use cases designed to increase leads, transactions, and repeat purchases</Typography>
            </Stack>
            <Stack sx={{alignItems:"center", justifyContent:"center", p:{md:4,xs:1}}}>
                <Stack sx={{width:{maxWidth:"1200px !important"}, backgroundColor:"#ffffff", borderRadius:"8px", boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", border:"3px solid #0085FF1A"}}>
                    <Stack sx={{px:3, py:8}}>
                        <Grid container spacing={{md:3, xs:2}}>
                          <Grid item xs={12} md={6}>
                            <Stack sx={{}}>
                              <AnalyticsImages />
                            </Stack>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Stack sx={{gap:2, width:{md:"482px"}, px:{md:4, xs:2}}}>
                              <Stack sx={{gap:2}}>
                                  <Typography sx={{fontSize:{md:"32px", xs:"24px"}, fontWeight:"600"}}> <span style={{color:"#0085FF"}}>Transform Shopping </span> Experience with AI Chatbots</Typography>
                                  <Typography sx={{fontSize:{md:"18px", xs:"16px"}, fontWeight:"400", lineHeight:{md:"28px",xs:"24px"}, textAlign:"justify"}}>Deliver expert guidance anytime, anywhere, and sell more with a personalized and easy-to-navigate shopping experience on chat. Answer routine queries such as shipping status and payment status with AI automation. Humanize the experience with intuitive text, voice, and video-based interactions for complex queries and concerns</Typography>
                              </Stack>
                              <Stack sx={{flexDirection:"row"}}>
                                <Button variant='contained' disableElevation sx={{ fontWeight: 'bold', borderRadius: 2.5, backgroundColor:"#0085FF", boxShadow:"0px 16px 24px #0085FF29" }}>Learn More</Button> 
                                <Typography></Typography>
                              </Stack>
                            </Stack>
                            
                          </Grid>
                        </Grid>
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    </Box>
  )
}
