import { AppBar, Toolbar, Typography, Switch } from '@material-ui/core'
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
    typographyStyles: {
        flex: 1,
    }
});

const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
}


function Header(props) {

    function getTotal(cart) {
        const total = cart.reduce((totalCost, item) => totalCost + item.price, 0);
        return total.toLocaleString(undefined, currencyOptions)
    }

    const classes = useStyles();
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography className={classes.typographyStyles}>This is the header {props.isDarkMode ? 'dark' : 'light'}</Typography>
                <Typography>Items: {props.cart.length} Total: ${getTotal(props.cart)}</Typography>
                <Switch checked={props.isDarkMode} onChange={props.changeMode} />
                <AcUnitRoundedIcon />
            </Toolbar>
        </AppBar>
    )
}

export default Header
