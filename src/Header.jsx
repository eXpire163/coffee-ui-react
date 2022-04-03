import { AppBar, Toolbar, Typography } from '@material-ui/core'
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
    typographyStyles:{
        flex: 1,
    }
});


function Header() {
  const classes = useStyles();
  return (
    <AppBar position='static'>
        <Toolbar>
              <Typography className={classes.typographyStyles}>This is the header</Typography>
            <AcUnitRoundedIcon />
        </Toolbar>
    </AppBar>
  )
}

export default Header
