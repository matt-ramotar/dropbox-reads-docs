import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import HttpsRedirect from 'react-https-redirect';
import Docs from './Docs';
import theme from './theme';


function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HttpsRedirect>
          <Docs />
        </HttpsRedirect>
      </ThemeProvider>
    </div>
  );
}

export default App;
