import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import MoodCreatePage from '../MoodCreatePage/MoodCreatePage';
import IssueListPage from '../IssueListPage/IssueListPage';
import IssueDetailPage from '../IssueDetailPage/IssueDetailPage';
import MoodListPage from '../MoodListPage/MoodListPage';
import MoodDetailPage from '../MoodDetailPage/MoodDetailPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import styles from './App.module.scss';

export default class App extends Component {
  public render() {
    return (
      <div className={styles.App}>
        <Router>
          <>
            <CssBaseline />

            {/* Homepage, signup, login */}
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />

            {/* Launchpad for logging new moods */}
            <Route exact path="/journal" component={MoodCreatePage} />

            {/* List and detail pages for each primitive object */}
            <Route exact path="/issues" component={IssueListPage} />
            <Route exact path="/issues/:issueId" component={IssueDetailPage} />
            <Route exact path="/moods" component={MoodListPage} />
            <Route exact path="/moods/:moodId" component={MoodDetailPage} />

            {/* Dashboard with graphs and charts */}
            <Route exact path="/dashboard" component={DashboardPage} />
          </>
        </Router>
      </div>
    );
  }
}
