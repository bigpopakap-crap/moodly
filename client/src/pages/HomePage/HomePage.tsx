import React from 'react';
import Layout from '../Layout/Layout';
import styles from './HomePage.module.scss';

export default function HomePage() {
  return (
    <Layout>
      <div className={styles.HomePage}>Home page!</div>
    </Layout>
  );
}
