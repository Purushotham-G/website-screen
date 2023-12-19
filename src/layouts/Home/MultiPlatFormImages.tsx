// import { Box, Stack, Typography } from '@mui/material'

// //helpers
// import { getAssetUrl } from '../../Assets/helper';

// //responsive
// import { useMediaQuery } from 'react-responsive';

// export const MultiPlatFormImages = () => {
    
//   const isMobile = useMediaQuery({ maxWidth: 786 });
//   return (
//     <>
//     <Stack sx={{width:"100%", alignItems:"center", height:"auto"}}>
//         <Stack sx={{width:{md:"70%",xs:"65%"}, height:{md:"436px", xs:"280px"}, border:"1px solid #00000040", position:"relative", borderRadius:"50%", alignItems:"center", justifyContent:"center"}}>
//             <Stack sx={{width:{md:"290px", xs:"170px"}, height:{md:"290px", xs:"170px"}, border:"1px solid #00000040", borderRadius:"50%", alignItems:"center", justifyContent:"center"}}>
//               <Stack sx={{width:{md:"200px", xs:"120px"}, height:{md:"200px", xs:"120px"}, border:"1px solid #00000040", borderRadius:"50%", alignItems:"center", justifyContent:"center", backgroundColor:"#FFFFFF"}}>
//                 <Typography sx={{color:"#0085FF", fontWeight:"600", fontSize:{md:"40px", xs:"22px"}}}>& more</Typography>
//               </Stack>
//             </Stack>
//         <Stack sx={{position:"absolute",width:{md:"8%", xs:"15%"}, height:"auto", top:{md:"0px", xs:"0px"}, left:{md:"280px", xs:"170px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08) "}}>
//             <Stack sx={{p:{md:2, xs:1.5}}}>
//                 <img width="100%" height="auto" src={getAssetUrl('logos/zid-logo.png')} alt="no data icon"/>
//             </Stack>    
//         </Stack>  
//         <Stack sx={{position:"absolute",width:{md:"8%", xs:"15%"}, height:"auto", top:{md:"70px", xs:"50px"}, left:{md:"110px", xs:"70px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08) "}}>
//             <Stack sx={{p:{md:2, xs:1.5}}}>
//                 <img width="100%" height="auto" src={getAssetUrl('logos/salla-logo.png')} alt="no data icon"/>
//             </Stack>    
//         </Stack>
//         <Stack sx={{position:"absolute",width:{md:"8%", xs:"15%"}, height:"auto", top:{md:"70px", xs:"40px"}, right:{md:"800px", xs:"80px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08) "}}>
//             <Stack sx={{p:{md:2, xs:1.5}}}>
//                 <img width="100%" height="auto" src={getAssetUrl('chat-gpt.png')} alt="no data icon"/>
//             </Stack>    
//         </Stack>
//         <Stack sx={{position:"absolute",width:{md:"8%", xs:"15%"}, height:"auto", top:{md:"220px", xs:"130px"}, right:{md:"730px", xs:"50px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08) "}}>
//             <Stack sx={{p:{md:2, xs:1.5}}}>
//                 <img width="100%" height="auto" src={getAssetUrl('csml.png')} alt="no data icon"/>
//             </Stack>    
//         </Stack>
//         <Stack sx={{position:"absolute",width:{md:"8%", xs:"15%"}, height:"auto", top:{md:"220px", xs:"130px"}, left:{md:"50px", xs:"40px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08) "}}>
//             <Stack sx={{p:{md:2, xs:1.5}}}>
//                 <img width="100%" height="auto" src={getAssetUrl('google-sheets.png')} alt="no data icon"/>
//             </Stack>    
//         </Stack>
//         <Stack sx={{position:"absolute",width:{md:"8%", xs:"15%"}, height:"auto", top:{md:"370px", xs:"230px"}, right:{md:"790px", xs:"80px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08) "}}>
//             <Stack sx={{p:{md:2, xs:1.5}}}>
//                 <img width="100%" height="auto" src={getAssetUrl('zapier.png')} alt="no data icon"/>
//             </Stack>    
//         </Stack>
//         <Stack sx={{position:"absolute",width:{md:"8%", xs:"15%"}, height:"auto", top:{md:"430px", xs:"270px"}, left:{md:"290px", xs:"180px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08) "}}>
//             <Stack sx={{p:{md:2, xs:1.5}}}>
//                 <img width="100%" height="auto" src={getAssetUrl('logos/shopify-logo.png')} alt="no data icon"/>
//             </Stack>    
//         </Stack>
//         <Stack sx={{position:"absolute",width:{md:"8%", xs:"15%"}, height:"auto", top:{md:"370px", xs:"230px"}, left:{md:"120px", xs:"80px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08) "}}>
//             <Stack sx={{p:{md:2, xs:1}}}>
//                 <img width="100%" height="auto" src={getAssetUrl('hub-spot.png')} alt="no data icon"/>
//             </Stack>    
//         </Stack>
//         </Stack>
//     </Stack> 
//     </>
//   )
// }

