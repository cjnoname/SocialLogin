import * as React from 'react';
import { NavLink, RouteComponentProps } from 'react-router-dom';
import { withStyles, WithStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import { ApplicationState } from '../../store';
import { Typography } from '../../shared/UI/Tabs';
import Register from './views/Register';
import { SignUpState, ISignUpRequest } from '../../models/signup';
import { SignInContent } from '../../models/initial';
import { signUpActions } from './actions';
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
  & typeof signUpActions
  & RouteComponentProps<{}>;

const SignUp = decorate(
  class extends React.PureComponent<Props & WithStyles<'parent' | 'paper' | 'marginTop20' | 'text'>, {}> {

    submit = (values: ISignUpRequest) => {
      this.props.signUpAction(values);
    }

    public render() {
      const { classes, isLoading } = this.props;
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
  (state: ApplicationState) => ({
    isLoading: state.signUp.isLoading
  }),
  signUpActions
)(SignUp as any) as any;
