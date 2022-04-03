
import { Grid } from '@material-ui/core'
import Header from './Header';
import Content from './Content'
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { Paper, Switch } from '@material-ui/core/';
import { useState } from 'react';

const App = () => {

  const [darkMode, setDarkMode] = useState(true)

  function changeMode() {
    setDarkMode(!darkMode)
  }

  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Grid container direction='column'>
          <Grid item >
            <Header changeMode={changeMode} isDarkMode={darkMode} />
          </Grid>
          <Grid item container>
            <Grid xs={false} sm={2}></Grid>
            <Grid xs='12' sm='8'>
              <Content />
            </Grid>
            <Grid xs={false} sm={2}></Grid>
          </Grid>

        </Grid>
      </Paper>

    </ThemeProvider>
  );
}

export default App;
