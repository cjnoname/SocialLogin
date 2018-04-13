import * as React from 'react';
import { withStyles, WithStyles } from 'material-ui/styles';
import * as classNames from 'classnames';
import { withRoot } from 'utils/withRoot';
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

const decorate = withStyles(({ breakpoints, mixins, palette, spacing }) => ({
  root: {
    height: '100%',
    zIndex: 1,
    overflow: 'hidden' as 'hidden',
    position: 'relative' as 'relative',
    width: '100%'
  },
  appBar: {
    position: 'absolute' as 'absolute',
    width: '100%',
    top: 0,
    left: 0,
    bottom: 0,
    right: -17,
    maxHeight: 60
  },
  toolbar: mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: palette.background.default,
    minHeight: `calc(100vh - 180px)`,
    width: '100%',
    display: 'inline-block'
  },
  contentPadding: {
    paddingTop: spacing.unit * 5,
    paddingBottom: spacing.unit * 5
  },
  logo: {
    maxHeight: 50
  },
  footer: {
    width: '100%',
    left: 0,
    bottom: 0,
    backgroundColor: '#444444',
    height: 100,
    color: '#ccc',
    textAlign: 'center' as 'center',
    lineHeight: '100px',
    verticalAlign: 'middle'
  },
  footerText: {
    color: '#ccc',
    '&:link': {
      color: '#ccc',
      textDecoration: 'none'
    },
    '&:visited': {
      color: '#ccc',
      textDecoration: 'none'
    },
    '&:focus': {
      color: '#ccc',
      textDecoration: 'none'
    },
    '&:hover': {
      color: '#ccc',
      textDecoration: 'underline'
    },
    '&:active': {
      color: '#ccc',
      textDecoration: 'underline'
    }
  },
  center: {
    display: 'flex',
    justifyContent: 'center' as 'center',
    height: '100%'
  },
  '@media (max-width: 28rem)': {
    contentPadding: {
      paddingTop: 0,
      paddingBottom: 0
    }
  }
}));

const MyLayout = decorate(
  class extends React.Component<WithStyles<'root' | 'appBar' | 'toolbar' | 'content' | 'logo' | 'footer' | 'footerText' | 'center' | 'contentPadding' | '@media (max-width: 28rem)'>, {}> {
    public render() {
      const { classes } = this.props;

      return (
        <div className={classes.root}>
          <div>
            <AppBar className={classes.appBar} >
              <Toolbar>
                <img src={`https://ticketek-assets.s3.amazonaws.com/images/ticketekMain.svg`} className={classes.logo} />
              </Toolbar>
            </AppBar>
          </div>
          <div className={classNames(classes.content, classes.contentPadding)}>
            <div className={classes.toolbar} />
            <div className={classes.center}>
              {this.props.children}
            </div>
          </div>
          <div className={classes.footer}>
            <a className={classes.footerText} href="http://premier.ticketek.com.au/Content/buyers/termsofsale.aspx">Terms &amp; conditions</a> | <a className={classes.footerText} href="http://premier.ticketek.com.au/Content/buyers/privacy.aspx">Privacy</a>
          </div>
        </div>
      );
    }
  }
);

export const Layout = withRoot(MyLayout);
