import { Accordion, AccordionDetails, AccordionSummary, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { TemplatesScreen } from './TemplatesScreen'

//  icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

export const WhatsappFeature = () => {
    const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 786 });

  return (
    <>
    <Container sx={{maxWidth:"1440px !important"}}>
      <Stack sx={{px:2, alignItems:"center", justifyContent:"center"}}>
          <Grid container spacing={{md:4, xs:3}} sx={{alignItems:"center", justifyContent:"center", flexDirection:{md:"row", xs:"column-reverse"}}}>
                <Grid item md={6} xs={12}>
                  <Stack sx={{width:{md:"760px", xs:"388px"}, height:{md:"790px", xs:"397px"}, backgroundColor:"#FFFFFFC9", borderRadius:"50%", justifyContent:"center"}}>
                    <TemplatesScreen />
                  </Stack>
              </Grid>
              <Grid item md={6} xs={12}> 
              <Stack sx={{alignItems:"center", gap:2}}>
                <Stack sx={{ width:{md:"482px", xs:"313px"}, justifyContent:"center", px:{md:10, xs:1}, gap:{md:3, xs:2}}}>
                    <Typography sx={{fontSize:{md:"32px"}, fontWeight:"600"}}>Power-packed WhatsApp <span style={{ color: "#0085FF" }}> Business API </span>  Features</Typography>
                </Stack> 
                <Stack sx={{width:{md:"472px", xs:"341px"}}}>
                    <Accordion sx={{ boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.06)', borderRadius: '10px !important' }}>
                    <AccordionSummary data-testid="working-hours-summary" expandIcon={<ExpandMoreIcon />}>
                    <Stack sx={{flexDirection:"row"}}>
                        <Typography data-testid="working-hours-title" fontWeight={700} fontSize={{md:"20px", xs:"18px"}}>Automated Workflows</Typography>  
                        <Stack sx={{backgroundColor:"#0085FF0D", alignItems:"center", justifyContent:"center", borderRadius:"8px"}}>
                          <Typography sx={{fontSize:"14px", fontWeight:"600", color:"#0085FF", px:1}}>popular</Typography>
                        </Stack> 
                    </Stack>
                    
                    </AccordionSummary>
                    <AccordionDetails data-testid="working-hours-details" sx={{ overflowX: 'auto' }}>
                        <Divider sx={{ mb: {md:3, xs:2, sm:2} }} />
                        <Stack data-testid="time-zone-container" alignItems='center'>
                        <Typography data-testid="time-zone-label" fontSize={{md:"20px", xs:"16px"}} width={{md:440}} sx={{textAlign:"justify", fontWeight:"400"}}>Create event-based workflows on WhatsApp to guide your customers through various processes like appointment booking, new registrations, etc.</Typography>    
                        </Stack>
                    </AccordionDetails>
                    </Accordion>
                </Stack> 
                <Stack sx={{width:{md:"472px", xs:"341px"}}}>
                    <Accordion sx={{ boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.06)', borderRadius: '10px !important' }}>
                    <AccordionSummary data-testid="working-hours-summary" expandIcon={<ExpandMoreIcon />}>
                    <Stack sx={{flexDirection:"row"}}>
                        <Typography data-testid="working-hours-title" fontWeight={700} fontSize={{md:"20px", xs:"18px"}}>Ads that Click to WhatsApp</Typography>       
                    </Stack>
                    
                    </AccordionSummary>
                    <AccordionDetails data-testid="working-hours-details" sx={{ overflowX: 'auto' }}>
                        <Divider sx={{ mb: {md:3, xs:2, sm:2} }} />
                        <Stack data-testid="time-zone-container" alignItems='center'>
                        <Typography data-testid="time-zone-label" fontSize={{md:"18px", xs:"16px"}} width={{md:440}} sx={{textAlign:"justify", fontWeight:"400"}}>Create event-based workflows on WhatsApp to guide your customers through various processes like appointment booking, new registrations, etc.</Typography>
                        
                        </Stack>
                    
                    </AccordionDetails>
                    </Accordion>
                </Stack>
                <Stack sx={{width:{md:"472px", xs:"341px"}}} >
                    <Accordion sx={{ boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.06)', borderRadius: '10px !important' }}>
                    <AccordionSummary data-testid="working-hours-summary" expandIcon={<ExpandMoreIcon />}>
                    <Stack>
                        <Typography data-testid="working-hours-title" fontWeight={700} fontSize={{md:"20px", xs:"18px"}}>Shared Team Inbox</Typography>   
                    </Stack>
                    
                    </AccordionSummary>
                    <AccordionDetails data-testid="working-hours-details" sx={{ overflowX: 'auto' }}>
                        <Divider sx={{ mb: {md:3, xs:2, sm:2} }} />
                        <Stack data-testid="time-zone-container" alignItems='center'>
                        <Typography data-testid="time-zone-label" fontSize={{md:"18px", xs:"16px"}} width={{md:440}} sx={{textAlign:"justify", fontWeight:"400"}}>Create event-based workflows on WhatsApp to guide your customers through various processes like appointment booking, new registrations, etc.</Typography>
                        
                        </Stack>
                    
                    </AccordionDetails>
                    </Accordion>
                </Stack>

              </Stack>
                       
              </Grid>
              
          </Grid>
      </Stack>
    </Container>
    
            {/* <Stack>
                <Grid container spacing={3} sx={{alignItems:"center", justifyContent:"center"}}>
                    <Grid item md={6} xs={12}>
                    <Stack sx={{position:"relative", justifyContent:"center",backgroundColor:"#FFFFFFC9", borderRadius:"50%", width:"774px", height:"790px"}}>
                        <Stack sx={{position:"absolute", boxShadow:"0px 0px 25px rgba(0, 0, 0, 0.06)", width:'614px'}} >
                            <TemplatesScreen />
                        </Stack>  
                    </Stack>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Stack sx={{width:"472px", pl:"25px"}}>
                            <Typography sx={{fontSize:{md:"32px"}, fontWeight:"600"}}>Power-packed WhatsApp <span style={{ color: 'blue' }}> Business API </span>  Features</Typography>
                        
                        <Stack sx={{width:"472px"}} >
                            <Accordion sx={{ boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.06)', borderRadius: '10px !important' }}>
                            <AccordionSummary data-testid="working-hours-summary" expandIcon={<ExpandMoreIcon />}>
                            <Stack>
                                <Typography data-testid="working-hours-title" fontWeight={700} fontSize={{md:"17px", xs:"14px", sm:"15px"}}>{t('GREETINGS.SET_WORKING_HOURS')}</Typography>
                                
                            </Stack>
                            
                            </AccordionSummary>
                            <AccordionDetails data-testid="working-hours-details" sx={{ overflowX: 'auto' }}>
                                <Divider sx={{ mb: {md:3, xs:2, sm:2} }} />
                                <Stack data-testid="time-zone-container" alignItems='center'>
                                <Typography data-testid="time-zone-label" fontSize={{md:"14px", xs:"12px", sm:"13px"}} width={{md:200}}>{t('GREETINGS.SELECT_TIME_ZONE')}</Typography>
                                
                                </Stack>
                            
                            </AccordionDetails>
                            </Accordion>
                        </Stack>
                        <Stack sx={{width:"472px"}} >
                            <Accordion sx={{ boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.06)', borderRadius: '10px !important' }}>
                            <AccordionSummary data-testid="working-hours-summary" expandIcon={<ExpandMoreIcon />}>
                            <Stack>
                                <Typography data-testid="working-hours-title" fontWeight={700} fontSize={{md:"17px", xs:"14px", sm:"15px"}}>{t('GREETINGS.SET_WORKING_HOURS')}</Typography>
                                
                            </Stack>
                            
                            </AccordionSummary>
                            <AccordionDetails data-testid="working-hours-details" sx={{ overflowX: 'auto' }}>
                                <Divider sx={{ mb: {md:3, xs:2, sm:2} }} />
                                <Stack data-testid="time-zone-container" alignItems='center'>
                                <Typography data-testid="time-zone-label" fontSize={{md:"14px", xs:"12px", sm:"13px"}} width={{md:200}}>{t('GREETINGS.SELECT_TIME_ZONE')}</Typography>
                               
                                </Stack>
                            
                            </AccordionDetails>
                            </Accordion>
                        </Stack>
                        <Stack sx={{width:"472px"}} >
                            <Accordion sx={{ boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.06)', borderRadius: '10px !important' }}>
                            <AccordionSummary data-testid="working-hours-summary" expandIcon={<ExpandMoreIcon />}>
                            <Stack>
                                <Typography data-testid="working-hours-title" fontWeight={700} fontSize={{md:"17px", xs:"14px", sm:"15px"}}>{t('GREETINGS.SET_WORKING_HOURS')}</Typography>
                               
                            </Stack>
                            
                            </AccordionSummary>
                            <AccordionDetails data-testid="working-hours-details" sx={{ overflowX: 'auto' }}>
                                <Divider sx={{ mb: {md:3, xs:2, sm:2} }} />
                                <Stack data-testid="time-zone-container" alignItems='center'>
                                <Typography data-testid="time-zone-label" fontSize={{md:"14px", xs:"12px", sm:"13px"}} width={{md:200}}>{t('GREETINGS.SELECT_TIME_ZONE')}</Typography>
                                
                                </Stack>
                            
                            </AccordionDetails>
                            </Accordion>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack> */}
    </>
  )
}
