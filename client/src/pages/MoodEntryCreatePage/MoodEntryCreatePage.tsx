import React, { Component, ReactNode } from 'react';
import { MoodEntry } from '@moodly/types/storage/Mood';
import Layout from '../Layout/Layout';
import MoodEntryCreateForm from '../../components/MoodEntryCreateForm/MoodEntryCreateForm';
import styles from './MoodEntryCreatePage.module.scss';

export default class MoodEntryCreatePage extends Component {
  private handleMoodCreated(mood: MoodEntry): void {
    console.log(mood);
  }

  public render(): ReactNode {
    return (
      <Layout>
        <div className={styles.Page}>
          <MoodEntryCreateForm className={styles.form} onCreate={this.handleMoodCreated} />
        </div>
      </Layout>
    );
  }
}