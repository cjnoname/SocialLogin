import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { withStyles, WithStyles } from 'material-ui/styles';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';
import IconButton from 'material-ui/IconButton';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';

const decorate = withStyles(({ spacing }) => ({
  textField: {
    flexBasis: 200
  }
}));

interface PropTypes {
  label: string,
  required: boolean,
  helperText: string,
  [rest: string]: any
}

type Props =
  PropTypes &
  RouteComponentProps<{}>;

const PasswordAdornment = decorate(
  class extends React.PureComponent<Props & WithStyles<'textField'>, {}> {
    public state = {
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    };

    public render() {
      const { classes, label, required, fullWidth, helperText, ...rest } = this.props;
      return (
        <FormControl error={this.props.error} className={classes.textField} fullWidth={fullWidth} required={required}>
          <InputLabel required={required}>{label}</InputLabel>
          <Input
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            onChange={this.handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPasssword}
                  onMouseDown={this.handleMouseDownPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            {...rest}
          />
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
      );
    }

    private handleChange = (prop: any) => (event: any) => {
      this.setState({ [prop]: event.target.value });
    }

    private handleMouseDownPassword = (event: any) => {
      event.preventDefault();
    }

    private handleClickShowPasssword = () => {
      this.setState({ showPassword: !this.state.showPassword });
    }
  }
);

export default PasswordAdornment;
