import React, { Component } from 'react';
import styles from './MyInput.module.scss';

export default class extends Component {
  render() {
    return (
      <div>
        <input type="text" className={styles.input} />
      </div>
    );
  }
}
