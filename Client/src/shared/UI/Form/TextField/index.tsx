import * as React from 'react';
import * as MaterialUI from 'material-ui';
import { Field } from 'redux-form';

interface Props {
  name: string,
  label: string,
  [rest: string]: any
}

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}: any) => (
    <MaterialUI.TextField
      label={label}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  )

const TextField = (props: Props) => {
  const { ...rest } = props;
  return (
    <Field name={props.name} component={renderTextField} label={props.label} {...rest} />
  );
}

export default TextField;
