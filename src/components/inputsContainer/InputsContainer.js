import { Button } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setData } from '../../redux/reducers/mainReducer';
import InputNumber from './inputNumber/InputNumber';
import SelectCompanies from './selectCompanies/SelectCompanies';
import styles from './styles.module.css';

const InputsContainer = () => {
  const numberInputs = [
    { name: '1st quarter' },
    { name: '2nd quarter' },
    { name: '3rd quarter' },
    { name: '4th quarter' },
  ];
  const { handleSubmit, control } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => {
    dispatch(setData(data));
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SelectCompanies control={control} />
        {numberInputs.map((input, i) => (
          <InputNumber key={i} name={input.name} control={control} />
        ))}

        <Button type='submit' variant='contained' color='primary'>
          Calc
        </Button>
      </form>
    </div>
  );
};

export default InputsContainer;
