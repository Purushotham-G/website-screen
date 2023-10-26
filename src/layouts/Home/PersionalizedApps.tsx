import { Stack } from '@mui/material'

//helpers
import { getAssetUrl } from '../../Assets/helper';

//responsive
import { useMediaQuery } from 'react-responsive';

export const PersionalizedApps = () => {
    const isMobile = useMediaQuery({ maxWidth: 786 });
    
  return (
    <>
    <Stack>
        <Stack sx={{position:"relative",p:{md:4, xs:1} }}>
            <img width={isMobile? "267px": "614px" } height={isMobile? "190px": "437px"} src={getAssetUrl('screenshots/apps.png')} alt="no data icon"/>
        <Stack sx={{position:"absolute", top:{md:"-15px", xs:"-15px"}, left:{md:"159px", xs:"55px"}}}>
          <img width={isMobile?"152px":"350px"} height={isMobile?"93px": "216px"} src={getAssetUrl('screenshots/quick-replies.png')} alt="no data icon"/>
        </Stack>
        <Stack sx={{position:"absolute", bottom:{md:"-75px",xs:"-45px"}, left:{md:"-110px", xs:"-40px"}}}>
          <img width={isMobile?"152px":"350px"} height={isMobile?"94px": "216px"}  src={getAssetUrl('screenshots/chatgpt.png')} alt="no data icon"/>
        </Stack>
        <Stack sx={{position:"absolute", bottom:{md:"-75px", xs:"-15px"}, right:{md:"0px", xs:"30px"}}}>
          <img width={isMobile?"152px":"350px"} height={isMobile?"94x": "216px"}  src={getAssetUrl('screenshots/broadcast.png')} alt="no data icon"/>
        </Stack>
        
        </Stack>
    </Stack>
    </>
  )
}
