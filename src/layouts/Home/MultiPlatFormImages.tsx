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
      <Stack sx={{alignItems:"center", p:{md:3}}}>
        <Stack sx={{width:{md:"436px", xs:"281px"}, height:{md:"436px", xs:"281px"}, border:"1px solid #00000040", position:"relative", borderRadius:"50%", alignItems:"center", justifyContent:"center"}}>
            <Stack sx={{width:{md:"292px", xs:"189px"}, height:{md:"292px", xs:"189px"}, border:"1px solid #00000040", borderRadius:"50%", alignItems:"center", justifyContent:"center"}}>
              <Stack sx={{width:{md:"200px", xs:"129px"}, height:{md:"200px", xs:"129px"}, border:"1px solid #00000040", borderRadius:"50%", alignItems:"center", justifyContent:"center", backgroundColor:"#FFFFFF"}}>
                <Typography sx={{color:"#0085FF", fontWeight:"600", fontSize:{md:"40px", xs:"22px"}}}>& more</Typography>
              </Stack>
            </Stack>
            <Stack sx={{position:"absolute", width:{md:"90px", xs:"62px"}, height:{md:"90px", xs:"62px"}, top:{md:"30px", xs:"20px"}, left:{md:"-0px", xs:"-0px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08) "}}>
                <img width={isMobile? "31px":"50x"} height={isMobile?"31px":"50px"} src={getAssetUrl('logos/zid-logo.png')} alt="no data icon"/>
            </Stack>
            <Stack sx={{position:"absolute", width:{md:"90px", xs:"62px"}, height:{md:"90px", xs:"62px"}, top:{md:"180px", xs:"120px"}, left:{md:"-40px", xs:"-30px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08) "}}>
                <img width={isMobile? "31px":"50x"} height={isMobile?"31px":"50px"} src={getAssetUrl('logos/salla-logo.png')} alt="no data icon"/>
            </Stack>
            <Stack sx={{position:"absolute", width:{md:"90px", xs:"62px"}, height:{md:"90px", xs:"62px"}, top:{md:"30px", xs:"20px"}, left:{md:"340px", xs:"220px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08) "}}>
                <img width={isMobile? "31px":"50x"} height={isMobile?"31px":"50px"} src={getAssetUrl('chat-gpt.png')} alt="no data icon"/>
            </Stack>
            <Stack sx={{position:"absolute", width:{md:"90px", xs:"62px"}, height:{md:"90px", xs:"62px"}, top:{md:"180px", xs:"110px"}, left:{md:"390px", xs:"250px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08) "}}>
                <img width={isMobile? "31px":"50x"} height={isMobile?"31px":"50px"} src={getAssetUrl('csml.png')} alt="no data icon"/>
            </Stack>
            <Stack sx={{position:"absolute", width:{md:"90px", xs:"62px"}, height:{md:"90px", xs:"62px"}, top:{md:"-40px", xs:"-30px"}, left:{md:"180px", xs:"110px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08) "}}>
                <img width={isMobile? "31px":"50x"} height={isMobile?"31px":"50px"} src={getAssetUrl('google-sheets.png')} alt="no data icon"/>
            </Stack>
            <Stack sx={{position:"absolute", width:{md:"90px", xs:"62px"}, height:{md:"90px", xs:"62px"}, bottom:{md:"-40px", xs:"-25px"}, left:{md:"180px", xs:"110px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08) "}}>
                <img width={isMobile? "31px":"50x"} height={isMobile?"31px":"50px"} src={getAssetUrl('zapier.png')} alt="no data icon"/>
            </Stack>
            <Stack sx={{position:"absolute", width:{md:"90px", xs:"62px"}, height:{md:"90px", xs:"62px"}, bottom:{md:"30px", xs:"15px"}, left:{md:"340px", xs:"215px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08) "}}>
                <img width={isMobile? "31px":"50x"} height={isMobile?"31px":"50px"} src={getAssetUrl('logos/shopify-logo.png')} alt="no data icon"/>
            </Stack>
            <Stack sx={{position:"absolute", width:{md:"90px", xs:"62px"}, height:{md:"90px", xs:"62px"}, bottom:{md:"30px", xs:"10px"}, left:{md:"-0px", xs:"10px"}, borderRadius:"50%", backgroundColor:"#FFFFFF", alignItems:"center", justifyContent:"center", boxShadow:"0px 24px 64px rgba(38, 38, 38, 0.08) "}}>
                <img width={isMobile? "31px":"50x"} height={isMobile?"31px":"50px"} src={getAssetUrl('hub-spot.png')} alt="no data icon"/>
            </Stack>
            
        </Stack>

        {/* <Stack sx={{position:"relative", }}>
            <img width={isMobile? "267px": "614px" } height={isMobile? "190px": "437px"} src={getAssetUrl('screenshots/apps.png')} alt="no data icon"/>
        <Stack sx={{position:"absolute", top:{md:"-35px", xs:"-15px"}, left:{md:"123px", xs:"55px"}}}>
          <img width={isMobile?"152px":"350px"} height={isMobile?"93px": "216px"} src={getAssetUrl('screenshots/quick-replies.png')} alt="no data icon"/>
        </Stack>
        <Stack sx={{position:"absolute", bottom:{md:"-105px",xs:"-45px"}, left:{md:"-140px", xs:"-40px"}}}>
          <img width={isMobile?"152px":"350px"} height={isMobile?"94px": "216px"}  src={getAssetUrl('screenshots/chatgpt.png')} alt="no data icon"/>
        </Stack>
        <Stack sx={{position:"absolute", bottom:{md:"-35px", xs:"-15px"}, right:"35px"}}>
          <img width={isMobile?"152px":"350px"} height={isMobile?"94x": "216px"}  src={getAssetUrl('screenshots/broadcast.png')} alt="no data icon"/>
        </Stack> */}
        
    </Stack>
        {/* <Stack sx={{width:"774px", height:"790px", borderRadius:"50%", backgroundColor:"#FFFFFFC9", background:"radial-gradient(ellipse for top,yellow)"}}>
            <Stack sx={{width:"436px", height:"436px", borderRadius:"50%", border:"1px solid #00000040", position:"relative", alignItems:"center", justifyContent:"center"}}>
                <Stack sx={{width:"292px", height:"292px", borderRadius:"50%", border:"1px solid #00000040", alignItems:"center", justifyContent:"center"}}>
                    <Stack sx={{width:"200px", height:"200px", borderRadius:"50%", border:"1px solid #00000040", alignItems:"center", justifyContent:"center"}}>
                        <Typography>& more</Typography>
                    </Stack>
                </Stack>
                <Stack sx={{position:"absolute", width:"90px", height:"90px", top:"30px", left:"-0px", borderRadius:"50%", backgroundColor:"yellow", alignItems:"center", justifyContent:"center"}}>
                    <img width="50x" height="50px" src={getAssetUrl('logos/shopify-logo.png')} alt="no data icon"/>
                </Stack>
                <Stack sx={{position:"absolute", width:"90px", height:"90px", top:"180px", left:"-40px", borderRadius:"50%", backgroundColor:"yellow", alignItems:"center", justifyContent:"center"}}>
                    <img width="50x" height="50px" src={getAssetUrl('logos/shopify-logo.png')} alt="no data icon"/>
                </Stack>
                <Stack sx={{position:"absolute", width:"90px", height:"90px", top:"280px", left:"-20px", borderRadius:"50%", backgroundColor:"yellow", alignItems:"center", justifyContent:"center"}}>
                    <img width="50x" height="50px" src={getAssetUrl('logos/shopify-logo.png')} alt="no data icon"/>
                </Stack>
                <Stack sx={{position:"absolute", width:"90px", height:"90px", top:"70px", left:"-20px", borderRadius:"50%", backgroundColor:"yellow", alignItems:"center", justifyContent:"center"}}>
                    <img width="50x" height="50px" src={getAssetUrl('logos/shopify-logo.png')} alt="no data icon"/>
                </Stack>
                <Stack sx={{position:"absolute", width:"90px", height:"90px", top:"70px", left:"-20px", borderRadius:"50%", backgroundColor:"yellow", alignItems:"center", justifyContent:"center"}}>
                    <img width="50x" height="50px" src={getAssetUrl('logos/shopify-logo.png')} alt="no data icon"/>
                </Stack>
                
            </Stack>
            
        </Stack> */}
      </Stack>  
    </>
  )
}
