import { Box, Container, Stack, Typography } from '@mui/material'

//sliders
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

//heplers
import { getAssetUrl } from '../../Assets/helper';

//responsive
import { useMediaQuery } from 'react-responsive';

export const CustomerSlider = () => {

  const isMobile = useMediaQuery({ maxWidth: 786 });
  
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        };

  return (
    <Box sx={{backgroundColor:"#FAFAFA", py:{md:8, xs:2}, gap:{md:3, xs:2}}}>
        <Container sx={{maxWidth:"1440px !important", height:{md:"640px",xs:"569px"}}}>
            <Stack sx={{alignItems:"center", justifyContent:"center", p:{md:4, xs:1}}}>
                <Stack sx={{alignItems:"center", justifyContent:"center", mt:{md:3, xs:2}, textAlign:"center"}}>
                    <Typography sx={{fontSize:{md:"32px", xs:"24px"}, fontWeight:"600"}}>See What Are Our <span style={{color:"#0085FF"}}> Customers Saying </span></Typography>
                    <Typography sx={{fontSize:{md:"18px", xs:"16px"}, fontWeight:"400"}}>About business impact achieved, solutions delivered & more</Typography>
                </Stack>
            </Stack>
            <Stack sx={{py:{md:2, xs:0}}}>
            <Slider {...settings}>
                <Stack sx={{height:"350px", alignItems:"center", justifyContent:"center", py:{md:4, xs:1}}}>
                    <Stack sx={{position:"relative", width:{md:"848px", xs:"350px"}, height:{md:"300px", xs:"237px"}, alignItems:"center",justifyContent:"center", p:{md:2, xs:0},backgroundColor:"#FFFFFF",  borderRight:"3px solid #0085FF", boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", borderRadius:"8px", mt:{xs:4}}}>
                        <Stack sx={{width:{md:"567px", xs:"312px"}, py:{md:3, xs:1}}}>
                            <Typography sx={{fontSize:{md:"26px", xs:"16px"}, fontWeight:"600", lineHeight:{md:"40px", xs:"24px"}, textAlign:"justify", color:"#1A1A1A"}}>A product like Avocado is fundamental, practically 90% of deals are closed on WhatsApp thanks to the Avocado platform.</Typography>
                            <Stack>
                                <Typography sx={{fontSize:{md:"20px",xs:"12px"}, fontWeight:"600", color:"#1A1A1A"}}>Courtney Henry</Typography>
                                <Typography sx={{fontSize:{md:"14px", xs:"10px"}, fontWeight:"400", color:"#1A1A1A"}}>CEO, Company</Typography>
                            </Stack>
                        </Stack>
                        <Stack sx={{position:"absolute", width:{md:"150px", xs:"75px"}, height:{md:"150px", xs:"75px"}, alignItems:"center", justifyContent:"center", left:{md:"-75px"},top:{md:"90px",xs:"-40px"}, borderLeft:"3px solid #0085FF", borderRadius:"8px", boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", backgroundColor:"#FFFFFF"}}>
                        <img width={isMobile? "64px": "129px"} height={isMobile? "51px" :"102px"} src={getAssetUrl('logos/patchi-logo.png')} alt="no data icon"/>
                    </Stack>
                    </Stack>    
                </Stack>
                <Stack sx={{height:"350px", alignItems:"center", justifyContent:"center", py:{md:4, xs:1}}}>
                    <Stack sx={{position:"relative", width:{md:"848px", xs:"350px"}, height:{md:"300px", xs:"237px"}, alignItems:"center",justifyContent:"center", p:{md:2, xs:0},backgroundColor:"#FFFFFF", border:"0px, 3px, 0px, 0px solid #0085FF", boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", borderRadius:"8px", mt:{xs:4}, borderRight:"3px solid #0085FF"}}>
                        <Stack sx={{width:{md:"567px", xs:"312px"}, py:{md:3, xs:1}}}>
                            <Typography sx={{fontSize:{md:"26px", xs:"16px"}, fontWeight:"600", lineHeight:{md:"40px", xs:"24px"}, textAlign:"justify", color:"#1A1A1A"}}>A product like Avocado is fundamental, practically 90% of deals are closed on WhatsApp thanks to the Avocado platform.</Typography>
                            <Stack>
                                <Typography sx={{fontSize:{md:"20px",xs:"12px"}, fontWeight:"600", color:"#1A1A1A"}}>Courtney Henry</Typography>
                                <Typography sx={{fontSize:{md:"14px", xs:"10px"}, fontWeight:"400", color:"#1A1A1A"}}>CEO, Company</Typography>
                            </Stack>
                        </Stack>
                        <Stack sx={{position:"absolute", width:{md:"150px", xs:"75px"}, height:{md:"150px", xs:"75px"}, alignItems:"center", justifyContent:"center", left:{md:"-75px"},top:{md:"90px",xs:"-40px"}, borderLeft:"3px solid #0085FF", borderRadius:"8px", boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", backgroundColor:"#FFFFFF"}}>
                        <img width={isMobile? "64px": "129px"} height={isMobile? "51px" :"102px"} src={getAssetUrl('logos/patchi-logo.png')} alt="no data icon"/>
                    </Stack>
                    </Stack>    
                </Stack>
                <Stack sx={{height:"350px", alignItems:"center", justifyContent:"center", py:{md:4, xs:1}}}>
                    <Stack sx={{position:"relative", width:{md:"848px", xs:"350px"}, height:{md:"300px", xs:"237px"}, alignItems:"center",justifyContent:"center", p:{md:2, xs:0},backgroundColor:"#FFFFFF",  borderRight:"3px solid #0085FF", boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", borderRadius:"8px", mt:{xs:4}}}>
                        <Stack sx={{width:{md:"567px", xs:"312px"}, py:{md:3, xs:1}}}>
                            <Typography sx={{fontSize:{md:"26px", xs:"16px"}, fontWeight:"600", lineHeight:{md:"40px", xs:"24px"}, textAlign:"justify", color:"#1A1A1A"}}>A product like Avocado is fundamental, practically 90% of deals are closed on WhatsApp thanks to the Avocado platform.</Typography>
                            <Stack>
                                <Typography sx={{fontSize:{md:"20px",xs:"12px"}, fontWeight:"600", color:"#1A1A1A"}}>Courtney Henry</Typography>
                                <Typography sx={{fontSize:{md:"14px", xs:"10px"}, fontWeight:"400", color:"#1A1A1A"}}>CEO, Company</Typography>
                            </Stack>
                        </Stack>
                        <Stack sx={{position:"absolute", width:{md:"150px", xs:"75px"}, height:{md:"150px", xs:"75px"}, alignItems:"center", justifyContent:"center", left:{md:"-75px"},top:{md:"90px",xs:"-40px"}, borderLeft:"3px solid #0085FF", borderRadius:"8px", boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", backgroundColor:"#FFFFFF"}}>
                        <img width={isMobile? "64px": "129px"} height={isMobile? "51px" :"102px"} src={getAssetUrl('logos/patchi-logo.png')} alt="no data icon"/>
                    </Stack>
                    </Stack>    
                </Stack>
            </Slider> 
            </Stack>
               
        </Container>
        
        
    </Box>
  )
}
