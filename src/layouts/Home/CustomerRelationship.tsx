import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'

//responsive
import { useMediaQuery } from 'react-responsive';

//helpers
import { getAssetUrl } from '../../Assets/helper';

//components
import { CustomRelationshipSlider } from './CustomRelationshipSlider';

export const CustomerRelationship = () => {

  const isMobile = useMediaQuery({ maxWidth: 786 });

  return (
    <>
        <Stack sx={{width:"100%"}}>
            <Stack sx={{alignItems:"center", justifyContent:{md:"center", xs:"none"}}}>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Stack sx={{px:{md:6}}}>
                          <CustomRelationshipSlider />
                        </Stack>  
                    </Grid>
                    <Grid item md={6} xs={12} sx={{}}>
                    <Stack sx={{alignItems:"flex-end", justifyContent:"flex-start"}}>    
                    {isMobile? 
                    <>
                        <Box sx={{width:"100%", height:"450px", overflow:"hidden"}}>
                          <img style={{width:"120%",height:"450px", objectFit:"cover", objectPosition:"20% 70%"}} src={getAssetUrl('screenshots/chat.png')} alt="no data icon"/>
                        </Box>
                    </> : 
                    <Stack sx={{alignItems:"flex-end"}}>
                    <Box sx={{width:"130%", height:"auto", overflow:"hidden", justifyContent:"center"}}>
                        <img style={{width:"140%",height:"650px", objectFit:"cover", objectPosition:"0% 55%"}} src={getAssetUrl('screenshots/chat.png')} alt="no data icon"/>
                    </Box>
                    </Stack>
                    }
                    </Stack>
                    </Grid>
                </Grid>
            </Stack>
        </Stack>
    </>
  )
}