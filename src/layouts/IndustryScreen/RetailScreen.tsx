import { Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { AnalyticsImages } from '../Home/AnalyticsImages'

//responsive
import { useMediaQuery } from 'react-responsive';
import { getAssetUrl } from '../../Assets/helper';

export const RetailScreen = () => {

    const isMobile = useMediaQuery({ maxWidth: 786 });
    
  return (
    <>
        <Stack sx={{width:"100%", backgroundColor:"#ffffff", height:{md:"550px", xs:"auto", sm:"auto"}, alignItems:"center", justifyContent:"center", boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", border:"1px solid #0085FF1A", borderRadius:"8px"}}>
            <Grid container>
                <Grid item xs={12} md={6}>
                  <Stack sx={{px:4, py:{md:2, xs:3}}}>
                    <img width="100%" height="100%" src={getAssetUrl('website/retail.jpg')} alt="no data icon"/>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack sx={{py:{md:3, xs:2}, px:{md:8, xs:3}, gap:{md:2, xs:1}}} >
                    <Stack sx={{gap:2}}>
                        <Typography sx={{fontSize:{md:"32px", xs:"24px"}, fontWeight:"600"}}> <span style={{color:"#0085FF"}}>Transform Shopping </span> Experience with AI Chatbots</Typography>
                        <Typography sx={{fontSize:{md:"18px", xs:"16px"}, fontWeight:"400", lineHeight:{md:"28px",xs:"24px"}, textAlign:"justify"}}>Boost sales and engagement in the retail industry through WhatsApp Business, providing expert guidance and personalized shopping experiences anytime, anywhere.</Typography>
                    </Stack>
                    <Stack sx={{flexDirection:"row"}}>
                      <Button variant='contained' disableElevation sx={{ fontWeight: 'bold', borderRadius: 2.5, backgroundColor:"#0085FF", boxShadow:"0px 16px 24px #0085FF29", textTransform:"none", fontSize:{md:"18px", xs:"16px"} }}>Learn More</Button> 
                      <Typography></Typography>
                    </Stack>
                  </Stack>  
                </Grid>
            </Grid>
        </Stack>
    </>
  )
}
