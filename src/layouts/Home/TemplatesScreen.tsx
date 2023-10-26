import { Stack } from '@mui/material'
import React from 'react'
import { getAssetUrl } from '../../Assets/helper';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

export const TemplatesScreen = () => {
  const { t } = useTranslation();
    const isMobile = useMediaQuery({ maxWidth: 786 });
  return (
    <>
    <Stack sx={{px:{md:4,xs:0}}}>
        <Stack sx={{position:"relative", }}>
             <img width={isMobile? "309px": "614px" } height={isMobile? "232px": "437px"} src={getAssetUrl('screenshots/templates.png')} alt="no data icon"/>
        <Stack sx={{position:"absolute", top:{md:"-65px", xs:"-15px"}, right:{md:"40px", xs:"55px"}}}>
            <img width={isMobile?"79px":"157px"} height={isMobile?"142px": "281px"} src={getAssetUrl('screenshots/whatsapp-preview.png')} alt="no data icon"/>
        </Stack>
        <Stack sx={{position:"absolute", bottom:{md:"-60px",xs:"-25px"}, right:{md:"25px", xs:"45px"}}}>
           <img width={isMobile?"126px":"250px"} height={isMobile?"118px": "235px"}  src={getAssetUrl('screenshots/template-card.png')} alt="no data icon"/>
        </Stack> 
        </Stack>
    </Stack>
    </>
  )
}
