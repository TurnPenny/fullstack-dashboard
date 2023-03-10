import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
} from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import profileImage from 'assets/profile.jpg';
import FlexBetween from 'components/FlexBetween';
import { navItems } from './data';

const Sidebar = ({
  isNonMobile,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState('');
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);
  return (
    <Box component='nav'>
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          variant='persistent'
          anchor='left'
          sx={{
            width: drawerWidth,
            '& .MuiDrawer-paper': {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: 'border-box',
              borderWidth: isNonMobile ? 0 : '2px',
              width: drawerWidth,
            },
          }}
          onClose={() => setIsSidebarOpen(false)}
        >
          <Box width='100%'>
            <Box m='1.5rem 2rem 2rem 3rem'>
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display='flex' alignItems='center' gap='0.5rem'>
                  <Typography>EcomVision</Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography
                      key={text + icon}
                      sx={{ m: '2.25rem 0 1rem 3rem' }}
                    >
                      {text}
                    </Typography>
                  );
                }
                const lowerText = text.toLowerCase();
                return (
                  <ListItem key={text + icon} disablePadding>
                    <ListItemButton
                      sx={{
                        backgroundColor:
                          active === lowerText
                            ? theme.palette.secondary[300]
                            : 'transparent',
                        color:
                          active === lowerText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                      onClick={() => {
                        navigate(`/${lowerText}`);
                        setActive(lowerText);
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: '2rem',
                          color:
                            active === lowerText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lowerText && (
                        <ChevronRightOutlined
                          sx={{
                            ml: 'auto',
                          }}
                        />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
