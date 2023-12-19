import { Container, Grid, Stack, Typography } from '@mui/material'

//responsive
import { useMediaQuery } from 'react-responsive';

export const ManageBusiness = () => {

    const isMobile = useMediaQuery({ maxWidth: 786 });

  return (
    <Stack sx={{width:"100%"}}>
        <Stack sx={{mt:4, py:{md:6, xs:4}, alignItems:"center", justifyContent:"center", gap:4, px:{md:6, xs:2}}}>
            <Stack id="services" sx={{alignItems:"center", justifyContent:"center", px:{md:1, xs:2}}}>
                <Typography sx={{fontSize:{md:"32px", xs:"24px"}, fontWeight:"600", textAlign:"center"}}>Better tools to <span style={{ color: "#0085FF" }}> manage </span> your business</Typography>
                <Typography sx={{fontSize:{md:"18px",xs:"16px"}, fontWeight:"400", textAlign:"center"}}>Millions of companies of all sizes—from startups to Fortune 500s—use Avocado’s SDK</Typography>
            </Stack>
            <Stack sx={{maxWidth:"1200px !important"}}>
            <Grid container spacing={3}>
                <Grid item md={4} xs={12}>
                    <Stack sx={{border:"1px solid #E1E1E1", borderRadius:"8px", p:{md:6, xs:3}, gap:{md:2, xs:1}, minHeight:{md:"300px", xs:"260px"}, maxHeight:"390px", '&:hover': { boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", cursor: 'pointer'},}}>
                        <Stack sx={{width:"48px", height:"48px", backgroundColor:"#0085FF14", borderRadius:"50%", alignItems:"center", justifyContent:"center"}}>
                            <Typography sx={{color:"#0085FF", fontSize:{md:"24px", xs:"20px", sm:"22px"}}}>1</Typography>
                        </Stack>
                        <Typography sx={{fontSize:{md:"20px", xs:"18px"}, fontWeight:"600"}}>Broadcast</Typography>  
                        <Typography sx={{fontSize:{md:"18px", xs:"16px"}, lineHeight:"28px", textAlign:"justify"}}>Push out your campaigns and engage with high response WhatsApp messages. Push out your campaigns and engage with high response WhatsApp messages.</Typography>
                    </Stack>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Stack sx={{border:"1px solid #E1E1E1", borderRadius:"8px", p:{md:6, xs:4}, gap:{md:2, xs:1}, minHeight:{md:"300px", xs:"260px"}, maxHeight:"390px", '&:hover': { boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", cursor: 'pointer'},}}>
                        <Stack sx={{width:"48px", height:"48px", backgroundColor:"#0085FF14", borderRadius:"50%", alignItems:"center", justifyContent:"center"}}>
                            <Typography sx={{color:"#0085FF", fontSize:{md:"24px", xs:"20px", sm:"22px"}}}>2</Typography>
                        </Stack>
                        <Typography sx={{fontSize:{md:"20px", xs:"18px"}, fontWeight:"600"}}>Chatbots</Typography>  
                        <Typography sx={{fontSize:{md:"18px", xs:"16px"}, lineHeight:"28px", textAlign:"justify"}}>Create no-code chatbots to provide instant responses to common requests. Push out your campaigns and engage with high response WhatsApp messages.</Typography>
                    </Stack>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Stack sx={{border:"1px solid #E1E1E1", borderRadius:"8px", p:{md:6, xs:3}, gap:{md:2, xs:1}, minHeight:{md:"300px", xs:"260px"}, maxHeight:"390px", '&:hover': { boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", cursor: 'pointer'},}}>
                        <Stack sx={{width:"48px", height:"48px", backgroundColor:"#0085FF14", borderRadius:"50%", alignItems:"center", justifyContent:"center"}}>
                            <Typography sx={{color:"#0085FF", fontSize:{md:"24px", xs:"20px", sm:"22px"}}}>3</Typography>
                        </Stack>
                        <Typography sx={{fontSize:{md:"20px", xs:"18px"}, fontWeight:"600"}}>Shared Team Inbox</Typography>  
                        <Typography sx={{fontSize:{md:"18px", xs:"16px"}, lineHeight:"28px", textAlign:"justify"}}>Share the Avocado’s inbox across your team and provide stellar support on WhatsApp. Push out your campaigns and engage with high response WhatsApp messages.</Typography>
                    </Stack>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Stack sx={{border:"1px solid #E1E1E1", borderRadius:"8px", p:{md:6, xs:3}, gap:{md:2, xs:1}, minHeight:{md:"300px", xs:"260px"}, maxHeight:"390px", '&:hover': { boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", cursor: 'pointer'},}}>
                        <Stack sx={{width:"48px", height:"48px", backgroundColor:"#0085FF14", borderRadius:"50%", alignItems:"center", justifyContent:"center"}}>
                            <Typography sx={{color:"#0085FF", fontSize:{md:"24px", xs:"20px", sm:"22px"}}}>4</Typography>
                        </Stack>
                        <Typography sx={{fontSize:{md:"20px", xs:"18px"}, fontWeight:"600"}}>Quick Replies</Typography>  
                        <Typography sx={{fontSize:{md:"18px", xs:"16px"}, lineHeight:"28px", textAlign:"justify"}}>Pre-set messages that can answer common queries or provide standard information quickly and efficiently. Helps Agents work Smart.</Typography>
                    </Stack>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Stack sx={{border:"1px solid #E1E1E1", borderRadius:"8px", p:{md:6, xs:3}, gap:{md:2, xs:1}, minHeight:{md:"300px", xs:"260px"}, maxHeight:"390px", '&:hover': { boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", cursor: 'pointer'},}}>
                        <Stack sx={{width:"48px", height:"48px", backgroundColor:"#0085FF14", borderRadius:"50%", alignItems:"center", justifyContent:"center"}}>
                            <Typography sx={{color:"#0085FF", fontSize:{md:"24px", xs:"20px", sm:"22px"}}}>5</Typography>
                        </Stack>
                        <Typography sx={{fontSize:{md:"20px", xs:"18px"}, fontWeight:"600"}}>Interactive Messaging</Typography>  
                        <Typography sx={{fontSize:{md:"18px", xs:"16px"}, lineHeight:"28px", textAlign:"justify"}}>The ability to send not just text but also images, videos, voice messages, documents, and location details to make communication more interactive and informative.</Typography>
                    </Stack>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Stack sx={{border:"1px solid #E1E1E1", borderRadius:"8px", p:{md:6, xs:3}, gap:{md:2, xs:1}, minHeight:{md:"300px", xs:"260px"}, maxHeight:"390px", '&:hover': { boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)", cursor: 'pointer'},}}>
                        <Stack sx={{width:"48px", height:"48px", backgroundColor:"#0085FF14", borderRadius:"50%", alignItems:"center", justifyContent:"center"}}>
                            <Typography sx={{color:"#0085FF", fontSize:{md:"24px", xs:"20px", sm:"22px"}}}>6</Typography>
                        </Stack>
                        <Typography sx={{fontSize:{md:"20px", xs:"18px"}, fontWeight:"600"}}>Customer Support</Typography>  
                        <Typography sx={{fontSize:{md:"18px", xs:"16px"}, lineHeight:"28px", textAlign:"justify"}}>Offering personalized customer service through the chat platform, including handling inquiries, resolving issues, and providing after-sales support.</Typography>
                    </Stack>
                </Grid>
            </Grid>
            </Stack>
                
        </Stack>
    </Stack>
  )
}
