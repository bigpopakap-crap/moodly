import React, { Component, ReactNode } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch as RouteSwitch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import MoodCreatePage from '../MoodCreatePage/MoodCreatePage';
import styles from './App.module.scss';

export default class App extends Component {
  public render(): ReactNode {
    return (
      <div className={styles.App}>
        <CssBaseline />

        <Router>
          <RouteSwitch>
            <Route exact path="/journal" component={MoodCreatePage} />
            <Redirect to="/journal" />
          </RouteSwitch>
        </Router>
      </div>
    );
  }
}
