import * as React from 'react';
import { NavLink, RouteComponentProps } from 'react-router-dom';
import { withStyles, WithStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import { ApplicationState } from '../../store';
import { Typography } from '../../shared/UI/Tabs';
import Register from './views/Register';
import { SignUpState, ISignUpRequest } from '../../models/signup';
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
    marginTop: spacing.unit * 5
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

const SignUp = decorate(
  class extends React.Component<Props & WithStyles<'parent' | 'paper' | 'marginTop20' | 'text'>, {}> {

    submit = (values: ISignUpRequest) => {
      this.props.signUpAction(values);
    }

    public render() {
      const { classes, signIn: { isLoading }, initial } = this.props;
      const signInContent = initial.signInContent!;
      return <div className={classes.parent}>
        <Spinner loading={isLoading} />
        <Paper className={classes.paper} elevation={4}>
          <Typography variant="headline" component="h2">
            Create an account
          </Typography>
          <Divider className={classes.marginTop20} />
          <Register onSubmit={this.submit} />
          <Divider className={classes.marginTop20} />
          <div className={classes.text}>
            <NavLink to='/signin'>Already have an account?</NavLink>
          </div>
        </Paper>
      </div>;
    }
  }
);

export default connect(
  (state: ApplicationState) => state,
  actionCreators
)(SignUp as any) as any;
