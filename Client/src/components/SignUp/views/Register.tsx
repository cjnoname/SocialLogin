import * as React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { ApplicationState } from '../../../store';
import { InitialState } from '../../../models/initial';
import { withStyles } from 'material-ui/styles';
import TextField from '../../../shared/UI/Form/TextField';
import Button from '../../../shared/UI/Button';

interface Props {
  dispatch: any,
  handleSubmit: any,
  error: any,
  initial: InitialState
}

const decorate = withStyles(({ mixins, spacing }) => ({
  marginTop: {
    marginTop: '1em'
  },
  button: {
    textAlign: 'right',
    width: '100%',
    marginTop: '2em'
  }
}));

const validate = (values: any) => {
  const errors: any = {};
  const requiredFields = [
    'firstName',
    'lastName',
    'mobile',
    'email',
    'password'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  })
  if (
    values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
}

const Register = decorate<Props>(({ dispatch, handleSubmit, error, classes, initial }) => {
  const labels = initial.signInContent!.signIn!.labels!;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.marginTop}>
          <TextField required name="firstName" label="First Name" fullWidth />
        </div>
        <div className={classes.marginTop}>
          <TextField required name="lastName" label="Last Name" fullWidth />
        </div>
        <div className={classes.marginTop}>
          <TextField required name="mobile" label="Mobile" fullWidth />
        </div>
        <div className={classes.marginTop}>
          <TextField required name="email" type="email" label="Email" fullWidth />
        </div>
        <div className={classes.marginTop}>
          <TextField required name="confirmedEmail" label="Confirm Email" fullWidth />
        </div>
        <div className={classes.marginTop}>
          <TextField required name="password" label="Password" fullWidth />
        </div>
        <div className={classes.button}>
          <Button label="Create Account" type="submit" fullWidth />
        </div>
      </form>
    </div>
  );
});

export default reduxForm({
  form: 'login',
  validate
})(connect(
  (state: ApplicationState) => state
)(Register as any) as any) as any;
