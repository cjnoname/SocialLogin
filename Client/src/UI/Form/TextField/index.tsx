import * as React from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import { Field } from 'redux-form';

interface Props {
  name: string,
  label: string,
  [rest: string]: any
}

const renderTextField = ({
  input,
  label,
  fullWidth,
  meta: { touched, error, invalid },
  ...custom
}: any) => (
    <FormControl error={touched && invalid} fullWidth={fullWidth}>
      <InputLabel>{label}</InputLabel>
      <Input {...input} {...custom} />
      <FormHelperText>{touched && error}</FormHelperText>
    </FormControl>
  );

const TextFieldUI = (props: Props) => {
  const { ...rest } = props;
  return (
    <Field name={props.name} component={renderTextField} label={props.label} {...rest} />
  );
};

export default TextFieldUI;
