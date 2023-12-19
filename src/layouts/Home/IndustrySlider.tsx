
// import { Stack, Typography,Button , Box, Grid, Container} from '@mui/material'
// import React, { useRef, useState } from 'react'
// //sliders
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';

// import { ArrowBack, ArrowForward } from '@mui/icons-material';
// import { TransformSlider } from './TransformSlider';
// import { RetailScreen } from '../IndustryScreen/RetailScreen';
// import { Fintech } from '../IndustryScreen/Fintech';
// import { Eductions } from '../IndustryScreen/Eductions';
// import { HealthCare } from '../IndustryScreen/HealthCare';
// import { TravelHospitality } from '../IndustryScreen/TravelHospitality';

// export const IndustrySlider = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     // const slideContent = ["First Slide", "Second Slide", "Third Slide", "Fourth Slide", "Fifth Slide", "Sixth Slide"];

//     const data = [
//                 "Retail",
//                 "Fintech",
//                 "Education",
//                 "Healthcare", 
//                 "Travel & Hospitality", 
//                 // "Travel & Hospitality",,
//                 // "Bulk"
//             ]
  
//     const renderContent = () => {
//       switch (currentSlide) {
//         case 0:
//           return <RetailScreen />;
//         case 1:
//           return <Fintech />;
//         case 2:
//           return <Eductions />;
//         case 3:
//           return <HealthCare />;
//         case 4:
//           return <TravelHospitality />;
//         case 5:
//           return <TransformSlider />;
//         case 6:
//           return <TransformSlider />;
//         default:
//           return null;
//       }
//     };

//     // const renderContent = () => {
//     //     return <Typography variant="h4">{slideContent[currentSlide]}</Typography>;
//     //   };

//     const settings = {
//       dots: false,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 5,
//       slidesToScroll: 1,
//       // arrows:false,
//       prevArrow: <Stack sx={{ position:"absolute", top:{md:"-5px", xs:"-13px"}, left:{md:"-50px", xs:"-18px"}}}><Stack sx={{width:{md:"30px", xs:"20px"}, height:{md:"30px", xs:"20px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center",  border:"1px solid #0085FF80"}}> < ArrowBack sx={{color:"#0085FF", fontSize:{md:"20px", xs:"16px"}}} /></Stack> </Stack>,
//       nextArrow: <Stack sx={{position:"absolute", top:{md:"-5px", xs:"-10px"}, right:{md:"-35px", xs:"-10px"}}}><Stack sx={{width:{md:"30px", xs:"20px"}, height:{md:"30px", xs:"20px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center",  border:"1px solid #0085FF80"}}> < ArrowForward sx={{color:"#0085FF", fontSize:{md:"20px", xs:"16px"}}} /></Stack></Stack>,
//       responsive: [
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 4,
//             slidesToScroll: 1,
//           }
//         },
//         {
//           breakpoint: 500,
//           settings: {
//             slidesToShow: 4,
//             slidesToScroll: 1,
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1,
//           }
//         },
//         {
//           breakpoint: 500,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1,
//           }
//         },
//         {
//           breakpoint: 400,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1,
//           }
//         },
//         {
//           breakpoint: 300,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1,
//           }
//         }
//       ]
//     };

//   return (

//     <Box sx={{alignItems:"center"}}>
//       <Stack sx={{ alignItems:"center", justifyContent:"center"}}>
//           <Stack sx={{maxWidth:{md:"1100px !important", xs:"285px"}, minWidth:{md:"1000px"},height:"auto", border:"1px solid #E1E1E1", justifyContent:"center", py:{md:2, xs:1.5}, px:{md:4, xs:1}, position:"relative", borderRadius:"8px", boxShadow:"0px 0px 25px #00000014"}}>
//             <Slider {...settings}>
//             {data.map((item, index) => (
//             <Stack sx={{alignItems:"center"}}>
//             <div
//               key={index}
//               style={{
//                 cursor: 'pointer',
//               }}
//               onClick={() => setCurrentSlide(index)}
//             >
//               <Stack sx={{justifyContent:"space-between"}}>
//                 <Stack sx={{ color: currentSlide === index ? '#0085FF' : '#1A1A1A', backgroundColor: currentSlide === index ? '#0085FF1A' : '#FAFAFA', borderRadius:"8px", py:{md:1, xs:0.5}, alignItems:"center", minWidth:"max-content" }}>
//                   <Typography sx={{fontSize:{md:"20px", xs:"10.5px", sm:"17px"}, fontWeight:"600", minWidth: 'max-content'}}>{item}</Typography>
//                 </Stack>   
//               </Stack>
//             </div>
//             </Stack>    
//           ))}
//             </Slider>
//           </Stack>
//         </Stack>
//         <Stack sx={{ height: 'auto', mb:{md:3, xs:2}, mt:{md:6, xs:2}, px:{md:7, xs:2, sm:5} }}>
//             <Stack style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{renderContent()}</Stack>
//         </Stack>
//     </Box>   
//   )
// }

import { Typography } from '@mui/material'
import React from 'react'
import Slider from 'react-slick'
import { ArrowBack, ArrowForward } from '@mui/icons-material';


export const IndustrySlider = () => {

  
const settings = {
  // Your slider settings here
  // ...

  // Custom arrow components
  // nextArrow: <NextArrow />,
  // prevArrow: <PrevArrow />,
};

const NextArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForward />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBack />
    </div>
  );
};

  return (
    <>
      <Slider {...settings}>
      {/* Your slider content */}
      <div>
        <>
          <Typography>fbhbv</Typography>
        </>
      </div>
      <div>
        <>
          <Typography>infuvlrbio</Typography>
        </>
      </div>
      {/* Add more slides as needed */}
    </Slider>
    </>
  )
}
