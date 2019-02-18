import React, { Component } from 'react';
import styles from './MyTextArea.module.scss';

export default class extends Component {
  public render() {
    return (
      <div>
        <textarea className={styles.input} />
      </div>
    );
  }
}
