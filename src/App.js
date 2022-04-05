
import { Grid } from '@material-ui/core'
import Header from './Header';
import Content from './Content'
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core/';
import { useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'coffeeApp.darkmode'

const App = () => {

  const [darkMode, setDarkMode] = useState(true)
  const [cart, setCart] = useState([])

  function changeMode() {
    setDarkMode(!darkMode)
  }

  function showCart(cart) {
    setCart(cart)
  }

  // toggle darkmode
  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  })

  // local store on theme change
  useEffect(() => {
    const savedMode = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    setDarkMode(savedMode)
  }, [])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, darkMode)
  }, [darkMode])



  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Grid container direction='column'>
          <Grid item >
            <Header changeMode={changeMode} isDarkMode={darkMode} cart={cart} />
          </Grid>
          <Grid item container>
            <Grid item xs={false} sm={2}></Grid>
            <Grid item container xs={12} sm={8}>
              <Content showCart={showCart} />
            </Grid>
            <Grid item xs={false} sm={2}></Grid>
          </Grid>

        </Grid>
      </Paper>

    </ThemeProvider>
  );
}

export default App;
