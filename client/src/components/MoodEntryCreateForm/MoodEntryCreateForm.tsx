import React, { Component, ReactNode } from 'react';
import { Button, OutlinedInput, TextField } from '@material-ui/core';
import classnames from 'classnames';
import { MoodEntry, MoodSentiment } from '../../../../types/storage/Mood';
import { DateTime } from '../../../../types/storage/DateTime';
import { now } from '../../utils/DateTime';
import { IconKey } from '../../../../types/client/Icon';
import { Color } from '../../../../types/client/Color';
import styles from './MoodEntryCreateForm.module.scss';

const MIN_MULTILINE_ROWS = 12;
const MAX_MULTILINE_ROWS = 24;

interface Props {
  /**
   * Additional CSS classes for the root element of  this component
   */
  className?: string;

  /**
   * Handler for when a {@link MoodEntry} is created.
   * @param arg0 the mood that was created.
   */
  onCreate: (arg0: MoodEntry) => void;
}

interface State {
  moodOccurredAt: DateTime;
  content: string;
  // TODO add other fields of a MoodEntry
}

export default class MoodEntryCreateForm extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      moodOccurredAt: now(),
      content: ''
    };
  }

  private onSubmit(): void {
    this.props.onCreate({
      moodOccurredAt: this.state.moodOccurredAt,
      content: this.state.content,
      // TODO actually set all these properties on the new objectx
      schema: {
        iconKey: IconKey.HEART,
        primaryColor: Color.RED
      },
      sentiment: MoodSentiment.MILD_POSITIVE,
      tags: []
    });
  }

  public render(): ReactNode {
    return (
      <form className={classnames(this.props.className, styles.Component)}>
        <TextField
          id="descriptionInput"
          value={this.state.content}
          fullWidth
          multiline
          rows={MIN_MULTILINE_ROWS}
          rowsMax={MAX_MULTILINE_ROWS}
          placeholder="Describe your problems"
          variant="outlined"
        />

        <OutlinedInput
          id="dateTimeInput"
          value={this.state.moodOccurredAt}
          type="datetime-local"
          aria-describedby="dateTimeHelperText"
          labelWidth={2}
        />

        <Button fullWidth variant="contained" color="primary" action={this.onSubmit}>
          Submit
        </Button>
      </form>
    );
  }
}
