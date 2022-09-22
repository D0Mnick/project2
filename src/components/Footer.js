import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo-1.png'
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#424242">
    <Stack gap="40px"  alignItems='center' px="50px" pt="40px">
<img src ={Logo} alt="logo" width="200px" height="40px"></img>
<Typography variant='h5' pb="40px" mt="40px">
Dominick P. Salazar  &  Mark Joseph Destriza

</Typography>
    </Stack>

    </Box>
  )
}

export default Footer