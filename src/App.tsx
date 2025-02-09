import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { theme } from './styles/theme';
import AppRoutes from './routes';
import AppLayout from './components/layout/AppLayout';
import '@mantine/core/styles.css';

function App() {
  return (
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <Router>
          <AppLayout>
            <AppRoutes />
          </AppLayout>
        </Router>
      </MantineProvider>
    </Provider>
  );
}

export default App;
