import { Button as MuiButton, withStyles } from '@material-ui/core';

export const Button = withStyles({
  root: {
    boxShadow: 'none',
    height: '48px',
    padding: '0 32px',
    borderRadius: 0,
    '&:hover': {
      boxShadow: 'none',
    },
  },
})(MuiButton);
