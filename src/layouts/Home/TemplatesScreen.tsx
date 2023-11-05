// import { Stack } from '@mui/material'
// import React from 'react'
// import { getAssetUrl } from '../../Assets/helper';
// import { useTranslation } from 'react-i18next';
// import { useMediaQuery } from 'react-responsive';

// export const TemplatesScreen = () => {
//   const { t } = useTranslation();
//     const isMobile = useMediaQuery({ maxWidth: 786 });
//   return (
//     <>
//     <Stack sx={{px:{md:4,xs:0}}}>
//         <Stack sx={{position:"relative", }}>
//              <img width={isMobile? "309px": "614px" } height={isMobile? "232px": "437px"} src={getAssetUrl('screenshots/templates.png')} alt="no data icon"/>
//         <Stack sx={{position:"absolute", top:{md:"-65px", xs:"-15px"}, right:{md:"40px", xs:"55px"}}}>
//             <img width={isMobile?"79px":"157px"} height={isMobile?"142px": "281px"} src={getAssetUrl('screenshots/whatsapp-preview.png')} alt="no data icon"/>
//         </Stack>
//         <Stack sx={{position:"absolute", bottom:{md:"-60px",xs:"-25px"}, right:{md:"25px", xs:"45px"}}}>
//            <img width={isMobile?"126px":"250px"} height={isMobile?"118px": "235px"}  src={getAssetUrl('screenshots/template-card.png')} alt="no data icon"/>
//         </Stack> 
//         </Stack>
//     </Stack>
//     </>
//   )
// }


import { Stack } from '@mui/material'
import React from 'react'
//helpers

import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { getAssetUrl } from '../../Assets/helper';

export const TemplatesScreen = () => {
  const { t } = useTranslation();
    const isMobile = useMediaQuery({ maxWidth: 786 });
  return (
    <>
    <Stack sx={{px:{md:5, xs:4, sm:3}, py:{md:3, xs:5, sm:4}}}>
        <Stack sx={{position:"relative" }}>
          <img width={isMobile? "100%": "100%" } height={isMobile? "100%": "100%"} src={getAssetUrl('screenshots/templates.png')} alt="no data icon"/>
        <Stack sx={{position:"absolute", top:{md:"-60px", xs:"-15px", sm:"30px"}, right:{md:"-40px", xs:"-10px", sm:"-20px"}}}>
          <img width={isMobile?"79px":"157px"} height={isMobile?"142px": "281px"} src={getAssetUrl('screenshots/whatsapp-preview.png')} alt="no data icon"/>
        </Stack>
        <Stack sx={{position:"absolute", bottom:{md:"-55px",xs:"-25px", sm:"5px"}, right:{md:"-75px", xs:"-30px", sm:"-15px"}}}>
          <img width={isMobile?"126px":"250px"} height={isMobile?"118px": "235px"}  src={getAssetUrl('screenshots/template-card.png')} alt="no data icon"/>
        </Stack> 
        </Stack>
    </Stack>
    </>
  )
}
