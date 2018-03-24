import * as React from 'react';
import { withStyles, WithStyles } from 'material-ui/styles';
import { withRoot } from '../utils/withRoot';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';

const drawerWidth = 240;
const decorate = withStyles(({ breakpoints, mixins, palette, spacing }) => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden' as 'hidden',
    position: 'relative' as 'relative',
    display: 'flex',
    width: '100%'
  },
  appBar: {
    position: 'absolute' as 'absolute',
    marginLeft: drawerWidth,
    width: '100%',
    margin: 0
  },
  toolbar: mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: palette.background.default,
    minHeight: '500px'
  },
  logo: {
    maxHeight: 50
  },
  footer: {
    width: '100%',
    position: 'fixed' as 'fixed',
    left: 0,
    bottom: 0,
    backgroundColor: '#444444',
    height: '100px',
    color: '#ccc',
    textAlign: 'center',
    lineHeight: '100px',
    verticalAlign: 'middle'
  },
  text: {
    color: '#ccc',
    '&:link text': {
      color: '#ccc'
    },
    '&:visited text': {
      color: '#ccc'
    },
    '&:focus text': {
      color: '#ccc'
    },
    '&:hover text': {
      color: '#ccc'
    },
    '&:active text': {
      color: '#ccc'
    }
  },
  center: {
    display: 'flex',
    justifyContent: 'center' as 'center',
    height: '100%'
  }
}));

const MyLayout = decorate(
  class extends React.Component<WithStyles<'root' | 'appBar' | 'toolbar' | 'content' | 'logo' | 'footer' | 'text' | 'center'>, {}> {
    public render() {
      const { classes } = this.props;

      return (
        <div className={classes.root}>
          <AppBar className={classes.appBar} >
            <Toolbar>
              <img src={`https://ticketek-assets.s3.amazonaws.com/images/ticketekMain.svg`} className={classes.logo} />
            </Toolbar>
          </AppBar>
          <div className={classes.content}>
            <div className={classes.toolbar} />
            <div className={classes.center}>
              {this.props.children}
            </div>
            <div className={classes.footer}>
              <a className={classes.text} href='http://premier.ticketek.com.au/Content/buyers/termsofsale.aspx'>Terms &amp; conditions</a> | <a className={classes.text} href='http://premier.ticketek.com.au/Content/buyers/privacy.aspx'>Privacy</a>
            </div>
          </div>
        </div>
      );
    }
  }
);

export const Layout = withRoot(MyLayout);
