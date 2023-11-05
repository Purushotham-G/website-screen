import { Box, Button, Container, Stack, Typography } from '@mui/material'

//sliders
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


//responsive
import { useMediaQuery } from 'react-responsive';

//icons
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

//helpers
import { getAssetUrl } from '../../Assets/helper';

export const CustomerSlider = () => {

  const isMobile = useMediaQuery({ maxWidth: 786 });
  
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 7000,
        autoplaySpeed: 2000,
        };

  return (
    <Stack sx={{width:"100%",backgroundColor:"#FAFAFA", py:{md:8, xs:2}}}>
        <Stack sx={{height:{md:"auto",xs:"auto"}, alignItems:"center", justifyContent:"center", px:{xs:2}}}>
            <Stack sx={{alignItems:"center", justifyContent:"cente", px:{md:0, xs:2}}}>
                <Stack sx={{alignItems:"center", justifyContent:"center", textAlign:"center", px:{md:0, xs:1}}}>
                    <Typography sx={{fontSize:{md:"32px", xs:"24px"}, fontWeight:"600", textAlign:"center"}}>See What Are Our <span style={{color:"#0085FF"}}> Customers Saying </span></Typography>
                    <Typography sx={{fontSize:{md:"18px", xs:"16px"}, fontWeight:"400", textAlign:"center"}}>About business impact achieved, solutions delivered & more</Typography>
                </Stack>
            </Stack>            
        </Stack> 
        <Stack sx={{maxWidth:"1440px", p:{md:0, xs:3.2}}}>
            <Slider {...settings}>
                <Stack sx={{alignItems:"center", justifyContent:"center", py:{md:5,xs:6, sm:7}}}>
                    <Stack sx={{alignItems:"center", justifyContent:"center", px:{md:30, xs:3, sm:26, lg:35}}}>
                        <Stack sx={{height:"300px",position:"relative", justifyContent:"center", px:{md:10, xs:2, sm:10, lg:17}, boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", backgroundColor:"#ffffff", borderRadius:"8px", borderRight:{md:"3px solid #0085FF"}, borderBottom:{xs:"3px solid #0085FF", md:"none"}}}>
                            <Typography sx={{fontSize:{md:"22px", xs:"16px", sm:"21px", lg:"26px"}, fontWeight:"600", lineHeight:{md:"32pxpx", xs:"24px", sm:"28px", lg:"40px"}, textAlign:"justify", color:"#1A1A1A"}}>A product like Avocado is fundamental, practically 90% of deals are closed on WhatsApp thanks to the Avocado platform.</Typography>
                            <Stack sx={{mt:{md:2, xs:2, sm:2}}}>
                                <Typography sx={{fontSize:{md:"18px",xs:"12px", sm:"16px", lg:"20px"}, fontWeight:"600", color:"#1A1A1A"}}>Courtney Henry</Typography>
                                <Typography sx={{fontSize:{md:"12px", xs:"10px", sm:"12px", lg:"14px"}, fontWeight:"400", color:"#1A1A1A"}}>CEO, Company</Typography>
                            </Stack>
                            <Stack sx={{rotate:"revert-layer", position:"absolute", top:{md:"-0px", xs:"10px"}, right:{md:"10px", xs:"10px"}, width:{md:"50px"}, height:{md:"50px"}, alignItems:"center", justifyContent:"center"}}>
                                <FormatQuoteIcon sx={{transform: 'rotate(180deg)', fontSize:{md:"32px"}, color:"#0085FF"}} />
                            </Stack>
                            <Stack sx={{position:"absolute", width:{md:"150px", xs:"75px"}, height:{md:"150px", xs:"75px"}, alignItems:"center", justifyContent:"center",top:{md:"70px",xs:"-40px"}, left:{md:"-75px", xs:"100px"}, borderLeft:{md:"3px solid #0085FF"}, borderTop:{xs:"3px solid #0085FF", md:"none"}, borderRadius:"8px", boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", backgroundColor:"#FFFFFF"}}>
                                <img width={isMobile? "64px": "129px"} height={isMobile? "51px" :"102px"} src={getAssetUrl('logos/patchi-logo.png')} alt="no data icon"/>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack sx={{alignItems:"center", justifyContent:"center", py:{md:5,xs:6, sm:7}}}>
                    <Stack sx={{alignItems:"center", justifyContent:"center", px:{md:30, xs:3, sm:26, lg:35}}}>
                        <Stack sx={{height:"300px",position:"relative", justifyContent:"center", px:{md:10, xs:2, sm:10, lg:17}, boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", backgroundColor:"#ffffff", borderRadius:"8px", borderRight:{md:"3px solid #0085FF"}, borderBottom:{xs:"3px solid #0085FF", md:"none"}}}>
                            <Typography sx={{fontSize:{md:"22px", xs:"16px", sm:"21px", lg:"26px"}, fontWeight:"600", lineHeight:{md:"32pxpx", xs:"24px", sm:"28px", lg:"40px"}, textAlign:"justify", color:"#1A1A1A"}}>A product like Avocado is fundamental, practically 90% of deals are closed on WhatsApp thanks to the Avocado platform.</Typography>
                            <Stack sx={{mt:{md:2, xs:2, sm:2}}}>
                                <Typography sx={{fontSize:{md:"18px",xs:"12px", sm:"16px", lg:"20px"}, fontWeight:"600", color:"#1A1A1A"}}>Courtney Henry</Typography>
                                <Typography sx={{fontSize:{md:"12px", xs:"10px", sm:"12px", lg:"14px"}, fontWeight:"400", color:"#1A1A1A"}}>CEO, Company</Typography>
                            </Stack>
                            <Stack sx={{rotate:"revert-layer", position:"absolute", top:{md:"-0px", xs:"10px"}, right:{md:"10px", xs:"10px"}, width:{md:"50px"}, height:{md:"50px"}, alignItems:"center", justifyContent:"center"}}>
                                <FormatQuoteIcon sx={{transform: 'rotate(180deg)', fontSize:{md:"32px"}, color:"#0085FF"}} />
                            </Stack>
                            <Stack sx={{position:"absolute", width:{md:"150px", xs:"75px"}, height:{md:"150px", xs:"75px"}, alignItems:"center", justifyContent:"center",top:{md:"70px",xs:"-40px"}, left:{md:"-75px", xs:"100px"}, borderLeft:{md:"3px solid #0085FF"}, borderTop:{xs:"3px solid #0085FF", md:"none"}, borderRadius:"8px", boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", backgroundColor:"#FFFFFF"}}>
                                <img width={isMobile? "64px": "129px"} height={isMobile? "51px" :"102px"} src={getAssetUrl('logos/patchi-logo.png')} alt="no data icon"/>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack sx={{alignItems:"center", justifyContent:"center", py:{md:5,xs:6, sm:7}}}>
                    <Stack sx={{alignItems:"center", justifyContent:"center", px:{md:30, xs:3, sm:26, lg:35}}}>
                        <Stack sx={{height:"300px",position:"relative", justifyContent:"center", px:{md:10, xs:2, sm:10, lg:17}, boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", backgroundColor:"#ffffff", borderRadius:"8px", borderRight:{md:"3px solid #0085FF"}, borderBottom:{xs:"3px solid #0085FF", md:"none"}}}>
                            <Typography sx={{fontSize:{md:"22px", xs:"16px", sm:"21px", lg:"26px"}, fontWeight:"600", lineHeight:{md:"32pxpx", xs:"24px", sm:"28px", lg:"40px"}, textAlign:"justify", color:"#1A1A1A"}}>A product like Avocado is fundamental, practically 90% of deals are closed on WhatsApp thanks to the Avocado platform.</Typography>
                            <Stack sx={{mt:{md:2, xs:2, sm:2}}}>
                                <Typography sx={{fontSize:{md:"18px",xs:"12px", sm:"16px", lg:"20px"}, fontWeight:"600", color:"#1A1A1A"}}>Courtney Henry</Typography>
                                <Typography sx={{fontSize:{md:"12px", xs:"10px", sm:"12px", lg:"14px"}, fontWeight:"400", color:"#1A1A1A"}}>CEO, Company</Typography>
                            </Stack>
                            <Stack sx={{rotate:"revert-layer", position:"absolute", top:{md:"-0px", xs:"10px"}, right:{md:"10px", xs:"10px"}, width:{md:"50px"}, height:{md:"50px"}, alignItems:"center", justifyContent:"center"}}>
                                <FormatQuoteIcon sx={{transform: 'rotate(180deg)', fontSize:{md:"32px"}, color:"#0085FF"}} />
                            </Stack>
                            <Stack sx={{position:"absolute", width:{md:"150px", xs:"75px"}, height:{md:"150px", xs:"75px"}, alignItems:"center", justifyContent:"center",top:{md:"70px",xs:"-40px"}, left:{md:"-75px", xs:"100px"}, borderLeft:{md:"3px solid #0085FF"}, borderTop:{xs:"3px solid #0085FF", md:"none"}, borderRadius:"8px", boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", backgroundColor:"#FFFFFF"}}>
                                <img width={isMobile? "64px": "129px"} height={isMobile? "51px" :"102px"} src={getAssetUrl('logos/patchi-logo.png')} alt="no data icon"/>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                {/* <Stack sx={{alignItems:"center", justifyContent:"center", py:{md:5,xs:6, sm:7}}}>
                    <Stack sx={{alignItems:"center", justifyContent:"center", px:{md:35, xs:3, sm:30, lg:40}}}>
                        <Stack sx={{height:"300px",position:"relative", justifyContent:"center", px:{md:12, xs:2, sm:10, lg:17}, boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", backgroundColor:"#ffffff", borderRadius:"8px", borderRight:{md:"3px solid #0085FF"}, borderBottom:{xs:"3px solid #0085FF", md:"none"}}}>
                            <Typography sx={{fontSize:{md:"22px", xs:"16px", sm:"21px", lg:"26px"}, fontWeight:"600", lineHeight:{md:"32pxpx", xs:"24px", sm:"28px", lg:"40px"}, textAlign:"justify", color:"#1A1A1A"}}>A product like Avocado is fundamental, practically 90% of deals are closed on WhatsApp thanks to the Avocado platform.</Typography>
                            <Stack sx={{mt:{md:2, xs:2, sm:2}}}>
                                <Typography sx={{fontSize:{md:"18px",xs:"12px", sm:"16px", lg:"20px"}, fontWeight:"600", color:"#1A1A1A"}}>Courtney Henry</Typography>
                                <Typography sx={{fontSize:{md:"12px", xs:"10px", sm:"12px", lg:"14px"}, fontWeight:"400", color:"#1A1A1A"}}>CEO, Company</Typography>
                            </Stack>
                            <Stack sx={{rotate:"revert-layer", position:"absolute", top:{md:"-0px", xs:"10px"}, right:{md:"10px", xs:"10px"}, width:{md:"50px"}, height:{md:"50px"}, alignItems:"center", justifyContent:"center"}}>
                                <FormatQuoteIcon sx={{transform: 'rotate(180deg)', fontSize:{md:"32px"}, color:"#0085FF"}} />
                            </Stack>
                            <Stack sx={{position:"absolute", width:{md:"150px", xs:"75px"}, height:{md:"150px", xs:"75px"}, alignItems:"center", justifyContent:"center",top:{md:"70px",xs:"-40px"}, left:{md:"-75px", xs:"100px"}, borderLeft:{md:"3px solid #0085FF"}, borderTop:{xs:"3px solid #0085FF", md:"none"}, borderRadius:"8px", boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", backgroundColor:"#FFFFFF"}}>
                                <img width={isMobile? "64px": "129px"} height={isMobile? "51px" :"102px"} src={getAssetUrl('logos/patchi-logo.png')} alt="no data icon"/>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack sx={{alignItems:"center", justifyContent:"center", py:{md:5,xs:6, sm:7}}}>
                    <Stack sx={{alignItems:"center", justifyContent:"center", px:{md:35, xs:3, sm:30, lg:40}}}>
                        <Stack sx={{height:"300px",position:"relative", justifyContent:"center", px:{md:12, xs:2, sm:10, lg:17}, boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", backgroundColor:"#ffffff", borderRadius:"8px", borderRight:{md:"3px solid #0085FF"}, borderBottom:{xs:"3px solid #0085FF", md:"none"}}}>
                            <Typography sx={{fontSize:{md:"22px", xs:"16px", sm:"21px", lg:"26px"}, fontWeight:"600", lineHeight:{md:"32pxpx", xs:"24px", sm:"28px", lg:"40px"}, textAlign:"justify", color:"#1A1A1A"}}>A product like Avocado is fundamental, practically 90% of deals are closed on WhatsApp thanks to the Avocado platform.</Typography>
                            <Stack sx={{mt:{md:2, xs:2, sm:2}}}>
                                <Typography sx={{fontSize:{md:"18px",xs:"12px", sm:"16px", lg:"20px"}, fontWeight:"600", color:"#1A1A1A"}}>Courtney Henry</Typography>
                                <Typography sx={{fontSize:{md:"12px", xs:"10px", sm:"12px", lg:"14px"}, fontWeight:"400", color:"#1A1A1A"}}>CEO, Company</Typography>
                            </Stack>
                            <Stack sx={{rotate:"revert-layer", position:"absolute", top:{md:"-0px", xs:"10px"}, right:{md:"10px", xs:"10px"}, width:{md:"50px"}, height:{md:"50px"}, alignItems:"center", justifyContent:"center"}}>
                                <FormatQuoteIcon sx={{transform: 'rotate(180deg)', fontSize:{md:"32px"}, color:"#0085FF"}} />
                            </Stack>
                            <Stack sx={{position:"absolute", width:{md:"150px", xs:"75px"}, height:{md:"150px", xs:"75px"}, alignItems:"center", justifyContent:"center",top:{md:"70px",xs:"-40px"}, left:{md:"-75px", xs:"100px"}, borderLeft:{md:"3px solid #0085FF"}, borderTop:{xs:"3px solid #0085FF", md:"none"}, borderRadius:"8px", boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", backgroundColor:"#FFFFFF"}}>
                                <img width={isMobile? "64px": "129px"} height={isMobile? "51px" :"102px"} src={getAssetUrl('logos/patchi-logo.png')} alt="no data icon"/>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack> */}
                
                
    
            </Slider>
        </Stack>    
    </Stack>
  )
}