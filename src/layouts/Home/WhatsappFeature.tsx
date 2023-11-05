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
                <Stack sx={{alignItems:"center", gap:2, px:2}}>
                  <Stack sx={{justifyContent:"center", px:{md:10, xs:1}, gap:{md:3, xs:2}}}>
                      <Typography sx={{fontSize:{md:"32px"}, fontWeight:"600"}}>Power-packed WhatsApp <span style={{ color: "#0085FF" }}> Business API </span>  Features</Typography>
                  </Stack> 
                  <Stack>
                    <ClickAwayListener onClickAway={handleClickAway}>
                      <div ref={accordionRef}>
                        <Stack sx={{gap:2}}>  
                        <Accordion
                          expanded={expanded === 'panel1'}
                          onChange={handleAccordionChange('panel1')}
                          sx={{ boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.06)', borderRadius: '10px !important' }}
                        >
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Stack sx={{ flexDirection: 'row' }}>
                              <Typography fontWeight={700} fontSize={{ md: '20px', xs: '18px' }}>
                                Automated Workflows
                              </Typography>
                              <Stack sx={{ backgroundColor: '#0085FF0D', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
                                <Typography sx={{ fontSize: '14px', fontWeight: '600', color: '#0085FF', px: 1 }}>popular</Typography>
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
                                Create event-based workflows on WhatsApp to guide your customers through various processes like appointment
                                booking, new registrations, etc.
                              </Typography>
                            </Stack>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion
                          expanded={expanded === 'panel2'}
                          onChange={handleAccordionChange('panel2')}
                          sx={{ boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.06)', borderRadius: '10px !important' }}
                        >
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Stack sx={{ }}>
                              <Typography fontWeight={700} fontSize={{ md: '20px', xs: '18px' }}>
                                Ads that Click to WhatsApp
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
                                Create event-based workflows on WhatsApp to guide your customers through various processes like appointment
                                booking, new registrations, etc.
                              </Typography>
                            </Stack>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion
                          expanded={expanded === 'panel3'}
                          onChange={handleAccordionChange('panel3')}
                          sx={{ boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.06)', borderRadius: '10px !important' }}
                        >
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Stack sx={{ }}>
                              <Typography fontWeight={700} fontSize={{ md: '20px', xs: '18px' }}>
                              Shared Team Inbox
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
                                Create event-based workflows on WhatsApp to guide your customers through various processes like appointment
                                booking, new registrations, etc.
                              </Typography>
                            </Stack>
                          </AccordionDetails>
                        </Accordion>
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
