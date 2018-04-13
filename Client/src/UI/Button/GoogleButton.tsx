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
  google: {
    background: 'white',
    color: '#666'
  }
}));

declare let GoogleAuth: any;

type Props =
  RouteComponentProps<{}>;

const SocialButtons = decorate(
  class extends React.PureComponent<Props & WithStyles<'buttonContainer' | 'button' | 'google'>, {}> {
    private button?: HTMLButtonElement;

    public componentDidMount() {
      document.addEventListener('googleinit', this.initializeGoogleLogin);
    }

    public componentWillUnmount() {
      document.removeEventListener('googleinit', this.initializeGoogleLogin);
    }

    public render() {
      const { classes } = this.props;
      return (
        <div className={classes.buttonContainer}>
          <Button label="Continue with Google" className={classNames(classes.button, classes.google)} fullWidth onClick={this.googleSignIn} />
        </div>
      );
    }

    private initializeGoogleLogin = () => {
        // GoogleAuth.isSignedIn.listen(this.updateSigninStatus);
        // this.updateSigninStatus(GoogleAuth.isSignedIn.get());
    }

    private updateSigninStatus = (isSignedIn: any) => {
      // console.log('isSignedIn', isSignedIn);
      // console.log('GoogleAuth.isSignedIn.get()', gapi.auth2.getAuthInstance().isSignedIn.get());
    }

    private googleSignIn = async () => {
      const res = await GoogleAuth.signIn();
      // console.log(res);
    }
  }
);

export default connect(
  (state: ApplicationState) => ({
  })
)(SocialButtons as any) as any;
