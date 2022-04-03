import { AppBar, Toolbar, Typography, Switch } from '@material-ui/core'
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
    typographyStyles: {
        flex: 1,
    }
});


function Header(props) {
    const classes = useStyles();
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography className={classes.typographyStyles}>This is the header {props.isDarkMode ? 'dark' : 'light'}</Typography>
                <Switch checked={props.isDarkMode} onChange={props.changeMode} />
                <AcUnitRoundedIcon />
            </Toolbar>
        </AppBar>
    )
}

export default Header