import { Box, Stack, Typography } from '@mui/material'

//helpers
import { getAssetUrl } from '../../Assets/helper';

//responsive
import { useMediaQuery } from 'react-responsive';

export const MultiPlatFormImages = () => {
    
  const isMobile = useMediaQuery({ maxWidth: 786 });
  return (
    <>
      <Stack >
      <Stack sx={{width:"100%", alignItems:"center"}}>
        <Stack sx={{width:{md:"70%", xs:"68%"}, height:{md:"436px", xs:"280px"}, border:"1px solid #00000040", position:"relative", borderRadius:"50%", alignItems:"center", justifyContent:"center"}}>
            <Stack sx={{width:{md:"292px", xs:"189px"}, height:{md:"292px", xs:"189px"}, border:"1px solid #00000040", borderRadius:"50%", alignItems:"center", justifyContent:"center"}}>
              <Stack sx={{width:{md:"200px", xs:"129px"}, height:{md:"200px", xs:"129px"}, border:"1px solid #00000040", borderRadius:"50%", alignItems:"center", justifyContent:"center", backgroundColor:"#FFFFFF"}}>
                <Typography sx={{color:"#0085FF", fontWeight:"600", fontSize:{md:"40px", xs:"22px"}}}>& more</Typography>
              </Stack>
            </Stack>
            <Stack sx={{position:"absolute", width:{md:"90px", xs:"62px"}, height:{md:"90px", xs:"62px"}, top:{md:"30px", xs:"10px"}, left:{md:"-0px", xs:"10px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08) "}}>
                <img width={isMobile? "31px":"50x"} height={isMobile?"31px":"50px"} src={getAssetUrl('logos/zid-logo.png')} alt="no data icon"/>
            </Stack>
            <Stack sx={{position:"absolute", width:{md:"90px", xs:"62px"}, height:{md:"90px", xs:"62px"}, top:{md:"180px", xs:"110px"}, left:{md:"-40px", xs:"-30px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08) "}}>
                <img width={isMobile? "31px":"50x"} height={isMobile?"31px":"50px"} src={getAssetUrl('logos/salla-logo.png')} alt="no data icon"/>
            </Stack>
            <Stack sx={{position:"absolute", width:{md:"90px", xs:"62px"}, height:{md:"90px", xs:"62px"}, top:{md:"30px", xs:"10px"}, right:{md:"10px", xs:"20px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08) "}}>
                <img width={isMobile? "31px":"50x"} height={isMobile?"31px":"50px"} src={getAssetUrl('chat-gpt.png')} alt="no data icon"/>
            </Stack>
            <Stack sx={{position:"absolute", width:{md:"90px", xs:"62px"}, height:{md:"90px", xs:"62px"}, top:{md:"180px", xs:"110px"}, right:{md:"-40px", xs:"-30px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08) "}}>
                <img width={isMobile? "31px":"50x"} height={isMobile?"31px":"50px"} src={getAssetUrl('csml.png')} alt="no data icon"/>
            </Stack>
            <Stack sx={{position:"absolute", width:{md:"90px", xs:"62px"}, height:{md:"90px", xs:"62px"}, top:{md:"-40px", xs:"-30px"}, left:{md:"190px", xs:"110px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08) "}}>
                <img width={isMobile? "31px":"50x"} height={isMobile?"31px":"50px"} src={getAssetUrl('google-sheets.png')} alt="no data icon"/>
            </Stack>
            <Stack sx={{position:"absolute", width:{md:"90px", xs:"62px"}, height:{md:"90px", xs:"62px"}, bottom:{md:"-40px", xs:"-25px"}, left:{md:"180px", xs:"110px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08) "}}>
                <img width={isMobile? "31px":"50x"} height={isMobile?"31px":"50px"} src={getAssetUrl('zapier.png')} alt="no data icon"/>
            </Stack>
            <Stack sx={{position:"absolute", width:{md:"90px", xs:"62px"}, height:{md:"90px", xs:"62px"}, bottom:{md:"30px", xs:"15px"}, right:{md:"20px", xs:"10px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08) "}}>
                <img width={isMobile? "31px":"50x"} height={isMobile?"31px":"50px"} src={getAssetUrl('logos/shopify-logo.png')} alt="no data icon"/>
            </Stack>
            <Stack sx={{position:"absolute", width:{md:"90px", xs:"62px"}, height:{md:"90px", xs:"62px"}, bottom:{md:"30px", xs:"10px"}, left:{md:"-0px", xs:"10px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08) "}}>
                <img width={isMobile? "31px":"50x"} height={isMobile?"31px":"50px"} src={getAssetUrl('hub-spot.png')} alt="no data icon"/>
            </Stack>
            
        </Stack>   
    </Stack>
      </Stack>  
    </>
  )
}

