import { Accordion, AccordionDetails, AccordionSummary, Button, ClickAwayListener, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import { TemplatesScreen } from './TemplatesScreen'

//  icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

export const WhatsappFeature = () => {
    const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 786 });

  const [expanded, setExpanded] = useState<string | false>(false);
  const accordionRef = useRef<HTMLDivElement>(null);

  const handleClickAway = () => {
    setExpanded(false);
  };

  const handleAccordionChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Stack sx={{width:"100%", height:{md:"790px", xs:"auto"}, alignItems:"center", justifyContent:"center"}}>
          <Grid container sx={{flexDirection:{md:"row", xs:"column-reverse"}}}>
                <Grid item md={6} xs={12}>
                  <Stack sx={{alignItems:"center", justifyContent:"center", }}>
                    <TemplatesScreen />
                  </Stack>
              </Grid>
              <Grid item md={6} xs={12}> 
                <Stack sx={{alignItems:"center", gap:3, px:2}}>
                  <Stack sx={{justifyContent:"center", px:{md:10, xs:1}, gap:{md:3, xs:2}}}>
                    <Typography sx={{fontSize:{md:"26px", xs:"20px", sm:"24px"}, color:"#0085FF", fontWeight:"600"}}>Be the Boss</Typography>
                    <Typography sx={{fontSize:{md:"32px", xs:"24px", sm:"28px"}, fontWeight:"600"}}>Amplify Engagement & Sales with WhatsApp Marketing</Typography>
                    <Typography sx={{fontSize:{md:"18px", xs:"16px", sm:"17px"}, fontWeight:"400", textAlign:"justify"}}>Maximize your reach and deepen customer relationships with WhatsApp marketing, using targeted, personal messages that resonate with your audience. Leverage the power of instant messaging to drive engagement, boost sales, and build a loyal customer base.</Typography>
                  </Stack> 
                  <Stack sx={{gap:{md:3}}}>
                    <ClickAwayListener onClickAway={handleClickAway}>
                      <div ref={accordionRef}>
                        <Stack sx={{gap:3}}>
                          <Stack>  
                          <Accordion
                            expanded={expanded === 'panel1'}
                            onChange={handleAccordionChange('panel1')}
                            sx={{ boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.06)', borderRadius: '10px !important' }}
                          >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Stack sx={{ flexDirection: 'row' }}>
                                <Typography fontWeight={700} fontSize={{ md: '20px', xs: '18px' }}>
                                  Ads that Work on WhatsApp
                                </Typography>
                                <Stack sx={{ backgroundColor: '#0085FF0D', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
                                  <Typography sx={{ fontSize: {md:'14px', xs:"10px"}, fontWeight: '600', color: '#0085FF', px: 1 }}>POPULAR</Typography>
                                </Stack>
                              </Stack>
                            </AccordionSummary>
                            <AccordionDetails sx={{ overflowX: 'auto' }}>
                              <Divider sx={{ mb: { md: 3, xs: 2, sm: 2 } }} />
                              <Stack alignItems="center">
                                <Typography
                                  fontSize={{ md: '20px', xs: '16px' }}
                                  width={{ md: 440 }}
                                  sx={{ textAlign: 'justify', fontWeight: '400' }}
                                >
                                  Revolutionize your marketing strategy with WhatsApp Click-to-Chat ads, directly connecting your advertising efforts with engaging customer conversations.
                                </Typography>
                              </Stack>
                            </AccordionDetails>
                          </Accordion>
                          </Stack>
                          <Stack>
                          <Accordion
                            expanded={expanded === 'panel2'}
                            onChange={handleAccordionChange('panel2')}
                            sx={{ boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.06)', borderRadius: '10px !important' }}
                          >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Stack sx={{ }}>
                                <Typography fontWeight={700} fontSize={{ md: '20px', xs: '18px' }}>
                                  Segmentation & Targeting
                                </Typography>
                              </Stack>
                            </AccordionSummary>
                            <AccordionDetails sx={{ overflowX: 'auto' }}>
                              <Divider sx={{ mb: { md: 3, xs: 2, sm: 2 } }} />
                              <Stack alignItems="center">
                                <Typography
                                  fontSize={{ md: '20px', xs: '16px' }}
                                  width={{ md: 440 }}
                                  sx={{ textAlign: 'justify', fontWeight: '400' }}
                                >
                                  Craft your marketing strategies in compliance with WhatsApp Ad policies, as we ensure your audience segmentation and targeted campaigns meet platform standards for secure and respectful user engagement.
                                </Typography>
                              </Stack>
                            </AccordionDetails>
                          </Accordion>
                          </Stack>
                          <Stack>
                          <Accordion
                            expanded={expanded === 'panel3'}
                            onChange={handleAccordionChange('panel3')}
                            sx={{ boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.06)', borderRadius: '10px !important' }}
                          >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Stack sx={{ }}>
                                <Typography fontWeight={700} fontSize={{ md: '20px', xs: '18px' }}>
                                  WhatsApp Compliance
                                </Typography>
                              </Stack>
                            </AccordionSummary>
                            <AccordionDetails sx={{ overflowX: 'auto' }}>
                              <Divider sx={{ mb: { md: 3, xs: 2, sm: 2 } }} />
                              <Stack alignItems="center">
                                <Typography
                                  fontSize={{ md: '20px', xs: '16px' }}
                                  width={{ md: 440 }}
                                  sx={{ textAlign: 'justify', fontWeight: '400' }}
                                >
                                  With strict adherence to WhatsApp Ad policies, our audience segmentation and targeting tools are designed to uphold platform integrity while delivering personalized and responsible content to your valued customers.
                                </Typography>
                              </Stack>
                            </AccordionDetails>
                          </Accordion>
                          </Stack>
                        </Stack> 
                      </div>
                    </ClickAwayListener>  
                  </Stack>
                </Stack>          
              </Grid>   
          </Grid>
      </Stack>
    </>
  )
}
