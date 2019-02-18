import React, { Component } from 'react';
import styles from './MyInput.module.scss';

export default class extends Component {
  public render() {
    return (
      <div>
        <input type="text" className={styles.input} />
      </div>
    );
  }
}
