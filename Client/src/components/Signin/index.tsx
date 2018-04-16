import * as React from 'react';
import { NavLink, RouteComponentProps, Redirect } from 'react-router-dom';
import * as classNames from 'classnames';
import { withStyles, WithStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { ApplicationState } from 'store';
import { Typography } from 'UI/Tabs';
import Login from './views/SignInForm';
import { ISignInRequest } from 'models/signIn';
import { SignInContent } from 'models/initial/signIn';
import { signInActions } from './actions';
import Spinner from 'UI/Spinner';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import SocialButtons from 'shared/Components/SocialButtons';
import { getPageTitle } from 'utils/getPageTitle';
import LockIcon from 'material-ui-icons/Lock';

const decorate = withStyles(({ mixins, palette }) => ({
  parent: {
    height: '100%',
    width: '100%',
    maxWidth: 500
  },
  paper: mixins.gutters({
    paddingTop: 25,
    paddingBottom: 25,
  }),
  marginTop20: {
    marginTop: 20
  },
  text: {
    marginTop: 20,
    width: '100%',
    textAlign: 'center' as 'center'
  },
  urlText: {
    fontSize: '1rem',
    fontWeight: 600 as 600,
    '&:link': {
      color: '#666',
      textDecoration: 'none'
    },
    '&:visited': {
      color: '#666',
      textDecoration: 'none'
    },
    '&:focus': {
      color: '#666',
      textDecoration: 'none'
    },
    '&:hover': {
      color: '#666',
      textDecoration: 'underline'
    },
    '&:active': {
      color: '#666',
      textDecoration: 'underline'
    }
  },
  forgotPassword: {
    fontSize: '0.875rem',
    fontWeight: 400 as 400
  },
  icon: {
    verticalAlign: 'bottom' as 'bottom',
    color: palette.primary.main,
    fontSize: 20
  }
}));

interface PropTypes {
  isLoading: boolean,
  signInContent: SignInContent
}

type Props =
  PropTypes
  & typeof signInActions
  & RouteComponentProps<{}>;

const SignIn = decorate(
  class extends React.PureComponent<Props & WithStyles<'parent' | 'paper' | 'marginTop20' | 'text' | 'urlText' | 'forgotPassword' | 'icon'>, {}> {
    public componentDidMount() {
      document.title = getPageTitle('Sign In');
    }

    public submit = (values: ISignInRequest) => {
      // console.log(values);
      this.props.signInAction(values);
    }

    public render() {
      const { classes, isLoading, signInContent } = this.props;
      return (
        <div className={classes.parent}>
          <Spinner loading={isLoading} />
          <Paper className={classes.paper} elevation={4}>
            <Typography variant="headline" component="h2">
              Sign In
            </Typography>
            <SocialButtons />
            <Divider className={classes.marginTop20} />
            <Login onSubmit={this.submit} />
            <Divider className={classes.marginTop20} />
            <div className={classes.text}>
              <a href="https://premier.ticketek.com.au/membership/ForgotPassword.aspx" className={classNames(classes.urlText, classes.forgotPassword)}>
                <LockIcon className={classes.icon} />&nbsp;{signInContent.signIn!.labels!.forgotPassword}
              </a>
            </div>
            <div className={classes.text}>
              <NavLink to="/signup" className={classes.urlText}>{signInContent.signIn!.labels!.createProfile}</NavLink>
            </div>
          </Paper>
        </div>
      );
    }
  }
);

export default connect(
  (state: ApplicationState) => ({
    isLoading: state.signIn.isLoading,
    signInContent: state.initial.values!.signInContent!
  }),
  signInActions
)(SignIn as any) as any;
