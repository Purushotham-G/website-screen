import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import { getAssetUrl } from '../../Assets/helper';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

export const SocialMedia = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 786 });

  return (
    <>
    <Container sx={{maxWidth:{md:"1200px !important", xs:"343px"}, bottom:{md:"-5px", xs:"-75px"},left:{md:"80px", xs:"17px"}, position:"absolute", gap:2}}>
      <Box sx={{display:{md:"flex", xs:"grid"},boxShadow:"32px 32px 84px rgba(125, 149, 169, 0.12)", justifyContent:"space-between",alignItems:"center", background:"#FFFFFF", p:2, borderRadius:"8px", gridTemplateColumns:"auto auto auto", gap:2}}>
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
