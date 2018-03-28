import * as React from 'react';
import Checkbox from 'material-ui/Checkbox';
import { Field } from 'redux-form';
import { FormControlLabel } from 'material-ui/Form';

interface Props {
  name: string,
  label: string,
  [rest: string]: any
}

const renderCheckbox = ({ input, label }: any) => {
  return (<FormControlLabel
    control={
      <Checkbox
        defaultChecked={input.value === true}
        onChange={input.onChange}
        color="primary"
      />
    }
    label={label}
  />)
}

const CheckboxUI = (props: Props) => {
  const { ...rest } = props;
  return (
    <Field name={props.name} component={renderCheckbox} label={props.label} {...rest} />
  );
}

export default CheckboxUI;
