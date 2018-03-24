import * as React from 'react';
import { Button } from 'material-ui';

interface Props {
  label: string,
  [rest: string]: any
}

export default (props: Props) => {
  const { label, ...rest } = props;
  return (
    <Button color="primary" variant="raised" {...rest}>{props.label}</Button>
  );
}
