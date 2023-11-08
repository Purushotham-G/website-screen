import { Stack } from '@mui/material'

//helpers
import { getAssetUrl } from '../../Assets/helper';

//responsive
import { useMediaQuery } from 'react-responsive';

export const AnalyticsImages = () => {

  const isMobile = useMediaQuery({ maxWidth: 786 });
  
  return (
    <>
        <Stack sx={{ py:{md:2, xs:4}, px:{md:"", xs:1}}}>
            <Stack sx={{position:"relative" }}>
                <img width="100%" height={isMobile? "100%":"100%"} src={getAssetUrl('screenshots/analytics.png')} alt="no data icon"/>
            <Stack sx={{position:"absolute", top:{md:"-30px", xs:"-20px"}, left:{md:"430px", xs:"200px"}}}>
            <img width="100%" height="auto" src={getAssetUrl('screenshots/analytic-inactive.png')} alt="no data icon"/>
            </Stack>
            <Stack sx={{position:"absolute", bottom:{md:"0px", xs:"-10px"}, right:{md:"-30px", xs:"-10px"}}}>
            <img width={isMobile?"74px":"125px"} height="auto" src={getAssetUrl('screenshots/analytic-active.png')} alt="no data icon"/>
            </Stack> 
            </Stack>
        </Stack>
    </>
  )
}
