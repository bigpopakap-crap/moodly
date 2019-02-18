import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import classnames from 'classnames';
import Navbutton from './Navbutton/Navbutton';
import styles from './Navbar.module.scss';

export enum NavbarPosition {
  TOP = 'top',
  BOTTOM = 'bottom'
}

interface Props {
  position: NavbarPosition;
}

export default class Navbar extends Component<Props> {
  public render() {
    const isNavbarBottom = this.props.position === NavbarPosition.BOTTOM;
    const navbarPositionClassNames = { [styles['navbar--bottom']]: isNavbarBottom };

    return (
      <AppBar className={classnames(styles.Navbar, navbarPositionClassNames)}>
        <Toolbar>
          {/* Not all routes need to be here, but the URLs do need to match what's in the Router */}
          <Navbutton exact path="/" label="Home" />
          <Navbutton exact path="/login" label="Login" />
          <Navbutton exact path="/journal" label="Log your mood" />
          <Navbutton exact path="/issues" label="Issues" />
          <Navbutton exact path="/moods" label="Mood history" />
          <Navbutton exact path="/dashboard" label="Graphs" />
        </Toolbar>
      </AppBar>
    );
  }
}
