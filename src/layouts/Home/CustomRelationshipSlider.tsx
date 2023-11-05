import { Button, Stack, Typography } from '@mui/material'

//responsive
import { useMediaQuery } from 'react-responsive';

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
        };

  return (
    <>
        <Stack sx={{width:"100%"}}>
        <Slider {...settings} >
            <Stack>
                <Stack sx={{gap:{md:2, xs:1}}}>
                    <Typography sx={{fontWeight:"600", fontSize:{xs:"32px", md:"48px", sm:"28px"}, px:{md:6, xs:2}}}>Supercharge Your Conversations With <span style={{color:"#0085FF"}}> WhatsApp </span> </Typography>
                    <Typography sx={{fontWeight:"400", fontSize:{md:"18px", xs:"16px", sm:"17px" }, px:{md:6, xs:2}, textAlign:"justify"}} >Make conversations faster & effective with fruitful resolutions. Let the Power of WhatsApp make work easy for you.</Typography>
                </Stack>
                <Stack sx={{flexDirection:"row", mt:2, ml:{md:6, xs:2}}}>
                  <Button variant='contained' disableElevation sx={{ fontWeight: 'bold', borderRadius: 2.5, backgroundColor:"#0085FF", boxShadow:"0px 16px 24px #0085FF29", textTransform:"none", color:"#FFFFFF", fontSize:{md:"18px", xs:"16px", sm:"17px"} }}>Know More</Button> 
                  <Typography></Typography>
                </Stack>
            </Stack>
            <Stack>
                <Stack sx={{gap:{md:2, xs:1}}}>
                    <Typography sx={{fontWeight:"600", fontSize:{xs:"32px", md:"48px", sm:"28px"}, px:{md:6, xs:2}}}>Supercharge Your Conversations With <span style={{color:"#0085FF"}}> WhatsApp </span> </Typography>
                    <Typography sx={{fontWeight:"400", fontSize:{md:"18px", xs:"16px", sm:"17px" }, px:{md:6, xs:2}, textAlign:"justify"}} >Make conversations faster & effective with fruitful resolutions. Let the Power of WhatsApp make work easy for you.</Typography>
                </Stack>
                <Stack sx={{flexDirection:"row", mt:2, ml:{md:6, xs:2}}}>
                  <Button variant='contained' disableElevation sx={{ fontWeight: 'bold', borderRadius: 2.5, backgroundColor:"#0085FF", boxShadow:"0px 16px 24px #0085FF29", textTransform:"none", color:"#FFFFFF", fontSize:{md:"18px", xs:"16px", sm:"17px"} }}>Know More</Button> 
                  <Typography></Typography>
                </Stack>
            </Stack>
            <Stack>
                <Stack sx={{gap:{md:2, xs:1}}}>
                    <Typography sx={{fontWeight:"600", fontSize:{xs:"32px", md:"48px", sm:"28px"}, px:{md:6, xs:2}}}>Supercharge Your Conversations With <span style={{color:"#0085FF"}}> WhatsApp </span> </Typography>
                    <Typography sx={{fontWeight:"400", fontSize:{md:"18px", xs:"16px", sm:"17px" }, px:{md:6, xs:2}, textAlign:"justify"}} >Make conversations faster & effective with fruitful resolutions. Let the Power of WhatsApp make work easy for you.</Typography>
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
