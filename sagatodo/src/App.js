import { Provider } from 'react-redux';
import createConfig from 'store/store';
import { ThemeProvider } from 'styled-components';
import Routing from './routes/Routing';
import GlobalStyles from './styles/global';
import { theme } from './styles/theme';

function App() {
  const store = createConfig();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routing />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
