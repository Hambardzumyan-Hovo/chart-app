import React from 'react';
import ChartContainer from '../chartContainer/ChartContainer';
import InputsContainer from '../inputsContainer/InputsContainer';
import styles from './styles.module.css';

const Main = () => {
  return (
    <div className={styles.mainContainer}>
      <InputsContainer />
      <ChartContainer />
    </div>
  );
};

export default Main;
