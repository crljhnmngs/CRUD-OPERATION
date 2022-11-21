import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <React.Fragment>
    <Box sx={{ flexGrow: 1, '& .MuiToolbar-root':{
        bgcolor: '#FF0000'
    } }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Employee
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </React.Fragment>
  );
}
