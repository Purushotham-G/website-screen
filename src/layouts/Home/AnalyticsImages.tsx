import { Stack } from '@mui/material'

//helpers
import { getAssetUrl } from '../../Assets/helper';

//responsive
import { useMediaQuery } from 'react-responsive';

export const AnalyticsImages = () => {

  const isMobile = useMediaQuery({ maxWidth: 786 });
  
  return (
    <>
        <Stack>
            <Stack sx={{position:"relative", }}>
                <img width={isMobile? "279px":"511px"} height={isMobile? "178px":"326px"} src={getAssetUrl('screenshots/analytics.png')} alt="no data icon"/>
            <Stack sx={{position:"absolute", top:{md:"-30px", xs:"-30px"}, left:{md:"396px", xs:"220px"}}}>
            <img width={isMobile?"68px":"125px"} height={isMobile?"70px":"128px"} src={getAssetUrl('screenshots/analytic-inactive.png')} alt="no data icon"/>
            </Stack>
            <Stack sx={{position:"absolute", bottom:{md:"0px", xs:"-10px"}, right:{md:"40px", xs:"-10px"}}}>
            <img width={isMobile?"74px":"125px"} height={isMobile?"75px":"128px"} src={getAssetUrl('screenshots/analytic-active.png')} alt="no data icon"/>
            </Stack>
            
            </Stack>
        </Stack>
    </>
  )
}
