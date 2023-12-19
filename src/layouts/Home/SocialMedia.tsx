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
    <Stack sx={{width:"100%", justifyContent:"center"}}>
      <Box sx={{display:{md:"flex", xs:"grid", sm:"none"},boxShadow:"32px 32px 84px rgba(125, 149, 169, 0.12)", justifyContent:"space-between",alignItems:"center", background:"#FFFFFF",gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : '1fr', placeItems:isMobile? "center": "initial", borderRadius:"8px", py:{md:3, xs:1}, px:2, gap:{md:0, xs:1.5}}}>
        <img width="100%" height={isMobile?"27px":"30px"} src={getAssetUrl('logos/spotify-logo.svg')} alt="no data icon"/>
        <img width="100%" height={isMobile? "27px":"30px"} src={getAssetUrl('logos/slack-logo.svg')} alt="no data icon"/>
        <img width="100%" height={isMobile?"27px":"30px"} src={getAssetUrl('logos/dropbox-logo.svg')} alt="no data icon"/>
        <img width="100%" height={isMobile?"27px":"30px"}  src={getAssetUrl('logos/webflow-logo.svg')} alt="no data icon"/>
        <img width="100%" height={isMobile? "27px":"30px"} src={getAssetUrl('logos/zoom-logo.svg')} alt="no data icon"/>
      </Box>
    </Stack>    
    </>
  )
}