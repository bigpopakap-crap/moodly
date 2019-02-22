import React, { Component, ReactNode } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import classnames from 'classnames';
import Navbutton from './Navbutton/Navbutton';
import styles from './Navbar.module.scss';

/**
 * Defines the possible locations on the page for the MoodEntryCreateForm to render itself
 */
export enum NavbarPosition {
  TOP = 'top',
  BOTTOM = 'bottom'
}

interface Props {
  /**
   * Where the MoodEntryCreateForm should render itself
   */
  position: NavbarPosition;
}

export default class Navbar extends Component<Props> {
  public render(): ReactNode {
    const isNavbarBottom = this.props.position === NavbarPosition.BOTTOM;
    const navbarPositionClassNames = { [styles['navbar--bottom']]: isNavbarBottom };

    return (
      <AppBar className={classnames(styles.Navbar, navbarPositionClassNames)}>
        <Toolbar>
          {/* Not all routes need to be here, but the URLs do need to match what's in the Router */}
          <Navbutton exact path="/" label="Test" />
          <Navbutton exact path="/login" label="Test" />
          <Navbutton exact path="/journal" label="Test" />
          <Navbutton exact path="/issues" label="Test" />
          <Navbutton exact path="/moods" label="Test" />
          <Navbutton exact path="/dashboard" label="Test" />
        </Toolbar>
      </AppBar>
    );
  }
}
