
import { Box, Button, Container, Stack, Typography } from '@mui/material'

//sliders
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

//helpers
// import { getAssetUrl } from '../../helpers/assets';

//responsive
import { useMediaQuery } from 'react-responsive';

//icons
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { getAssetUrl } from '../../Assets/helper';

export const CustomerSlider = () => {

  const isMobile = useMediaQuery({ maxWidth: 786 });
  
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 8000,
        };

  return (
    <Stack sx={{width:"100%",backgroundColor:"#FAFAFA", py:{md:8, xs:2}, gap:{md:3, xs:2}}}>
        <Stack sx={{height:{md:"auto",xs:"auto"}, alignItems:"center", justifyContent:"center", px:{xs:6}}}>
            <Stack sx={{alignItems:"center", justifyContent:"center"}}>
                <Stack sx={{alignItems:"center", justifyContent:"center", textAlign:"center"}}>
                    <Typography sx={{fontSize:{md:"32px", xs:"24px"}, fontWeight:"600"}}>See What Are Our <span style={{color:"#0085FF"}}> Customers Saying </span></Typography>
                    <Typography sx={{fontSize:{md:"18px", xs:"16px"}, fontWeight:"400"}}>About business impact achieved, solutions delivered & more</Typography>
                </Stack>
            </Stack>            
        </Stack> 
        <Stack sx={{pb:2}}>
            <Slider {...settings} className='silder-dots'>
                <Stack sx={{alignItems:"center", justifyContent:"center", py:{md:5,xs:6}}}>
                    <Stack sx={{alignItems:"center", justifyContent:"center", px:{md:35, sm:30, xs:2}}}>
                        <Stack sx={{height:"300px",position:"relative", justifyContent:"center", px:{md:14, xs:2}, boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", backgroundColor:"#ffffff", borderRadius:"8px", borderRight:{md:"3px solid #0085FF"}, borderBottom:{xs:"3px solid #0085FF", md:"none"}}}>
                            <Typography sx={{fontSize:{md:"26px", xs:"16px", sm:"21px"}, fontWeight:"600", lineHeight:{md:"40px", xs:"24px", sm:"28px"}, textAlign:"justify", color:"#1A1A1A"}}>A product like Avocado is fundamental, practically 90% of deals are closed on WhatsApp thanks to the Avocado platform.</Typography>
                            <Stack sx={{mt:{md:2, xs:2, sm:2}}}>
                                <Typography sx={{fontSize:{md:"20px",xs:"12px", sm:"16px"}, fontWeight:"600", color:"#1A1A1A"}}>Courtney Henry</Typography>
                                <Typography sx={{fontSize:{md:"14px", xs:"10px", sm:"12px"}, fontWeight:"400", color:"#1A1A1A"}}>CEO, Company</Typography>
                            </Stack>
                            <Stack sx={{rotate:"revert-layer", position:"absolute", top:{md:"-0px", xs:"10px"}, right:{md:"10px", xs:"20px"}, width:{md:"50px"}, height:{md:"50px"}, alignItems:"center", justifyContent:"center"}}>
                                <FormatQuoteIcon sx={{transform: 'rotate(180deg)', fontSize:{md:"32px"}, color:"#0085FF"}} />
                            </Stack>
                            <Stack sx={{position:"absolute", width:{md:"150px", xs:"75px"}, height:{md:"150px", xs:"75px"}, alignItems:"center", justifyContent:"center",top:{md:"70px",xs:"-40px"}, left:{md:"-75px", xs:"135px"}, borderLeft:{md:"3px solid #0085FF"}, borderTop:{xs:"3px solid #0085FF", md:"none"}, borderRadius:"8px", boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", backgroundColor:"#FFFFFF"}}>
                                <img width={isMobile? "64px": "129px"} height={isMobile? "51px" :"102px"} src={getAssetUrl('logos/patchi-logo.png')} alt="no data icon"/>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack sx={{alignItems:"center", justifyContent:"center", py:{md:5,xs:6}}}>
                    <Stack sx={{alignItems:"center", justifyContent:"center", px:{md:35, sm:30, xs:2}}}>
                        <Stack sx={{height:"300px",position:"relative", justifyContent:"center", px:{md:14, xs:2}, boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", backgroundColor:"#ffffff", borderRadius:"8px", borderRight:{md:"3px solid #0085FF"}, borderBottom:{xs:"3px solid #0085FF", md:"none"}}}>
                            <Typography sx={{fontSize:{md:"26px", xs:"16px", sm:"21px"}, fontWeight:"600", lineHeight:{md:"40px", xs:"24px", sm:"28px"}, textAlign:"justify", color:"#1A1A1A"}}>A product like Avocado is fundamental, practically 90% of deals are closed on WhatsApp thanks to the Avocado platform.</Typography>
                            <Stack sx={{mt:{md:2, xs:2, sm:2}}}>
                                <Typography sx={{fontSize:{md:"20px",xs:"12px", sm:"16px"}, fontWeight:"600", color:"#1A1A1A"}}>Courtney Henry</Typography>
                                <Typography sx={{fontSize:{md:"14px", xs:"10px", sm:"12px"}, fontWeight:"400", color:"#1A1A1A"}}>CEO, Company</Typography>
                            </Stack>
                            <Stack sx={{rotate:"revert-layer", position:"absolute", top:{md:"-0px", xs:"10px"}, right:{md:"10px", xs:"20px"}, width:{md:"50px"}, height:{md:"50px"}, alignItems:"center", justifyContent:"center"}}>
                                <FormatQuoteIcon sx={{transform: 'rotate(180deg)', fontSize:{md:"32px"}, color:"#0085FF"}} />
                            </Stack>
                            <Stack sx={{position:"absolute", width:{md:"150px", xs:"75px"}, height:{md:"150px", xs:"75px"}, alignItems:"center", justifyContent:"center",top:{md:"70px",xs:"-40px"}, left:{md:"-75px", xs:"135px"}, borderLeft:{md:"3px solid #0085FF"}, borderTop:{xs:"3px solid #0085FF", md:"none"}, borderRadius:"8px", boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", backgroundColor:"#FFFFFF"}}>
                                <img width={isMobile? "64px": "129px"} height={isMobile? "51px" :"102px"} src={getAssetUrl('logos/patchi-logo.png')} alt="no data icon"/>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack sx={{alignItems:"center", justifyContent:"center", py:{md:5,xs:6}}}>
                    <Stack sx={{alignItems:"center", justifyContent:"center", px:{md:35, sm:30, xs:2}}}>
                        <Stack sx={{height:"300px",position:"relative", justifyContent:"center", px:{md:14, xs:2}, boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", backgroundColor:"#ffffff", borderRadius:"8px", borderRight:{md:"3px solid #0085FF"}, borderBottom:{xs:"3px solid #0085FF", md:"none"}}}>
                            <Typography sx={{fontSize:{md:"26px", xs:"16px", sm:"21px"}, fontWeight:"600", lineHeight:{md:"40px", xs:"24px", sm:"28px"}, textAlign:"justify", color:"#1A1A1A"}}>A product like Avocado is fundamental, practically 90% of deals are closed on WhatsApp thanks to the Avocado platform.</Typography>
                            <Stack sx={{mt:{md:2, xs:2, sm:2}}}>
                                <Typography sx={{fontSize:{md:"20px",xs:"12px", sm:"16px"}, fontWeight:"600", color:"#1A1A1A"}}>Courtney Henry</Typography>
                                <Typography sx={{fontSize:{md:"14px", xs:"10px", sm:"12px"}, fontWeight:"400", color:"#1A1A1A"}}>CEO, Company</Typography>
                            </Stack>
                            <Stack sx={{rotate:"revert-layer", position:"absolute", top:{md:"-0px", xs:"10px"}, right:{md:"10px", xs:"20px"}, width:{md:"50px"}, height:{md:"50px"}, alignItems:"center", justifyContent:"center"}}>
                                <FormatQuoteIcon sx={{transform: 'rotate(180deg)', fontSize:{md:"32px"}, color:"#0085FF"}} />
                            </Stack>
                            <Stack sx={{position:"absolute", width:{md:"150px", xs:"75px"}, height:{md:"150px", xs:"75px"}, alignItems:"center", justifyContent:"center",top:{md:"70px",xs:"-40px"}, left:{md:"-75px", xs:"135px"}, borderLeft:{md:"3px solid #0085FF"}, borderTop:{xs:"3px solid #0085FF", md:"none"}, borderRadius:"8px", boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", backgroundColor:"#FFFFFF"}}>
                                <img width={isMobile? "64px": "129px"} height={isMobile? "51px" :"102px"} src={getAssetUrl('logos/patchi-logo.png')} alt="no data icon"/>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
    
            </Slider>
        </Stack>    
    </Stack>
  )
}