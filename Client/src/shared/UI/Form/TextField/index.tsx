import * as React from 'react';
import TextField from 'material-ui/TextField';
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
    <TextField
      label={label}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  )

const TextFieldUI = (props: Props) => {
  const { ...rest } = props;
  return (
    <Field name={props.name} component={renderTextField} label={props.label} {...rest} />
  );
}

export default TextFieldUI;
