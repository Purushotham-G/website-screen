import { Stack } from '@mui/material'

//helpers
import { getAssetUrl } from '../../Assets/helper';

//responsive
import { useMediaQuery } from 'react-responsive';

export const PersionalizedApps = () => {
    const isMobile = useMediaQuery({ maxWidth: 786 });
    
  return (
    <>
      <Stack sx={{position:"relative", p:{md:2, xs:4} }}>
          <img width={isMobile? "100%": "100%" } height={isMobile? "190px": "437px"} src={getAssetUrl('screenshots/apps.png')} alt="no data icon"/>
        <Stack sx={{position:"absolute", top:{md:"-15px", xs:"10px"}, left:{md:"159px", xs:"90px"}}}>
          <img width="100%" height={isMobile?"93px": "216px"} src={getAssetUrl('screenshots/quick-replies.png')} alt="no data icon"/>
        </Stack>
        <Stack sx={{position:"absolute", bottom:{md:"-75px",xs:"-15px"}, left:{md:"-110px", xs:"-0px"}}}>
          <img width="100%" height={isMobile?"94px": "216px"}  src={getAssetUrl('screenshots/chatgpt.png')} alt="no data icon"/>
        </Stack>
        <Stack sx={{position:"absolute", bottom:{md:"-75px", xs:"-5px"}, right:{md:"0px", xs:"-0px"}}}>
          <img width="100%" height={isMobile?"94x": "216px"}  src={getAssetUrl('screenshots/broadcast.png')} alt="no data icon"/>
        </Stack>
      </Stack>
    </>
  )
}
