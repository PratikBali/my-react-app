import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { store } from './app/store';
import theme from './theme/theme';
import { FormattedMessage } from 'react-intl';


const App: React.FC = () => {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="p-4">
          <Typography variant="h4" className="text-blue-600">
            <FormattedMessage id="common_descriptor.welcome" />
          </Typography>
          <Typography variant="body1">
            <FormattedMessage id="common_descriptor.greeting" values={{name:'Pratik'}} />
          </Typography>
        </div>
      </ThemeProvider>
    </Provider>
  );
};

export default App;