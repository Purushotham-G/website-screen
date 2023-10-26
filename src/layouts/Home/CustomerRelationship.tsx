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
        <Container sx={{maxWidth:"1440px !important"}}>
            <Stack sx={{alignItems:"center", height:"720px", justifyContent:{md:"center", xs:"none"}}}>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Stack width={isMobile? "326px": " 554px"} sx={{px:{md:13, xs:1}, py:{md:15, xs:2}}}>
                          <CustomRelationshipSlider />
                        </Stack>  
                    </Grid>
                    <Grid item md={6} xs={12}>
                    <Stack>    
                    {isMobile? 
                    <>
                        <Box sx={{width:"360px", height:"300px", overflow:"hidden"}}>
                          <img style={{width:"550px",height:"300px", objectFit:"cover", objectPosition:"-20% 50%"}} src={getAssetUrl('screenshots/chat.png')} alt="no data icon"/>
                        </Box>
                    </> : 
                    <Box sx={{width:"675px", height:"700px", overflow:"hidden"}}>
                        <img style={{width:"770px",height:"700px", objectFit:"cover", objectPosition:"-10% 50%"}} src={getAssetUrl('screenshots/chat.png')} alt="no data icon"/>
                    </Box>}
                    </Stack>
                    </Grid>
                </Grid>
            </Stack>
        </Container>
    </>
  )
}
