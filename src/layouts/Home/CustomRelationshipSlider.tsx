import { Button, Stack, Typography } from '@mui/material'

//responsive
import { useMediaQuery } from 'react-responsive';
//slider
import Slider from 'react-slick';

export const CustomRelationshipSlider = () => {;
    const isMobile = useMediaQuery({ maxWidth: 786 });

    const settings = {
        dots: true,
        infinite: true,
        Arrow:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        };

  return (
    <>
        <Stack sx={{maxWidth:"1440px !important"}}>
        <Slider {...settings} >
            <Stack sx={{width:{md:"554px", xs:"326px"}}}>
                <Stack sx={{width:{md:"554px", xs:"326px"}}}>
                    <Typography sx={{fontWeight:"600", fontSize:{xs:"32px", md:"48px"}}}>Supercharge Your Conversations With <span style={{color:"#0085FF"}}> WhatsApp </span> </Typography>
                </Stack>
                <Stack sx={{width:{md:"554px", xs:"326px"}}}>
                    <Typography sx={{fontWeight:"400", fontSize:{xs:"18px"}}} >Make conversations faster & effective with fruitful resolutions. Let the Power of WhatsApp make work easy for you.</Typography>
                </Stack>
                <Stack sx={{flexDirection:"row", mt:2}}>
                  <Button variant='contained' disableElevation sx={{ fontWeight: 'bold', borderRadius: 2.5, backgroundColor:"#0085FF", boxShadow:"0px 16px 24px #0085FF29" }}>Know More</Button> 
                  <Typography></Typography>
                </Stack>
            </Stack>
            <Stack sx={{width:{md:"554px", xs:"326px"}}}>
                <Stack sx={{width:{md:"554px", xs:"326px"}}}>
                    <Typography sx={{fontWeight:"600", fontSize:{xs:"32px", md:"48px"}}}>Make Live Chat Strengthen  <span style={{color:"#0085FF"}}> Customer Relationships </span></Typography>
                </Stack>
                <Stack sx={{width:{md:"554px", xs:"326px"}}}>
                    <Typography sx={{fontWeight:"400", fontSize:{xs:"18px"}}} >Engage your customers with resolutions & personalized journeys. Enabling you with high customer retention.</Typography>
                </Stack>
                <Stack sx={{flexDirection:"row", mt:2}}>
                  <Button variant='contained' disableElevation sx={{ fontWeight: 'bold', borderRadius: 2.5, backgroundColor:"#0085FF", boxShadow:"0px 16px 24px #0085FF29" }}>Know More</Button> 
                  <Typography></Typography>
                </Stack>
            </Stack>
            <Stack sx={{width:{md:"554px", xs:"326px"}}}>
                <Stack sx={{width:{md:"554px", xs:"326px"}}}>
                    <Typography sx={{fontWeight:"600", fontSize:{xs:"32px", md:"48px"}}}>Be Where Your Customers Are </Typography>
                </Stack>
                <Stack sx={{width:{md:"554px", xs:"326px"}}}>
                    <Typography sx={{fontWeight:"400", fontSize:{xs:"18px"}}} >Connect your business with the world's most popular messaging platform. Our seamless integration ensures you're always in touch, no matter the scale of your operations.</Typography>
                </Stack>
                <Stack sx={{flexDirection:"row", mt:2}}>
                  <Button variant='contained' disableElevation sx={{ fontWeight: 'bold', borderRadius: 2.5, backgroundColor:"#0085FF", boxShadow:"0px 16px 24px #0085FF29" }}>Know More</Button> 
                  <Typography></Typography>
                </Stack>
            </Stack>
        </Slider> 
        </Stack>
    </>
  )
}
