import { Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

//components
import { MultiPlatFormImages } from './MultiPlatFormImages'

//responsive
import { useMediaQuery } from 'react-responsive';

export const MultiPlatForms = () => {
   const isMobile = useMediaQuery({ maxWidth: 786 });
  return (
        <Container sx={{maxWidth:"1440px !important"}}>
            <Stack sx={{py:{md:8, xs:2}}}>
                <Grid container>
                    <Grid item xs={12} md={6} sx={{p:{md:6, xs:1}}}>
                        <Stack sx={{width:{md:"482px", xs:"338px"}, gap:{md:2, xs:1}, px:{md:4, xs:1}}}>
                            <Typography sx={{fontSize:{md:"32px", xs:"24px"}, fontWeight:"600"}}><span style={{color:"#0085FF"}}>Integrate</span> with multi-platform apps & solutions</Typography>
                            <Typography sx={{fontSize:{md:"18px", xs:"16px"}, fontWeight:"400", textAlign:"justify"}}>Effortlessly link Avocado with your current technology infrastructure to exchange data and coordinate tasks across all your systems such as CRM, Billing aps and etcso you can optimize the tools you use.</Typography>
                            <Stack sx={{flexDirection:"row"}}>
                            <Button variant='contained' disableElevation sx={{ fontWeight: 'bold', borderRadius: 2.5, backgroundColor:"#0085FF", boxShadow:"0px 16px 24px #0085FF29" }}>Learn More</Button> 
                            <Typography></Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack sx={{mt:{md:4, xs:2}}}>
                        <MultiPlatFormImages />
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
        </Container>
  )
}
