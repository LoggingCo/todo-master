import TodoProvider from 'context/todoContext';
import { ThemeProvider } from 'styled-components';
import Routing from './routes/Routing';
import GlobalStyles from './styles/global';
import { theme } from './styles/theme';

function App() {
  return (
    <TodoProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routing />
      </ThemeProvider>
    </TodoProvider>
  );
}

export default App;
