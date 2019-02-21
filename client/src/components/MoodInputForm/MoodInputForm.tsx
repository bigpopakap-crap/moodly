import React, { Component, ReactNode } from 'react';
import { Button, OutlinedInput, TextField } from '@material-ui/core';
import classnames from 'classnames';
import styles from './MoodInputForm.module.scss';

const MIN_MULTILINE_ROWS = 12;
const MAX_MULTILINE_ROWS = 24;

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
        <TextField
          id="descriptionInput"
          fullWidth
          multiline
          rows={MIN_MULTILINE_ROWS}
          rowsMax={MAX_MULTILINE_ROWS}
          placeholder="Describe your problems"
          variant="outlined"
        />

        <TextField id="affectInput" variant="outlined" />

        <OutlinedInput
          id="dateTimeInput"
          type="datetime-local"
          aria-describedby="dateTimeHelperText"
          labelWidth={2}
        />

        <Button fullWidth variant="contained" color="primary">
          Submit
        </Button>
      </form>
    );
  }
}
