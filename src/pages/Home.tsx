import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react'
// import { Header } from '../layouts/Home/Header';


// import { getAssetUrl } from '../helpers/assets';
import { SocialMedia } from '../layouts/Home/SocialMedia';
import { ManageBusiness } from '../layouts/Home/ManageBusiness';
import { PersonalizedMessage } from '../layouts/Home/PersonalizedMessage';
import { WhatsappFeature } from '../layouts/Home/WhatsappFeature';
import { Agents } from '../layouts/Home/Agents';
import { MultiPlatForms } from '../layouts/Home/MultiPlatForms';
import { CustomerSlider } from '../layouts/Home/CustomerSlider';
import { PricePlans } from '../layouts/Home/PricePlans';
import { Sales } from '../layouts/Home/Sales';
import { Header } from '../components/Home/Header';
import { CustomerRelationship } from '../layouts/Home/CustomerRelationship';
import { Footer } from '../components/Home/Footer';

const Home = () => {
  return (
    <Box sx={{maxWidth:"1440px !important", alignItems:"center"}}>
      <Stack sx={{gap:{md:5, xs:2}}}>
          <Box sx={{}}> 
          <Stack sx={{position:"relative"}}>
            <Grid container>
                <Grid item md={3} xs={3} sx={{backgroundColor:"#0085FF", opacity:"5%", height:"800px"}}></Grid>
                <Grid item md={3} xs={3} sx={{backgroundColor:"#0085FF", opacity:"7%", height:"800px"}}></Grid>
                <Grid item md={3} xs={3} sx={{backgroundColor:"#0085FF", opacity:"9%", height:"800px"}}></Grid>
                <Grid item md={3} xs={3} sx={{backgroundColor:"#0085FF", opacity:"11%", height:"800px"}}></Grid>
                <Box sx={{ position:"absolute"}}>
                  <Header />
                  <CustomerRelationship />
                  <SocialMedia /> 
                </Box>    
            </Grid>
          </Stack>   
            
          </Box>
          {/* <Header /> */}
          <ManageBusiness />
          <PersonalizedMessage />
          <WhatsappFeature />
          <Agents />
          <MultiPlatForms />
          <CustomerSlider />
          <PricePlans />
          <Sales />
          <Footer />
        </Stack>
    </Box>
  )
}

export default React.memo(Home);