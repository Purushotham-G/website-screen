import { Box, Button, Container, IconButton, Stack, Tab, Tabs, Typography } from '@mui/material'
import React, { useRef, useState } from 'react';

//utils
import { useTranslation } from 'react-i18next';

//helpers
import { getAssetUrl } from '../../Assets/helper';

//responsive
import { useMediaQuery } from 'react-responsive';

//icons
import DragHandleIcon from '@mui/icons-material/DragHandle';

export const HeaderTitle = () => {
    const { t } = useTranslation();
    const isMobile = useMediaQuery({ maxWidth: 786 });

  return (
    <>
    {isMobile?
      <Stack sx={{flexDirection:"row", justifyContent:"space-between", py:1, px:2}}>
          <Stack sx={{flexDirection:"row"}}>
            <img width="43px" height="30px" alt='avocado icon' src={getAssetUrl('avocado.svg')} />
            <Typography sx={{fontSize:"22px", fontWeight:"700"}}>Avocado</Typography>
          </Stack>
          <IconButton>
            <DragHandleIcon />
          </IconButton>
      </Stack>
     : 
    <Stack sx={{width:"100%", height:"auto"}}>
      <Stack sx={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", py:4 }}>
        <Stack sx={{ flexDirection:"row", alignItems:"center",gap:{md:2, xs:1}}}>
          <img width="53px" height="42px" alt='avocado icon' src={getAssetUrl('avocado.svg')} />
          <Typography sx={{fontSize:"32px", fontWeight:"700"}}>Avocado</Typography>
        </Stack>
          <Stack sx={{flexDirection:"row", gap:6, alignItems:"center", justifyContent:"center"}}>
            <Typography
              component="a"
              href="#services"
              sx={{
                textDecoration: 'none',
                color: '#1A1A1A',
                fontWeight:"600",
                fontSize:"16px",
                // transition: 'color 0.1s ease-in-out',
                '&:hover': {
                  textDecoration: 'underline',
                  color: '#0085FF', 
                  
                },
              }}
            >
              Services
            </Typography>
            <Typography
              component="a"
              href="#industries"
              sx={{
                textDecoration: 'none',
                color: '#1A1A1A',
                fontWeight:"600",
                fontSize:"16px",
                '&:hover': {
                  textDecoration: 'underline',
                  color: '#0085FF', 
                  
                },
              }}
            >
              Industries       
            </Typography>
            <Typography
              component="a"
              href="#integrations"
              sx={{
                textDecoration: 'none',
                color: '#1A1A1A',
                fontWeight:"600",
                fontSize:"16px",
                '&:hover': {
                  textDecoration: 'underline',
                  color: '#0085FF', 
                  
                },
              }}
            >
              Integrations
            </Typography>
            <Typography
              component="a"
              href="#contact"
              sx={{
                textDecoration: 'none',
                color: '#1A1A1A',
                fontWeight:"600",
                fontSize:"16px",
                '&:hover': {
                  textDecoration: 'underline',
                  color: '#0085FF',  
                },
              }}
            >
              Contact
            </Typography>
          </Stack>
        <Stack sx={{display:{md:"flex", xs:"none"}}}>
          <Button variant='contained' disableElevation sx={{ fontWeight: 'bold', borderRadius: 2.5, backgroundColor:"#0085FF", boxShadow:"0px 16px 24px #0085FF29", textTransform:"none" }}>Sign Up</Button>    
        </Stack>         
      </Stack>
    </Stack>
}      
    </>
  )
}