import React from 'react'
import { Box, Slider, TextField } from '@mui/material';
import MapComponent from '../component/MapComponent';
// import { AccountCircle, } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';

const SerachBar = () => {
  return (
    <Box sx={{ border: '1px solid gray', padding: '8px', borderRadius: '50px', position: 'relative',marginBottom:'18px' }}>
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <SearchIcon sx={{ color: 'yellow', mr: 1, my: 0.5, pointerEvents: 'none' }} />
      <TextField
        id="input-with-sx"
        variant="standard"
        InputLabelProps={{ shrink: false }}  // Prevent label shrink
        InputProps={{
          readOnly: true,  // Make the TextField read-only
          // disabled: true,  // Make the TextField disabled
          style: {
            border: 'none !important',  // Remove the border
            outline: 'none !important',  // Remove the outline
            boxShadow: 'none !important',  // Remove the box shadow
            pointerEvents: 'none !important',   // Make the TextField unclickable
            color: 'white !important',
          },
        }}
        value="Los  Angles" 
      />
    </Box>
  </Box>
  )
}

export default SerachBar
