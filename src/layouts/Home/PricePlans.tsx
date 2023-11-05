import { Box, Button, Collapse, Container, Grid, Stack, Typography } from '@mui/material'

//  icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

//responsive
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';



export const PricePlans = () => {

  const isMobile = useMediaQuery({ maxWidth: 786 });
  const [expanded, setExpanded] = useState(false);

  const handleViewClick = () => {
    setExpanded(!expanded);
  };

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
      <Stack sx={{width:"100%",alignItems:"center", justifyContent:"center", gap:{md:3, xs:1}, backgroundColor:"#FFFFFF"}}>
          <Stack sx={{alignItems:"center", justifyContent:"center", px:{md:0, xs:6}}}>
              <Typography sx={{fontSize:{md:"32px", xs:"24px"}, fontWeight:"600", textAlign:"center"}}>Avocado <span style={{color:"#0085FF"}}> Pricing </span>  Plans</Typography>
              <Typography sx={{fontSize:{md:"18px", xs:"16px"}, fontWeight:"400", textAlign:"center"}}>Fair Use Pricing with no markup on Meta Fees!</Typography>
          </Stack>
          <Stack sx={{mt:{md:5, xs:3}, px:{md:0, xs:0}}}>
              <Grid container>
                  <Grid item xs={12} md={2.6}>
                    <Stack sx={{flexDirection:{md:"column", xs:"row"}, px:{md:6, xs:2}, gap:{md:5}, justifyContent:"space-between"}}>
                      <Stack sx={{backgroundColor:"#0085FF1A", borderRadius:"8px", boxShadow:"0px 0px 25px 0px rgba(0, 133, 255, 0.08)", borderLeft:"3px solid #0085FF", px:{md:0, xs:2}}}>
                        <Button sx={{fontWeight:"600", fontSize:{md:"20px", xs:"16px", sm:"19px"}, color:"#0085FF", textTransform:"none" }}>Starter</Button>
                      </Stack>
                      <Stack>
                      {isMobile? 
                      <Stack sx={{flexDirection:"row",alignItems:"center",p:1, borderRadius:"8px", border:"1px solid #0085FF1A", gap:{md:2, xs:1}, position:"relative"}}>
                          <Typography sx={{color:"#1A1A1A", fontSize:{xs:"16px"},fontWeight:"600", alignItems:"center", px:4}}>Plus</Typography>
                          <Stack sx={{position:"absolute", top:"-20px", left:"20px"}}>
                            <Button variant='contained' disableElevation sx={{ fontWeight: 'bold', borderRadius: 2.5, backgroundColor:"#0085FF", fontSize:{md:"14px", xs:"10px"}, textTransform:"none" }}>popular</Button>
                          </Stack>    
                      </Stack> : 
                      <Stack sx={{flexDirection:"row",alignItems:"center",px:{md:1}, py:{md:1}, borderRadius:"8px", border:"1px solid #0085FF1A",gap:{md:1, xs:1}, justifyContent:"center"}}>
                          <Typography sx={{color:"#1A1A1A", fontSize:{md:"20px", sm:"18px"},fontWeight:"600"}}>Plus</Typography>
                          <Button variant='contained' disableElevation sx={{ fontWeight: 'bold', borderRadius: 2.5, backgroundColor:"#0085FF", color:"#FFFFFF", textTransform:"none", fontSize:"14px" }}>popular</Button>
                      </Stack>}
                      </Stack>
                      <Stack>
                          <Stack sx={{border:"1px solid #0085FF1A", px:{md:3, xs:3}, py:{md:1, xs:1}, borderRadius:"8px"}}>
                              <Typography sx={{fontSize:{md:"20px", xs:"16px", sm:"18px"}, fontWeight:"600"}}>Elite</Typography>
                          </Stack>
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={4.7} sx={{pt:{md:0, xs:2}, pr:{md:0, xs:1}, pl:{md:0, xs:1}}}>
                    <Stack sx={{height:{md:"auto", xs:"auto", sm:"auto"}, backgroundColor:"#FFFFFF", gap:{md:3, xs:2, sm:3}, px:{md:10, xs:3, sm:6}, py:{md:7, xs:3}, borderRadius:{md:"10px 0px 0px 10px", xs:"10px 10px 10px 10px"}, boxShadow:"0px 0px 25px 0px rgba(0, 133, 255, 0.08);", alignItems:"flex-start"}}>
                      <Stack sx={{flexDirection:"row", gap:{md:3, xs:2}, justifyContent:"center", alignItems:"center"}}>
                          <Stack sx={{width:{md:"72px", xs:"38px"}, height:{md:"72px", xs:"38px"}, backgroundColor:"#EBF5FF", alignItems:"center", justifyContent:"center", borderRadius:"8px"}}>
                              <Box sx={{width:{md:"38px", xs:"20px"}, height:{md:"38px", xs:"20px"}, borderRadius:"50%", background: 'linear-gradient(to right, #0085FF 50%, #0085FF80 50%)'}} />
                          </Stack>    
                          <Stack sx={{gap:{md:1, xs:0}}}>
                              <Typography sx={{fontSize:{md:"18px", xs:"12px", sm:"16px"}, fontWeight:"600", color:"#0085FF", backgroundColor:"#0085FF14", borderRadius:"4px", px:{md:"4px", xs:""}, py:{md:"10px"}}}>20% off on annual</Typography>
                              <Typography sx={{fontSize:{md:"36px", xs:"24px", sm:"18px"}, fontWeight:"700", color:"#0085FF" }}>Starter</Typography>
                          </Stack>
                      </Stack>
                      <Stack sx={{}}>
                          <Typography sx={{fontWeight:"400", fontSize:{md:"18px", xs:"16px", sm:"17px"}}}>For small teams with moderate messaging volume</Typography>
                            <Stack sx={{flexDirection:"row", alignItems:"center"}}>
                              <Typography sx={{fontSize:{md:"54px", xs:"38px", sm:"42px"}, fontWeight:"700"}}>$34.99</Typography>
                              <Typography sx={{fontSize:{md:"20px", xs:"16px", sm:"17px"}, fontWeight:"500"}}>/monthly</Typography>
                            </Stack>
                      </Stack>
                      <Stack sx={{flexDirection:"row", mt:{md:12, xs:2}}}>
                          <Button variant='contained' disableElevation sx={{ fontWeight: 'bold', borderRadius: "8px", backgroundColor:"#0085FF", boxShadow:"0px 16px 24px #0085FF29", textTransform:"none", fontSize:{md:"18px", xs:"16px", sm:"17px"} }}>Get started</Button> 
                          <Typography></Typography>
                      </Stack>
                      <Stack sx={{}}>
                        <Typography sx={{color:"#00000040", fontWeight:"400", fontSize:{md:"15px", xs:""}, lineHeight:{md:"18px"}}}>Aren’t completely satisfied? Get your money back, no questions asked </Typography>
                      </Stack>
                      </Stack>
                  </Grid>
                  <Grid item xs={12} md={4.7} sx={{pb:{md:0, xs:2}, pr:{md:0, xs:1}, pl:{md:0, xs:1}}}>
                    <Stack sx={{backgroundColor:"#EBF5FF", px:{md:7, xs:3, sm:5}, py:{md:6, xs:3, sm:4}, boxShadow:"0px 0px 25px 0px rgba(0, 133, 255, 0.08);", borderRadius:{md:" 0px 10px 10px 0px", xs:"10px 10px 10px 10px"}}}>
                      <Stack sx={{ height:"auto", gap:{md:2, xs:1}}}>
                          <Typography sx={{fontSize:{md:"24px", xs:"18px", sm:"22px"}, fontWeight:"700", color:"#1A1A1A"}}>What's included</Typography>
                          <Stack sx={{gap:{md:2, xs:1}}}>
                              {plans.map((item)=> 
                                  <Stack sx={{flexDirection:"row", gap:{md:2, xs:1}}}>
                                      <CheckCircleIcon sx={{color:"#0085FF"}} />
                                      <Typography sx={{fontSize:{md:"18px", xs:"16px", sm:"17px"}, fontWeight:"400", color:"#1A1A1A"}}>{item?.name}</Typography>
                                  </Stack>
                              )
                              }
                              <Stack>
                              <Box mt={2}>
                                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                                      <Stack sx={{gap:{md:2, xs:1}}}>
                                      {plans.map((item)=> 
                                          <Stack sx={{flexDirection:"row", gap:{md:2, xs:1}}}>
                                              <CheckCircleIcon sx={{color:"#0085FF"}} />
                                              <Typography sx={{fontSize:{md:"18px", xs:"16px", sm:"17px"}, fontWeight:"400", color:"#1A1A1A", pr:4}}>{item?.name}</Typography>
                                          </Stack>
                                      )
                                      }
                                      </Stack>                                       
                                  </Collapse>
                                      </Box>
                                      {!expanded && (
                                      <Box mt={1}>
                                          <Button onClick={handleViewClick} sx={{backgroundColor:"#0085FF14", color:"#0085FF", fontSize:{md:"18px", xs:"16px", sm:"17px"}, fontWeight:"600", textTransform:"none", px:{md:2, xs:1} }} endIcon={<ExpandMoreIcon sx={{fontSize:{md:"18px"}}} />}>
                                              View All
                                          </Button>
                                      </Box>
                                  )}
                                  {expanded && (
                                  <Box mt={2}>
                                  <Button onClick={handleViewClick} sx={{backgroundColor:"#0085FF14", color:"#0085FF", fontSize:{md:"18px", xs:"16px", sm:"17px"}, fontWeight:"600", textTransform:"none", px:{md:2, xs:1} }}  endIcon={<ExpandLessIcon sx={{}} />}>
                                    View Less
                                  </Button>
                                  </Box>
                                  )}
                              </Stack>
                          </Stack>
                      </Stack>
                    </Stack>
                  </Grid>
              </Grid>
          </Stack>
      </Stack>
    </>
  )
}
