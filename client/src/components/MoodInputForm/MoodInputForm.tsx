import React, { Component, ReactNode } from 'react';
import { FormControl, FormHelperText, InputLabel, TextField } from '@material-ui/core';
import classnames from 'classnames';
import styles from './MoodInputForm.module.scss';

interface Props {
  /**
   * Additional CSS classes for the root element of  this component
   */
  className?: string;
}

export default class MoodInputForm extends Component<Props> {
  public render(): ReactNode {
    return (
      <form className={classnames(this.props.className, styles.MoodInputForm)}>
        <FormControl>
          <InputLabel htmlFor="descriptionInput">Description</InputLabel>
          <TextField id="descriptionInput" aria-describedby="descriptionHelperText" multiline />
          <FormHelperText id="descriptionHelperText">This is the description.</FormHelperText>
        </FormControl>
      </form>
    );
  }
}
