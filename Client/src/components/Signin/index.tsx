import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { withStyles, WithStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import { ApplicationState } from '../../store';
import { Typography } from '../../shared/UI/Tabs';
import Login from './views/Login';
import { SignInState, ISignInRequest } from '../../models/signIn';
import { actionCreators } from './actions';
import Spinner from '../../shared/UI/Spinner';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

const decorate = withStyles(({ mixins, spacing }) => ({
  parent: {
    height: '100%',
    width: '100%',
    maxWidth: '500px'
  },
  paper: mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: spacing.unit * 3
  }),
  marginTop20: {
    marginTop: '20px'
  },
  text: {
    marginTop: '20px',
    width: '100%',
    textAlign: 'center'
  }
}));

type Props =
  ApplicationState
  & typeof actionCreators
  & RouteComponentProps<{}>;

const SignIn = decorate(
  class extends React.PureComponent<Props & WithStyles<'parent' | 'paper' | 'marginTop20' | 'text'>, {}> {

    submit = (values: ISignInRequest) => {
      // this.props.getOAuthAction(values);
    }

    public render() {
      const { classes, signIn: { isLoading }, initial } = this.props;
      const signInContent = initial.signInContent!;
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
            {signInContent.signIn!.labels!.forgotPassword}
          </div>
          <div className={classes.text}>
            {signInContent.signIn!.labels!.createProfile}
          </div>
        </Paper>
      </div>;
    }
  }
);

export default connect(
  (state: ApplicationState) => state,
  actionCreators
)(SignIn as any) as any;
