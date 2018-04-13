import * as React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { FormGroup } from 'material-ui/Form';
import { ApplicationState } from 'store';
import { CustomerOptInItem, CustomerConsentItem, SignUpContent } from 'models/initial';
import { ISignUpRequest } from 'models/signUp';
import { withStyles } from 'material-ui/styles';
import { TextField, Password, Checkbox } from 'UI/Form';
import { Button } from 'UI/Button';
import { phoneNumber } from 'utils/formValidation';

interface Props {
  dispatch: any,
  handleSubmit: () => {},
  error: any,
  submitting: boolean,
  pristine: boolean,
  invalid: boolean,
  signUpContent: SignUpContent
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

const validate = (values: ISignUpRequest) => {
  const errors: any = {};
  const requiredFields = [
    'firstName',
    'lastName',
    'mobile',
    'email',
    'confirmedEmail',
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
  if (values.confirmedEmail && values.email && values.confirmedEmail.toLowerCase() !== values.email.toLowerCase()) {
    errors.confirmedEmail = 'Confirmation email must match the email you entered above';
  }
  if (values.consentItems) {
    errors.consentItems = [];
    (values.consentItems!).forEach(item => {
      if (!item) {
        errors.consentItems[values.consentItems!.indexOf(item)] = 'Required';
      }
    });
  }
  return errors;
};

let Register = decorate<Props>(({ dispatch, handleSubmit, error, classes, signUpContent, submitting, pristine, invalid }) => {
  const optInItems = signUpContent.customerOptInItems!;
  const consentItems = signUpContent.customerConsentItems!;

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
          <TextField required validate={phoneNumber} name="mobile" label="Mobile" fullWidth />
        </div>
        <div className={classes.marginTop}>
          <TextField required name="email" type="email" label="Email" fullWidth />
        </div>
        <div className={classes.marginTop}>
          <TextField required name="confirmedEmail" label="Confirm Email" fullWidth />
        </div>
        <div className={classes.marginTop}>
          <Password required name="password" label="Password" fullWidth />
        </div>

        <FormGroup>
          <div className={classes.marginTop}>
            {optInItems.map((optInItem: CustomerOptInItem) => {
              return (
                <div className={classes.marginTop} key={`optInItems${optInItems.indexOf(optInItem)}`}>
                  <Checkbox label={optInItem.label} name={`optInItems[${optInItems.indexOf(optInItem)}]`} />
                </div>
              );
            })}
          </div>
          <div className={classes.marginTop}>
            {consentItems.map((consentItem: CustomerConsentItem) => {
              return (
                <div className={classes.marginTop} key={`consentItems${consentItems.indexOf(consentItem)}`}>
                  <Checkbox label={consentItem.label} name={`consentItems[${consentItems.indexOf(consentItem)}]`} required />
                </div>
              );
            })}
          </div>
        </FormGroup>

        <div className={classes.button}>
          <Button label="Create Account" type="submit" className={classes.buttonColor} disabled={submitting || pristine || invalid} fullWidth />
        </div>
      </form>
    </div>
  );
});

Register = reduxForm({
  form: 'register',
  validate,
  enableReinitialize: true,
  touchOnChange: true
})(Register as any) as any;

export default connect(
  (state: ApplicationState) => ({
    initialValues: {
      optInItems: state.initial.signUpContent!.customerOptInItems!.map(x => x.defaultValue).toArray(),
      consentItems: state.initial.signUpContent!.customerConsentItems!.map(x => x.defaultValue).toArray()
    },
    signUpContent: state.initial.signUpContent!
  })
)(Register as any) as any;
