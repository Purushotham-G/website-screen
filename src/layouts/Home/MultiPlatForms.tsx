import { Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

//components
import { MultiPlatFormImages } from './MultiPlatFormImages'

//responsive
import { useMediaQuery } from 'react-responsive';

export const MultiPlatForms = () => {
   const isMobile = useMediaQuery({ maxWidth: 786 });
  return (
        <Stack sx={{width:"100%"}}>
            <Stack sx={{}}>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Stack sx={{}}>
                            <Stack sx={{px:{md:12, xs:2}, py:{md:10}, gap:3}}>
                                <Typography sx={{fontSize:{md:"32px", xs:"24px"}, fontWeight:"600"}}><span style={{color:"#0085FF"}}>Integrate</span> with multi-platform apps & solutions</Typography>
                                <Typography sx={{fontSize:{md:"18px", xs:"16px"}, fontWeight:"400", textAlign:"justify"}}>Effortlessly link Avocado with your current technology infrastructure to exchange data and coordinate tasks across all your systems such as CRM, Billing aps and etcso you can optimize the tools you use.</Typography>
                                <Stack sx={{flexDirection:"row"}}>
                                  <Button variant='contained' disableElevation sx={{ fontWeight: 'bold', borderRadius: 2.5, backgroundColor:"#0085FF", boxShadow:"0px 16px 24px #0085FF29", textTransform:"none", fontSize:{md:"18px", xs:"16px"} }}>Learn More</Button> 
                                  <Typography></Typography>
                                </Stack>
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
        </Stack>
  )
}
