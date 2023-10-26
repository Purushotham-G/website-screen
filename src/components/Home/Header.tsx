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

export const Header = () => {
  const { t } = useTranslation();
    const isMobile = useMediaQuery({ maxWidth: 786 });

    //  local state
    const [active, setActive] = useState(0);

    //  refs
  const currentPageRef = useRef(1);

    //  handle tabs
  const handleTabChange = (e: any, newTab: number) => {
    currentPageRef.current = 1;
    setActive(newTab);
  }
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
    <Container sx={{width:"1220px !important"}}>
      <Stack sx={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", py:4 }}>
        <Stack sx={{ flexDirection:"row", alignItems:"center",gap:{md:2, xs:1}}}>
          <img width="53px" height="42px" alt='avocado icon' src={getAssetUrl('avocado.svg')} />
          <Typography sx={{fontSize:"32px", fontWeight:"700"}}>Avocado</Typography>
        </Stack>
        <Tabs
          data-testid="rules-type-filter"
          value={active}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          sx={{ '.MuiTabs-flexContainer': { gap: 6 } }}
        >
          <Tab data-testid="active-rules" label="Home" sx={{ textTransform: 'none', p: 1, minWidth: 'auto', fontWeight:"600", color:"#1A1A1A" }} />
          <Tab data-testid="disabled-rules" label="Services" sx={{ textTransform: 'none', p: 1, minWidth: 'auto', fontWeight:"600", color:"#1A1A1A" }} />
          <Tab data-testid="disabled-rules" label="About" sx={{ textTransform: 'none', p: 1, minWidth: 'auto', fontWeight:"600", color:"#1A1A1A" }} />
          <Tab data-testid="disabled-rules" label="Testimonials" sx={{ textTransform: 'none', p: 1, minWidth: 'auto', fontWeight:"600", color:"#1A1A1A" }} />
        </Tabs>
        <Stack sx={{display:{md:"flex", xs:"none"}}}>
          <Button variant='contained' disableElevation sx={{ fontWeight: 'bold', borderRadius: 2.5, backgroundColor:"#0085FF", boxShadow:"0px 16px 24px #0085FF29" }}>Sign Up</Button>    
        </Stack>         
      </Stack>
    </Container>
}      
    </>
  )
}
