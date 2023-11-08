import { Box, Stack, Typography } from '@mui/material'

//helpers
import { getAssetUrl } from '../../Assets/helper';

//responsive
import { useMediaQuery } from 'react-responsive';

export const MultiPlatFormImages = () => {
    
  const isMobile = useMediaQuery({ maxWidth: 786 });
  return (
    <>
    <Stack sx={{alignItems:"center"}}>
        <Stack sx={{minWidth:{md:"436px", xs:"255px"}, height:{md:"436px", xs:"255px"}, border:"1px solid #00000040", position:"relative", borderRadius:"50%", alignItems:"center", justifyContent:"center"}}>
            <Stack sx={{minWidth:{md:"292px", xs:"170px"}, height:{md:"292px", xs:"170px"}, border:"1px solid #00000040", borderRadius:"50%", alignItems:"center", justifyContent:"center"}}>
              <Stack sx={{minWidth:{md:"200px", xs:"120px"}, height:{md:"200px", xs:"120px"}, border:"1px solid #00000040", borderRadius:"50%", alignItems:"center", justifyContent:"center", backgroundColor:"#FFFFFF"}}>
                <Typography sx={{color:"#0085FF", fontWeight:"600", fontSize:{md:"40px", xs:"22px"}}}>& more</Typography>
              </Stack>
            </Stack>
            <Stack sx={{position:"absolute", width:{md:"90px", xs:"60px"}, height:{md:"90px", xs:"60px"}, top:{md:"30px", xs:"20px"}, left:{md:"-0px", xs:"-0px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08)",}}>
                <img width={isMobile? "31px":"50x"} height={isMobile?"31px":"50px"} src={getAssetUrl('logos/zid-logo.png')} alt="no data icon"/>
            </Stack>
            <Stack sx={{position:"absolute", width:{md:"90px", xs:"60px"}, height:{md:"90px", xs:"60px"}, top:{md:"180px", xs:"110px"}, left:{md:"-40px", xs:"-22px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08) "}}>
                <img width={isMobile? "31px":"50x"} height={isMobile?"31px":"50px"} src={getAssetUrl('logos/salla-logo.png')} alt="no data icon"/>
            </Stack>
            <Stack sx={{position:"absolute", width:{md:"90px", xs:"60px"}, height:{md:"90px", xs:"60px"}, top:{md:"30px", xs:"20px"}, left:{md:"340px", xs:"210px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08) "}}>
                <img width={isMobile? "31px":"50x"} height={isMobile?"31px":"50px"} src={getAssetUrl('chat-gpt.png')} alt="no data icon"/>
            </Stack>
            <Stack sx={{position:"absolute", width:{md:"90px", xs:"60px"}, height:{md:"90px", xs:"60px"}, top:{md:"180px", xs:"110px"}, left:{md:"390px", xs:"220px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08) "}}>
                <img width={isMobile? "31px":"50x"} height={isMobile?"31px":"50px"} src={getAssetUrl('csml.png')} alt="no data icon"/>
            </Stack>
            <Stack sx={{position:"absolute", width:{md:"90px", xs:"60px"}, height:{md:"90px", xs:"60px"}, top:{md:"-40px", xs:"-30px"}, left:{md:"180px", xs:"110px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08) "}}>
                <img width={isMobile? "31px":"50x"} height={isMobile?"31px":"50px"} src={getAssetUrl('google-sheets.png')} alt="no data icon"/>
            </Stack>
            <Stack sx={{position:"absolute", width:{md:"90px", xs:"60px"}, height:{md:"90px", xs:"60px"}, bottom:{md:"-40px", xs:"-25px"}, left:{md:"180px", xs:"100px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08) "}}>
                <img width={isMobile? "31px":"50x"} height={isMobile?"31px":"50px"} src={getAssetUrl('zapier.png')} alt="no data icon"/>
            </Stack>
            <Stack sx={{position:"absolute", width:{md:"90px", xs:"60px"}, height:{md:"90px", xs:"60px"}, bottom:{md:"30px", xs:"0px"}, left:{md:"340px", xs:"190px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08) "}}>
                <img width={isMobile? "31px":"50x"} height={isMobile?"31px":"50px"} src={getAssetUrl('logos/shopify-logo.png')} alt="no data icon"/>
            </Stack>
            <Stack sx={{position:"absolute", width:{md:"90px", xs:"60px"}, height:{md:"90px", xs:"60px"}, bottom:{md:"30px", xs:"10px"}, left:{md:"-0px", xs:"10px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08) "}}>
                <img width={isMobile? "31px":"50x"} height={isMobile?"31px":"50px"} src={getAssetUrl('hub-spot.png')} alt="no data icon"/>
            </Stack>
            
        </Stack>        
    </Stack> 
    </>
  )
}
