import { ThemeProvider } from 'styled-components';
import Routing from './routes/Routing';
import GlobalStyles from './styles/global';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routing />
    </ThemeProvider>
  );
}

export default App;
