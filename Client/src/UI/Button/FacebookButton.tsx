import * as React from 'react';
import * as classNames from 'classnames';
import { withStyles, WithStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { ApplicationState } from 'store';
import { RouteComponentProps } from 'react-router-dom';
import { Button } from 'UI/Button';
import { SocialButton } from './style';

const decorate = withStyles(() => ({
  buttonContainer: SocialButton.buttonContainer,
  button: SocialButton.button,
  facebook: {
    background: '#4267B2'
  }
}));

declare let FB: any;

type Props =
  RouteComponentProps<{}>;

const SocialButtons = decorate(
  class extends React.PureComponent<Props & WithStyles<'buttonContainer' | 'button' | 'facebook'>, {}> {
    public componentDidMount() {
      document.addEventListener('facebookinit', this.initializeFacebookLogin);
    }

    public componentWillUnmount() {
      document.removeEventListener('facebookinit', this.initializeFacebookLogin);
    }

    public render() {
      const { classes } = this.props;
      return (
        <div className={classes.buttonContainer}>
          <Button label="Continue with Facebook" className={classNames(classes.button, classes.facebook)} onClick={this.facebookLogin} fullWidth />
        </div>
      );
    }

    private initializeFacebookLogin = () => {
      this.checkFacebookLoginStatus();
    }

    private checkFacebookLoginStatus = () => {
      if (!FB) { return; }
      FB.getLoginStatus(this.facebookLoginHandler);
    }

    private facebookLogin = () => {
      if (!FB) { return; }

      // FB.getLoginStatus((response: any) => {
      // if (response.status === 'connected') {
      //   this.facebookLoginHandler(response);
      // } else {
      FB.login(this.facebookLoginHandler, { scope: 'public_profile' });
      //   }
      // }, null);
    }

    private facebookLoginHandler = (response: any) => {
      if (response.status === 'connected') {
        FB.api('/me', (userData: any) => {
          const result = {
            ...response,
            user: userData
          };
          // console.log(result);
          // this.props.onLogin(true, result);
        });
      } else {
        // this.props.onLogin(false);
      }
    }
  }
);

export default connect(
  (state: ApplicationState) => ({
  })
)(SocialButtons as any) as any;
