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
import { IndustryScreen } from '../layouts/Home/IndustryScreen';

const Home = () => {
  return (
    
    <>
       <Stack sx={{width:"100%"}}>
           <Header />
           <ManageBusiness />
           <PersonalizedMessage />
           <WhatsappFeature /> 
           <IndustryScreen />
           <MultiPlatForms />
           <CustomerSlider />
           <PricePlans />
           <Sales />
           <Footer />
         </Stack>
    </>
  )
}

export default React.memo(Home);