import { Box, Container, Stack } from '@mui/material'
import React from 'react'
//helpers
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { getAssetUrl } from '../../Assets/helper';

export const SocialMedia = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 786 });

  return (
    <>
    <Container sx={{width:"100%"}}>
      <Box sx={{display:{md:"flex", xs:"grid", sm:"none"},boxShadow:"32px 32px 84px rgba(125, 149, 169, 0.12)", justifyContent:"space-between",alignItems:"center", background:"#FFFFFF", borderRadius:"8px", gridTemplateColumns:{xs:"auto auto auto", sm:""}, px:{md:10, xs:2, sm:4}, py:{md:2, xs:1, sm:2}, gap:{md:0, xs:1}}}>
        <img width={isMobile?"78px":"140px"} height={isMobile?"27px":"42px"} src={getAssetUrl('logos/spotify-logo.svg')} alt="no data icon"/>
        <img width={isMobile? "68px":"120px"} height={isMobile? "27px":"30px"} src={getAssetUrl('logos/slack-logo.svg')} alt="no data icon"/>
        <img width={isMobile? "91px":"162px"} height={isMobile?"27px":"32px"} src={getAssetUrl('logos/dropbox-logo.svg')} alt="no data icon"/>
        <img width={isMobile?"55px":"120px"} height={isMobile?"27px":"30px"}  src={getAssetUrl('logos/webflow-logo.svg')} alt="no data icon"/>
        <img width={isMobile? "65px":"98px"} height={isMobile? "27px":"22px"} src={getAssetUrl('logos/zoom-logo.svg')} alt="no data icon"/>
      </Box>
    </Container>    
    </>
  )
}