import { Box, Container, Grid, Stack, Typography } from '@mui/material'

//responsive
import { useMediaQuery } from 'react-responsive';

//helpers
import { getAssetUrl } from '../../Assets/helper';

export const Footer = () => {
    const isMobile = useMediaQuery({ maxWidth: 786 });

    const services = [
        {name:"WhatsApp Api"},
        {name:"Chatbot"},
        {name:"Avocado Line"},
        {name:"Social Media Reporting"},
        {name:"For Agencies"},
    ];
    const product = [
        {name:"What’s New"},
        {name:"Status"},
        {name:"Betas"},
    ];
    const company = [
        {name:"Contact Us"},
        {name:"Our Customers"},
        {name:"Why Us"},
        {name:"Pricing"},
    ];

  return (
    <Box sx={{ maxWidth:"1440px !important",backgroundColor:"#EBF5FF", height:{md:"369px", xs:"auto"}, alignItems:"center", justifyContent:"center"}}>
        <Container sx={{maxWidth:"1200px !important", alignItems:"center", justifyContent:"center", mt:2, py:3}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3.6}>
                    <Stack sx={{p:{md:3, xs:2}, gap:{md:4, xs:1}}}>
                    <Stack sx={{flexDirection:"row", alignItems:"center"}}>
                    <img width="43px" height="30px" alt='avocado icon' src={getAssetUrl('avocado.svg')} />
                    <Typography sx={{fontSize:{md:"32px",}, fontWeight:"700", color:"#1A1A1A"}}>Avocado</Typography>
                    </Stack>
                        <Stack>
                            <Typography>Explore the business possibilities of WhatsApp with Avocado</Typography>
                        </Stack>
                        <Stack>
                            <Stack sx={{flexDirection:"row", gap:2}}>
                            <img width={isMobile?"24px":"24px"} height={isMobile?"27px":"24px"} src={getAssetUrl('logos/facebook-black-logo.svg')} alt="no data icon"/>
                            <img width={isMobile? "24px":"24px"} height={isMobile? "27px":"24px"} src={getAssetUrl('logos/twitter-black-logo.svg')} alt="no data icon"/>
                            <img width={isMobile? "24px":"24px"} height={isMobile?"27px":"24px"} src={getAssetUrl('logos/instagram-black-logo.svg')} alt="no data icon"/>
                            <img width={isMobile?"24px":"24px"} height={isMobile?"27px":"24px"}  src={getAssetUrl('logos/youtube-black-logo.svg')} alt="no data icon"/>
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={2.8}>
                    <Stack sx={{p:{md:3, xs:2}, gap:{md:2, xs:1}}}>
                        <Typography sx={{fontWeight:"600", fontSize:{md:"16px", xs:""}, color:"#1A1A1A"}}>Services</Typography>
                          {services?.map((item)=>
                          <Typography>{item.name}</Typography>
                          )}
                    </Stack>
                </Grid>
                <Grid item xs={12} md={2.8}>
                    <Stack sx={{p:{md:3,xs:2}, gap:{md:2, xs:1}}}>
                        <Typography sx={{fontWeight:"600", fontSize:{md:"16px", xs:""}, color:"#1A1A1A"}}>Product Feature</Typography>
                        {product?.map((item)=>
                        <Typography>{item.name}</Typography>
                        )}
                    </Stack>
                </Grid>
                <Grid item xs={12} md={2.8}>
                    <Stack sx={{p:{md:3, xs:2}, gap:{md:2, xs:1}}}>
                        <Typography sx={{fontWeight:"600", fontSize:{md:"16px", xs:""}, color:"#1A1A1A"}}>Company</Typography>
                        {company?.map((item)=>
                        <Typography>{item.name}</Typography>
                        )}
                    </Stack>
                </Grid>

            </Grid>
        </Container>
    </Box>
  )
}
