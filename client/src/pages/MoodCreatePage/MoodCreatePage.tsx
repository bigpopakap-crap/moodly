import React, { Component, ReactNode } from 'react';
import Layout from '../Layout/Layout';
import MoodInputForm from '../../components/MoodInputForm/MoodInputForm';
import { MoodEntry } from '../../../../types/storage/Mood';
import styles from './MoodCreatePage.module.scss';

export default class MoodCreatePage extends Component {
  private handleMoodCreated(mood: MoodEntry) {
    console.log(mood);
  }

  public render(): ReactNode {
    return (
      <Layout>
        <div className={styles.MoodCreatePage}>
          <MoodInputForm className={styles.MoodInputForm} onCreate={this.handleMoodCreated} />
        </div>
      </Layout>
    );
  }
}
