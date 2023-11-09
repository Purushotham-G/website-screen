import { Button, Stack, Typography, makeStyles, styled } from '@mui/material'

//responsive
import { useMediaQuery } from 'react-responsive';

//icons
import RemoveIcon from '@mui/icons-material/Remove';

//slider
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';

export const CustomRelationshipSlider = () => {;
    const isMobile = useMediaQuery({ maxWidth: 786 });

  const [currentSlide, setCurrentSlide] = useState<any>(0);

  const CustomDots = styled("div")({
    "& li button:before": {
      color: "blue", // Change the color to your desired color
    },
  });

  

    const settings: any = {
        dots: true,
        infinite: true,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 8000,
        // appendDots: (dots: JSX.Element[]) => (
        //   <div style={{ backgroundColor: '#e7e7e7', padding: '10px' }}>
        //     <ul style={{ margin: '0px' }}> 
        //       {dots.map((dot, index) => (
        //         <li
        //           key={index}
        //           style={{
        //             display: 'inline-block',
        //             marginRight: '10px',
        //             color: index === currentSlide ? '#0085FF' : '#808080', // Adjust the colors here
        //           }}
        //         >
        //           <button style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }} onClick={() => setCurrentSlide(index)}>
        //             {index + 1}
        //           </button>
        //         </li>
        //       ))}
        //     </ul>
        //   </div>
        // ),
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