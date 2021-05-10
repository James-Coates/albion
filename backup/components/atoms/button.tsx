import { Button as MuiButton, withStyles } from '@material-ui/core';

export const Button = withStyles({
  root: {
    boxShadow: 'none',
    height: '40px',
    padding: '0 24px',
    borderRadius: 0,
    '&:hover': {
      boxShadow: 'none',
    },
  },
})(MuiButton);
