import React, { Component, ReactNode } from 'react';
import withWidth from '@material-ui/core/withWidth';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import Navbar, { NavbarPosition } from '../../components/Navbar/Navbar';
import styles from './Layout.module.scss';

interface Props {
  children: ReactNode;

  /**
   * The media query breakpoint provided by material-ui
   */
  width: Breakpoint;
}

class Layout extends Component<Props> {
  public render(): ReactNode {
    const useBottomNavbar = this.props.width === 'xs';
    const navbarPosition = useBottomNavbar ? NavbarPosition.BOTTOM : NavbarPosition.TOP;

    return (
      <div className={styles.Layout}>
        <Navbar position={navbarPosition} />
        <div className="page-content">{this.props.children}</div>
      </div>
    );
  }
}

export default withWidth()(Layout);
