import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';

export default function SnackbarInfo() {
  return (
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center'}}
        open={true}
        message="Success" 
      />
  );
}