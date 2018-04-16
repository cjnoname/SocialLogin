import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from 'store';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { getTheme } from 'shared/theme';
import { Theme } from 'models/initial';

// A theme with custom primary and secondary color.
// It's optional.
const Component = React.Component;

function withRoot(Component: any) {
  function WithRoot(props: any) {
    return (
      <MuiThemeProvider theme={getTheme(new Theme((window as any).theme))}>
        <Component {...props} />
      </MuiThemeProvider>
    );
  }
  return WithRoot;
  // return connect(
  //   (state: ApplicationState) => ({
  //     theme: state.initial.values!.theme
  //   })
  // )(WithRoot);
}

export { withRoot };
