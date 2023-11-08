import { Button, Stack, Typography } from '@mui/material'

//responsive
import { useMediaQuery } from 'react-responsive';

//icons
import RemoveIcon from '@mui/icons-material/Remove';

//slider
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const CustomRelationshipSlider = () => {;
    const isMobile = useMediaQuery({ maxWidth: 786 });

    const settings = {
        dots: true,
        infinite: true,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 9000,
        autoplaySpeed: 3000,
        // customPaging: () => {
        //   return <RemoveIcon />;
        // },
        };

  return (
    <>
        <Stack sx={{width:"100%"}}>
        <Slider {...settings} >
            <Stack>
                <Stack sx={{gap:{md:2, xs:1}}}>
                    <Typography sx={{fontWeight:"600", fontSize:{xs:"32px", md:"48px", sm:"28px"}, px:{md:6, xs:2}, lineHeight:{md:"58px", xs:"40px", sm:"42px"}}}>Supercharge Your Conversations With <span style={{color:"#0085FF"}}> WhatsApp </span> </Typography>
                    <Typography sx={{fontWeight:"400", fontSize:{md:"18px", xs:"16px", sm:"17px" }, px:{md:6, xs:2}, textAlign:"justify", lineHeight:{md:"28px", xs:"24px", sm:"26px"}}} >Make conversations faster & effective with fruitful resolutions. Let the Power of WhatsApp make work easy for you.</Typography>
                </Stack>
                <Stack sx={{flexDirection:"row", mt:2, ml:{md:6, xs:2}}}>
                  <Button variant='contained' disableElevation sx={{ fontWeight: 'bold', borderRadius: 2.5, backgroundColor:"#0085FF", boxShadow:"0px 16px 24px #0085FF29", textTransform:"none", color:"#FFFFFF", fontSize:{md:"18px", xs:"16px", sm:"17px"} }}>Know More</Button> 
                  <Typography></Typography>
                </Stack>
            </Stack>
            <Stack>
                <Stack sx={{gap:{md:2, xs:1}}}>
                    <Typography sx={{fontWeight:"600", fontSize:{xs:"32px", md:"48px", sm:"28px"}, px:{md:6, xs:2}, lineHeight:{md:"58px", xs:"40px", sm:"42px"}}}>Make Live Chat Strengthen <span style={{color:"#0085FF"}}> Customer Relationships </span> </Typography>
                    <Typography sx={{fontWeight:"400", fontSize:{md:"18px", xs:"16px", sm:"17px" }, px:{md:6, xs:2}, textAlign:"justify", lineHeight:{md:"28px", xs:"24px", sm:"26px"}}} >Engage your customers with resolutions & personalized journeys. Enabling you with high customer retention.</Typography>
                </Stack>
                <Stack sx={{flexDirection:"row", mt:2, ml:{md:6, xs:2}}}>
                  <Button variant='contained' disableElevation sx={{ fontWeight: 'bold', borderRadius: 2.5, backgroundColor:"#0085FF", boxShadow:"0px 16px 24px #0085FF29", textTransform:"none", color:"#FFFFFF", fontSize:{md:"18px", xs:"16px", sm:"17px"} }}>Know More</Button> 
                  <Typography></Typography>
                </Stack>
            </Stack>
            <Stack>
                <Stack sx={{gap:{md:2, xs:1}}}>
                    <Typography sx={{fontWeight:"600", fontSize:{xs:"32px", md:"48px", sm:"28px"}, px:{md:6, xs:2}, lineHeight:{md:"58px", xs:"40px", sm:"42px"}}}>Be Where Your Customers Are</Typography>
                    <Typography sx={{fontWeight:"400", fontSize:{md:"18px", xs:"16px", sm:"17px" }, px:{md:6, xs:2}, textAlign:"justify", lineHeight:{md:"28px", xs:"24px", sm:"26px"}}} >Make conversations faster & effective with fruitful resolutions. Let the Power of WhatsApp make work easy for you.</Typography>
                </Stack>
                <Stack sx={{flexDirection:"row", mt:2, ml:{md:6, xs:2}}}>
                  <Button variant='contained' disableElevation sx={{ fontWeight: 'bold', borderRadius: 2.5, backgroundColor:"#0085FF", boxShadow:"0px 16px 24px #0085FF29", textTransform:"none", color:"#FFFFFF", fontSize:{md:"18px", xs:"16px", sm:"17px"} }}>Know More</Button> 
                  <Typography></Typography>
                </Stack>
            </Stack>
        </Slider> 
        </Stack>
    </>
  )
}
