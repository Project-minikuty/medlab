import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

const navItems = ['Home', 'About', 'Contact'];

const buttonStyle = {
  borderColor: "#498589",
  color: "#498589",
  fontWeight: "bold",
  marginLeft: '30px',
  // Remove the hovering effect
  "&:hover": {
    backgroundColor: "transparent",
    color: "#498589",
    borderColor: "#498589",
  },
};

const Sidebar = ({ handleLogout }) => (
  <Box sx={{ textAlign: 'center' }}>
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
    <Button
      className="btn btn-outline"
      onClick={handleLogout}
      style={buttonStyle}
    >
      Logout
    </Button>
  </Box>
);

export default Sidebar;
