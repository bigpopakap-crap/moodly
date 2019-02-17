import React, { Component } from 'react';
import styles from './MyTextArea.module.scss';

export default class extends Component {
  render() {
    return (
      <div>
        <textarea className={styles.input} />
      </div>
    );
  }
}
