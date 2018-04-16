import * as React from 'react';
import { withStyles, WithStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { ApplicationState } from 'store';
import { RouteComponentProps } from 'react-router-dom';
import { Button, FacebookButton, GoogleButton } from 'UI/Button';

const decorate = withStyles(() => ({
}));

type Props =
  RouteComponentProps<{}>;

const SocialButtons = decorate(
  class extends React.PureComponent<Props & WithStyles<''>, {}> {
    public render() {
      return (
        <>
          <FacebookButton />
          <GoogleButton />
        </>
      );
    }
  }
);

export default connect(
  (state: ApplicationState) => ({
  })
)(SocialButtons as any) as any;
