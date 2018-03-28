import * as React from 'react';
import { NavLink, RouteComponentProps, Redirect } from 'react-router-dom';
import { withStyles, WithStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import { Typography } from '../../shared/UI/Tabs';
import Login from './views/Login';
import { ISignInRequest } from '../../models/signIn';
import { SignInContent } from '../../models/initial/signIn'
import { signInActions } from './actions';
import Spinner from '../../shared/UI/Spinner';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

const decorate = withStyles(({ mixins, spacing }) => ({
  parent: {
    height: '100%',
    width: '100%',
    maxWidth: 500
  },
  paper: mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: spacing.unit * 5
  }),
  marginTop20: {
    marginTop: 20
  },
  text: {
    marginTop: 20,
    width: '100%',
    textAlign: 'center'
  }
}));

interface PropItems {
  isLoading: boolean,
  signInContent: SignInContent
}

type Props =
  PropItems
  & typeof signInActions
  & RouteComponentProps<{}>;

const SignIn = decorate(
  class extends React.PureComponent<Props & WithStyles<'parent' | 'paper' | 'marginTop20' | 'text'>, {}> {

    submit = (values: ISignInRequest) => {
      this.props.signInAction(values);
    }

    public render() {
      const { classes, isLoading, signInContent } = this.props;
      return <div className={classes.parent}>
        <Spinner loading={isLoading} />
        <Paper className={classes.paper} elevation={4}>
          <Typography variant="headline" component="h2">
            Sign In
          </Typography>
          <Divider className={classes.marginTop20} />
          <Login onSubmit={this.submit} />
          <Divider className={classes.marginTop20} />
          <div className={classes.text}>
            <a href='https://premier.ticketek.com.au/membership/ForgotPassword.aspx'>{signInContent.signIn!.labels!.forgotPassword}</a>
          </div>
          <div className={classes.text}>
            <NavLink to='/signup'>{signInContent.signIn!.labels!.createProfile}</NavLink>
          </div>
        </Paper>
      </div>;
    }
  }
);

export default connect(
  (state: ApplicationState) => ({
    isLoading: state.signIn.isLoading,
    signInContent: state.initial.signInContent!
  }),
  signInActions
)(SignIn as any) as any;
