import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'

//  icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

//responsive
import { useMediaQuery } from 'react-responsive';



export const PricePlans = () => {

  const isMobile = useMediaQuery({ maxWidth: 786 });

    const plans = [
        {name:"Unlimited Messages"},
        {name:"Unlimited Agents"},
        {name:"No Fair Use Limits"},
        {name:"Up to 3 team members"},
        {name:"All analytics features"},
        {name:"Up to 250,000 tracked visits"},
        {name:"Normal support"},
        {name:"All analytics features"},
        {name:"Up to 250,000 tracked visits"},
    ]
    
  return (
    <>
        <Container sx={{maxWidth:"1440px !important"}}>
            <Stack sx={{alignItems:"center", justifyContent:"center", gap:{md:3, xs:1}}}>
                <Stack sx={{alignItems:"center", justifyContent:"center",width:{md:"877px", xs:"295px"}}}>
                    <Typography sx={{fontSize:{md:"32px", xs:"24px"}, fontWeight:"600"}}>Avocado <span style={{color:"#0085FF"}}> Pricing </span>  Plans</Typography>
                    <Typography sx={{fontSize:{md:"18px", xs:"16px"}, fontWeight:"400"}}>Fair Use Pricing with no markup on Meta Fees!</Typography>
                </Stack>
                <Stack sx={{maxWidth:"1240px !important", gap:2}}>
                    <Stack sx={{flexDirection:{md:"row", xs:"column"}, gap:{md:4, xs:2}, px:1}}>
                        <Stack sx={{alignItems:"center", gap:{md:4, xs:2}, flexDirection:{md:"column", xs:"row"}, px:{md:2, xs:1}}}>
                            <Stack sx={{width:{md:"175px", xs:"100px"},p:{md:1, xs:0}, backgroundColor:"#0085FF1A", borderRadius:"8px", boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", border:"0px, 0px, 0px, 3px solid #0085FF "}}>
                                <Button sx={{fontWeight:"600", fontSize:{md:"20px", xs:"18px"},color:"#0085FF" }}>Starter</Button>
                            </Stack>
                            {isMobile? 
                            <Stack sx={{flexDirection:"row",alignItems:"center", width:"103px",p:1, backgroundColor:"#0085FF1A", borderRadius:"8px", boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", border:"0px, 0px, 0px, 3px solid #0085FF ",gap:{md:2, xs:1}, position:"relative"}}>
                                <Typography sx={{color:"#1A1A1A", fontSize:{md:"20px", xs:""},fontWeight:"600"}}>Plus</Typography>
                                <Stack sx={{position:"absolute", top:"-20px", left:"10px"}}>
                                  <Button variant='contained' disableElevation sx={{ fontWeight: 'bold', borderRadius: 2.5, backgroundColor:"#0085FF", boxShadow:"0px 16px 24px #0085FF29", fontSize:{md:"14px", xs:"12px"} }}>popular</Button>
                                </Stack>    
                            </Stack> : 
                            <Stack sx={{flexDirection:"row",alignItems:"center", width:{md:"175px", xs:""},p:1, backgroundColor:"#0085FF1A", borderRadius:"8px", boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", border:"0px, 0px, 0px, 3px solid #0085FF ",gap:{md:2, xs:1}}}>
                                <Typography sx={{color:"#1A1A1A", fontSize:{md:"20px", xs:""},fontWeight:"600"}}>Plus</Typography>
                                <Button variant='contained' disableElevation sx={{ fontWeight: 'bold', borderRadius: 2.5, backgroundColor:"#0085FF", boxShadow:"0px 16px 24px #0085FF29" }}>popular</Button>
                            </Stack>}
                            <Stack sx={{border:"1px solid #0085FF1A",  width:{md:"175px", xs:"100px"}, p:{md:1, xs:0}, fontWeight:"600", fontSize:{md:"20px", xs:""}, borderRadius:"8px"}}>
                                <Typography sx={{fontWeight:"600", width:{md:"175px", xs:""}, p:1, fontSize:{md:"20px", xs:""}}}>Elite</Typography>
                            </Stack>
                        </Stack>
                        <Stack sx={{ boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)"}}>
                            <Grid container>
                                <Grid item xs={12} md={6}>
                                    <Stack sx={{px:{md:5, xs:2}, width:{md:"450px", xs:"380px"}, height:{md:"535px", xs:""}, backgroundColor:"#FFFFFF", py:{md:6, xs:2}}}>
                                        <Stack sx={{flexDirection:"row", gap:2}}>
                                            <Stack sx={{width:{md:"72px", xs:"38px"}, height:{md:"72px", xs:"38px"}, backgroundColor:"#EBF5FF", alignItems:"center", justifyContent:"center"}}>
                                                <Box sx={{width:{md:"38px", xs:"20px"}, height:{md:"38px", xs:"20px"}, borderRadius:"50%", background: 'linear-gradient(to right, #0085FF 50%, #0085FF80 50%)'}} />
                                            </Stack>    
                                            <Stack sx={{gap:{md:1, xs:0}}}>
                                                <Typography sx={{fontSize:{md:"18px", xs:"10px"}, fontWeight:"600", color:"#00000040", backgroundColor:"#0085FF14"}}>20% off on annual</Typography>
                                                <Typography sx={{fontSize:{md:"36px", xs:"24px"}, fontWeight:"700"}}>Starter</Typography>
                                            </Stack>
                                        </Stack>
                                        <Stack sx={{mb:{md:8}, mt:{md:3, xs:1}}}>
                                            <Typography sx={{fontWeight:"400", fontSize:{md:"18px", xs:"16px"}, width:{md:"307px"}}}>For small teams with moderate messaging volume</Typography>
                                              <Stack sx={{flexDirection:"row", mt:{md:3}, alignItems:"center", gap:{md:2, xs:1}}}>
                                                <Typography sx={{fontSize:{md:"54px", xs:"38px"}, fontWeight:"700"}}>$34.99</Typography>
                                                <Typography sx={{fontSize:{md:"20px", xs:"16px"}, fontWeight:"500"}}>/monthly</Typography>
                                              </Stack>
                                        </Stack>
                                        <Stack sx={{flexDirection:"row", mt:{md:12, xs:5}}}>
                                           <Button variant='contained' disableElevation sx={{ fontWeight: 'bold', borderRadius: 2.5, backgroundColor:"#0085FF", boxShadow:"0px 16px 24px #0085FF29" }}>Get started</Button> 
                                           <Typography></Typography>
                                        </Stack>
                                        <Stack sx={{width:{md:"290px", xs:"260px"}, mt:{md:3, xs:1}}}>
                                        <Typography sx={{color:"#00000040", fontWeight:"400", fontSize:{md:"15px", xs:""}, lineHeight:{md:"18px"}}}>Aren’t completely satisfied? Get your money back, no questions asked </Typography>
                                        </Stack>
                                        </Stack>     
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Stack sx={{backgroundColor:"#EBF5FF", px:{md:6}, py:{md:5}}}>
                                        <Stack sx={{width:{md:"560px", xs:"380px"}, height:"535px", p:2}}>
                                            <Typography sx={{fontSize:{md:"24px", xs:"18px"}, fontWeight:"700", color:"#1A1A1A"}}>What's included</Typography>
                                            <Stack sx={{gap:{md:1, xs:0.5}, mt:{md:3, xs:1}}}>
                                                {plans.map((item)=> 
                                                    <Stack sx={{flexDirection:"row", gap:{md:2, xs:1}, py:1}}>
                                                        <CheckCircleIcon sx={{color:"#0085FF"}} />
                                                        <Typography>{item?.name}</Typography>
                                                    </Stack>
                                                )
                                                }
                                                <Stack sx={{flexDirection:"row", mt:{md:2, xs:2}}}>
                                                    <Stack sx={{flexDirection:"row", backgroundColor:"#0085FF14", alignItems:"center", justifyContent:"center"}} >
                                                      <Typography sx={{fontSize:{md:"18px", xs:""}, fontWeight:"600", color:"#0085FF"}}>View All</Typography>
                                                      <ExpandMoreIcon sx={{color:"#0085FF"}} />
                                                    </Stack>
                                                    <Typography></Typography>
                                                    
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    </>
  )
}
