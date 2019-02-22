import React, { Component, ReactNode } from 'react';
import Layout from '../Layout/Layout';
import MoodEntryCreateForm from '../../components/MoodEntryCreateForm/MoodEntryCreateForm';
import { MoodEntry } from '../../../../types/storage/Mood';
import styles from './MoodCreatePage.module.scss';

export default class MoodCreatePage extends Component {
  private handleMoodCreated(mood: MoodEntry): void {
    console.log(mood);
  }

  public render(): ReactNode {
    return (
      <Layout>
        <div className={styles.MoodCreatePage}>
          <MoodEntryCreateForm
            className={styles.MoodEntryCreateForm}
            onCreate={this.handleMoodCreated}
          />
        </div>
      </Layout>
    );
  }
}
