import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { getTheme } from '../shared/theme';

// A theme with custom primary and secondary color.
// It's optional.
const Component = React.Component;

function withRoot(Component: any) {
  function WithRoot(props: any) {
    return (
      <MuiThemeProvider theme={getTheme(((window as any).theme))}>
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export { withRoot };
