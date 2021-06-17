import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setCompanyNames } from '../../../redux/reducers/mainReducer';
import styles from './styles.module.css';

const SelectCompanies = ({ control }) => {
  const dispatch = useDispatch();
  const companies = useSelector(state => state.state.companies, shallowEqual);

  useEffect(() => {
    dispatch(setCompanyNames());
    return () => {};
  }, [dispatch]);

  return (
    <FormControl>
      <InputLabel id='company-label'>Company</InputLabel>
      <Controller
        control={control}
        name='CompanyName'
        defaultValue={''}
        rules={{ required: true }}
        render={({ field }) => (
          <Select {...field} labelId='company-label' className={styles.numberInput} required>
            {companies.map((company, i) => (
              <MenuItem key={i} value={company.name}>
                {company.name}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
};

export default SelectCompanies;
