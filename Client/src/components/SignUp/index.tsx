import * as React from 'react';
import { NavLink, RouteComponentProps } from 'react-router-dom';
import { withStyles, WithStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import { ApplicationState } from 'store';
import { Typography } from 'UI/Tabs';
import Register from './views/SignUpForm';
import { SignUpState, ISignUpRequest } from 'models/signup';
import { SignInContent } from 'models/initial';
import { signUpActions } from './actions';
import Spinner from 'UI/Spinner';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import SocialButtons from 'shared/Components/SocialButtons';
import { getPageTitle } from 'utils/getPageTitle';

const decorate = withStyles(({ mixins, spacing }) => ({
  parent: {
    height: '100%',
    width: '100%',
    maxWidth: 500
  },
  paper: mixins.gutters({
    paddingTop: 25,
    paddingBottom: 25
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
}));

interface PropTypes {
  isLoading: boolean,
  signInContent: SignInContent
}

type Props =
  PropTypes
  & typeof signUpActions
  & RouteComponentProps<{}>;

const SignUp = decorate(
  class extends React.PureComponent<Props & WithStyles<'parent' | 'paper' | 'marginTop20' | 'text' | 'urlText'>, {}> {
    public componentDidMount() {
      document.title = getPageTitle('Sign Up');
    }

    public render() {
      const { classes, isLoading } = this.props;
      return (
        <div className={classes.parent}>
          <Spinner loading={isLoading} />
          <Paper className={classes.paper} elevation={4}>
            <Typography variant="headline" component="h2">
              Create an account
          </Typography>
            <SocialButtons />
            <Divider className={classes.marginTop20} />
            <Register onSubmit={this.submit} />
            <Divider className={classes.marginTop20} />
            <div className={classes.text}>
              <NavLink to="/signin" className={classes.urlText}>Already have an account?</NavLink>
            </div>
          </Paper>
        </div>
      );
    }

    private submit = (values: ISignUpRequest) => {
      this.props.signUpAction(values);
    }
  }
);

export default connect(
  (state: ApplicationState) => ({
    isLoading: state.signUp.isLoading
  }),
  signUpActions
)(SignUp as any) as any;
