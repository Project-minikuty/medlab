import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import BackButton from './BackButton';

const drawerWidth = 240;
const navItems = ['Home', 'About'];

function BrandNav(props) {
  const navigate = useNavigate();

  const { window, showBackButton } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logout clicked');
    localStorage.clear();
    navigate('/lo');
  };

  const buttonStyle = {
    borderColor: '#498589',
    color: '#498589',
    fontWeight: 'bold',
    marginLeft: '30px',
    // Remove the hovering effect
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#498589',
      borderColor: '#498589',
    },
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MEDLAB
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <button className="btn btn-outline" onClick={handleLogout} style={buttonStyle}>
        Logout
      </button>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className="Navbar" sx={{ display: 'flex', zIndex: -1, mb: 0, height: 0 }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: 'transparent', boxShadow: 'none', mt: 0 }}>
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 12, display: { sm: 'none' }, mb: 0, zIndex: 1, mt: 0 }}
          >
            <MenuIcon />
          </IconButton>
          <img
            alt="logo"
            src={require('../images/MedlabLogo.png')}
            width="55"
            height="45"
            className="align-top nav-logo"
          />{'   '}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              paddingLeft: '10px',
              fontWeight: 'bold',
              color: 'black',
            }}
          >
            MEDLAB
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, color: '#498589' }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#498589', paddingLeft: '20px', paddingRight: '20px' }}>
                {item}
              </Button>
            ))}
            {showBackButton && <BackButton />}
            <button className="btn btn-outline" onClick={handleLogout} style={buttonStyle}>
              Logout
            </button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

BrandNav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
  showBackButton: PropTypes.bool,
};

function App() {
  return (
    <div>
      {/* Other component JSX */}
      <BrandNav showBackButton={true} />
      {/* Other component JSX */}
    </div>
  );
}

export default App;
