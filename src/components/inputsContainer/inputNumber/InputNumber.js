import { FormControl, TextField } from '@material-ui/core';
import React from 'react';
import { Controller } from 'react-hook-form';
import styles from './styles.module.css';

const InputNumber = ({ name, control }) => {
  return (
    <FormControl className={styles.numberWrapper}>
      <label>{name}</label>
      <Controller
        control={control}
        name={name}
        defaultValue={0}
        render={({ field }) => <TextField {...field} type='number'></TextField>}
      />
    </FormControl>
  );
};

export default InputNumber;
