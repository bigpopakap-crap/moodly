import React, { Component, ReactNode } from 'react';
import FormControl from '@material-ui/core/FormControl';
import { FormHelperText, InputLabel, TextField } from '@material-ui/core';
import Layout from '../Layout/Layout';
import styles from './MoodCreatePage.module.scss';

export default class MoodCreatePage extends Component {
  public render(): ReactNode {
    return (
      <Layout>
        <div className={styles.MoodCreatePage}>
          <FormControl>
            <InputLabel htmlFor="descriptionInput">Description</InputLabel>
            <TextField id="descriptionInput" aria-describedby="descriptionHelperText" multiline />
            <FormHelperText id="descriptionHelperText">This is the description.</FormHelperText>
          </FormControl>
        </div>
      </Layout>
    );
  }
}
