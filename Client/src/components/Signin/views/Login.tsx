import * as React from 'react';
import { reduxForm, SubmissionError } from 'redux-form';
import { withStyles } from 'material-ui/styles';
import { reset } from 'redux-form';
import TextField from '../../../shared/UI/Form/TextField';
import Button from '../../../shared/UI/Button';

interface Props {
  dispatch: any,
  handleSubmit: any,
  error: any
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
  const errors: any = {}
  const requiredFields = [
    'email',
    'password'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const Login = decorate<Props>(({ dispatch, handleSubmit, error, classes }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.marginTop}>
          <TextField required name="email" type="email" label="Email" fullWidth />
        </div>
        <div className={classes.marginTop}>
          <TextField required name="password" type="password" label="Password" fullWidth />
        </div>
        <div className={classes.button}>
          <Button label="Verify" type="submit" fullWidth />
        </div>
        <div className={classes.marginTop}>
          {error && <strong>{error}</strong>}
        </div>
      </form>
    </div>
  );
});

export default reduxForm({
  form: 'oAuthSearchBar',
  validate
})(Login as any) as any;
