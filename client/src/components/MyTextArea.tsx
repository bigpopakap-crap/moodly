import React, { Component } from 'react';
import styles from './MyTextArea.module.scss';

export default class extends Component {
    render() {
        return (
            <textarea className={styles.input}/>
        );
    }
}
