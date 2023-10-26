import { Box, Button, Container, Icon, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { getAssetUrl } from '../../Assets/helper';

export const Sales = () => {
    const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 786 });
  return (
    <>
        <Container sx={{maxWidth:"1440px ! important", backgroundColor:"#FAFAFA", alignItems:"center", py:{md:6}}}>
            <Stack sx={{ alignItems:"center"}}>
                <Stack sx={{width:{md:"1200px", xs:"362px"}, alignItems:"center", justifyContent:"center", backgroundColor:" #F7F7F7", height:{md:"382px"}, boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", gap:{md:2, xs:1}}}>
                    <Stack sx={{width:{md:"749px", xs:"320px"}, px:{md:6, xs:1}, py:{md:4}, alignItems:"center", gap:{md:2, xs:1}}}>
                        <Typography sx={{fontSize:{md:"36px", xs:"24px"}, fontWeight:"600", textAlign:"center", lineHeight:{md:"40px", xs:"24px"}}}><span style={{color:"#0085FF"}}>Unlock the full power of WhatsApp </span>for sales, customer support, and engagement</Typography>
                        <Typography sx={{fontWeight:"400", fontSize:{md:"18px", xs:"16px"}, textAlign:"center" }}>Send your first message or launch a campaign today. It’s free.</Typography>   
                    </Stack>
                        <Stack sx={{flexDirection:{md:"row", xs:"column"}, gap:{md:2, xs:1}}}>
                            <Stack sx={{flexDirection:"row"}}>
                                <Button variant='contained' disableElevation sx={{ fontWeight: 'bold', borderRadius: 2.5, backgroundColor:"#0085FF", boxShadow:"0px 16px 24px #0085FF29" }}>Start free trail now</Button> 
                                <Typography></Typography>
                            </Stack>
                            <Stack >
                            <Box sx={{fontWeight: 'bold', borderRadius: 2.5, backgroundColor:"#FFFFFF", boxShadow:"0px 16px 24px #0085FF29", color:"#0085FF", cursor:"pointer", border:"1px solid #0085FF"}}>
                                <Stack sx={{flexDirection:"row", alignItems:"center", justifyContent:"center", p:1, gap:1}}>
                                <Typography sx={{fontSize:{md:"18px", xs:"16px"}, fontWeight:"600"}}>Chat with Us </Typography>
                                <img width={isMobile?"30px":"33px"} height={isMobile?"30px":"33px"} src={getAssetUrl('whatsapp-icon.png')} alt="no data icon"/>
                                </Stack>
                            </Box>
                            </Stack>
                        </Stack>
                </Stack>
            </Stack>
        </Container>
    </>
  )
}
