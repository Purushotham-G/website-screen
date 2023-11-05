import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

//utils
import { useTranslation } from 'react-i18next';

//responsive
import { useMediaQuery } from 'react-responsive';

//helpers
import { getAssetUrl } from '../../Assets/helper';

export const Sales = () => {
    const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 786 });
  return (
    <>
        <Stack sx={{ backgroundColor:"#FAFAFA", alignItems:"center", py:{md:6, xs:2, sm:4}, px:{md:15, xs:2, sm:10}}}>
            <Stack sx={{alignItems:"center", justifyContent:"center", backgroundColor:" #FFFFFF", height:{md:"382px", xs:"auto", sm:"auto"}, boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", gap:{md:2, xs:3}, px:{md:10, xs:2}, py:{md:0, xs:3}, borderRadius:"8px"}}>
                <Stack sx={{alignItem:"center", justifyContent:"center", px:{md:12, xs:1, sm:9}, gap:{md:0, xs:3, sm:2}}}>
                    <Stack sx={{px:{md:2, xs:1, sm:4}, py:{md:4}, alignItems:"center", gap:{md:3, xs:2, sm:3}, justifyContent:"center"}}>
                        <Typography sx={{fontSize:{md:"36px", xs:"24px", sm:"28px"}, fontWeight:"600", textAlign:"center", lineHeight:{md:"40px", xs:"24px", sm:"32px"}}}><span style={{color:"#0085FF"}}>Unlock the full power of WhatsApp </span>for sales, customer support, and engagement</Typography>
                        <Typography sx={{fontWeight:"400", fontSize:{md:"18px", xs:"16px", sm:"17px"}, textAlign:"center" }}>Send your first message or launch a campaign today. It’s free.</Typography>   
                    </Stack>
                <Stack sx={{flexDirection:{md:"row", xs:"column"}, gap:{md:2, xs:1}, alignItems:"center", justifyContent:"center"}}>
                    <Stack sx={{flexDirection:"row"}}>
                        <Button variant='contained' disableElevation sx={{ fontWeight: 'bold', borderRadius: 2.5, backgroundColor:"#0085FF", boxShadow:"0px 16px 24px #0085FF29", textTransform:"none", py:{md:1}, fontSize:{md:"18px", xs:"16px", sm:"17px"} }}>Start free trail now</Button> 
                        <Typography></Typography>
                    </Stack>
                    <Stack >
                    <Box sx={{fontWeight: 'bold', borderRadius: 2.5, backgroundColor:"#FFFFFF", boxShadow:"0px 16px 24px #0085FF29", color:"#0085FF", cursor:"pointer", border:"1px solid #0085FF"}}>
                        <Stack sx={{flexDirection:"row", alignItems:"center", justifyContent:"center", px:2, gap:{md:2, xs:2, sm:2} }}>
                        <Typography sx={{fontSize:{md:"18px", xs:"16px", sm:"17px"}, fontWeight:"600", py:1.2}}>Chat with Us </Typography>
                        <img width={isMobile?"28px":"33px"} height={isMobile?"28px":"33px"} src={getAssetUrl('whatsapp-icon.png')} alt="no data icon"/>
                        </Stack>
                    </Box>
                    </Stack>
                </Stack>
                </Stack>
                
            </Stack>
        </Stack>
    </>
  )
}
