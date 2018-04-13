import * as React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { ApplicationState } from 'store';
import { Labels } from 'models/initial/signIn';
import { withStyles } from 'material-ui/styles';
import { TextField, Password } from 'UI/Form';
import { Button } from 'UI/Button';

interface Props {
  dispatch: any,
  handleSubmit: () => {},
  pristine: boolean,
  submitting: boolean,
  invalid: boolean,
  error: any,
  labels: Labels
}

const decorate = withStyles(({ mixins, spacing }) => ({
  marginTop: {
    marginTop: '1em'
  },
  button: {
    textAlign: 'right' as 'right',
    width: '100%',
    marginTop: '2em'
  },
  buttonColor: {
    color: '#fff'
  }
}));

const validate = (values: any) => {
  const errors: any = {};
  const requiredFields = [
    'email',
    'password'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (
    values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

let Login = decorate<Props>(({ dispatch, handleSubmit, pristine, invalid, submitting, error, classes, labels }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <div className={classes.marginTop}>
        <TextField required name="email" type="email" label={labels.email} fullWidth />
      </div>
      <div className={classes.marginTop}>
        <Password required name="password" label={labels.password} fullWidth />
      </div>
      <div className={classes.button}>
        <Button label={labels.signInButton} type="submit" className={classes.buttonColor} disabled={submitting || pristine || invalid} fullWidth />
      </div>
    </form>
  </div>
));

Login = reduxForm({
  form: 'login',
  validate,
  enableReinitialize: true
})(Login as any) as any;

export default connect(
  (state: ApplicationState) => ({
    labels: state.initial.signInContent!.signIn!.labels!
  })
)(Login as any) as any;
