import { Container, Grid, Stack, Typography } from '@mui/material'

//responsive
import { useMediaQuery } from 'react-responsive';

export const ManageBusiness = () => {

    const isMobile = useMediaQuery({ maxWidth: 786 });

  return (
    <Container sx={{maxWidth:"1440px !important"}}>
        <Stack sx={{mt:4, p:2, alignItems:"center", justifyContent:"center", gap:4}}>
            <Stack sx={{width:{md:"877px", xs:"313px"}, alignItems:"center", justifyContent:"center"}}>
                <Typography sx={{fontSize:{md:"32px", xs:"24px"}, fontWeight:"600"}}>Better tools to <span style={{ color: "#0085FF" }}>manage</span> your business</Typography>
                <Typography sx={{fontSize:{md:"18px",xs:"16px"}, fontWeight:"400"}}>Millions of companies of all sizes—from startups to Fortune 500s—use Avocado’s SDK</Typography>
            </Stack>
            <Stack sx={{maxWidth:"1200px !important"}}>
            <Grid container spacing={3}>
                    <Grid item md={4} xs={12}>
                        <Stack sx={{border:"1px solid #E1E1E1", borderRadius:"8px", p:{md:6, xs:3}, gap:{md:2, xs:1}}}>
                            <Stack sx={{width:"48px", height:"48px", backgroundColor:"#0085FF14", borderRadius:"50%", alignItems:"center", justifyContent:"center"}}>
                             <Typography>1</Typography>
                            </Stack>
                            <Typography sx={{fontSize:{md:"20px", xs:"18px"}, fontWeight:"600"}}>Broadcast</Typography>  
                           <Typography sx={{fontSize:{md:"18px", xs:"16px"}, lineHeight:"28px", textAlign:"justify"}}>Push out your campaigns and engage with high response WhatsApp messages. Push out your campaigns and engage with high response WhatsApp messages.</Typography>
                        </Stack>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Stack sx={{border:"1px solid #E1E1E1", borderRadius:"8px", p:{md:6, xs:3}, gap:{md:2, xs:1}, boxShadow:"0px 0px 25px rgba(0, 133, 255, 0.08)"}}>
                            <Stack sx={{width:"48px", height:"48px", backgroundColor:"#0085FF14", borderRadius:"50%", alignItems:"center", justifyContent:"center"}}>
                             <Typography>2</Typography>
                            </Stack>
                            <Typography sx={{fontSize:{md:"20px", xs:"18px"}, fontWeight:"600"}}>Chatbots</Typography>  
                           <Typography sx={{fontSize:{md:"18px", xs:"16px"}, lineHeight:"28px", textAlign:"justify"}}>Create no-code chatbots to provide instant responses to common requests. Push out your campaigns and engage with high response WhatsApp messages.</Typography>
                        </Stack>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Stack sx={{border:"1px solid #E1E1E1", borderRadius:"8px", p:{md:6, xs:3}, gap:{md:2, xs:1}}}>
                            <Stack sx={{width:"48px", height:"48px", backgroundColor:"#0085FF14", borderRadius:"50%", alignItems:"center", justifyContent:"center"}}>
                             <Typography>3</Typography>
                            </Stack>
                            <Typography sx={{fontSize:{md:"20px", xs:"18px"}, fontWeight:"600"}}>Shared Team Inbox</Typography>  
                           <Typography sx={{fontSize:{md:"18px", xs:"16px"}, lineHeight:"28px", textAlign:"justify"}}>Share the Avocado’s inbox across your team and provide stellar support on WhatsApp. Push out your campaigns and engage with high response WhatsApp messages.</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
                
        </Stack>
    </Container>
  )
}
