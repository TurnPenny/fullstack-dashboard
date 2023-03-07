import React, { useState } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from 'components/Navbar';

const Layout = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <Box width='100%' height='100%'>
      <Box>
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
