import * as React from 'react';
import { withStyles } from 'material-ui/styles';
import Checkbox from 'material-ui/Checkbox';
import { FormControlLabel, FormControl, FormHelperText } from 'material-ui/Form';

const decorate = withStyles(() => ({
  root: {
    display: 'block',
  }
}));

interface Props {
  input: any,
  label: string,
  invalid: boolean,
  error: string,
  [rest: string]: any
}

const CheckboxAdornment = decorate<Props>(({ input, label, invalid, error, classes, ...rest }) => (
  <FormControl className={classes.root}>
    <FormControlLabel
      control={
        <Checkbox
          defaultChecked={input.value === true}
          color="primary"
          onBlur={input.onBlur}
          onChange={input.onChange}
          {...rest}
        />
      }
      label={label}
    />
    <FormHelperText error={invalid}>{error}</FormHelperText>
  </FormControl>
)
);

export default CheckboxAdornment;
