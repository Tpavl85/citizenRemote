import { ICounter } from './Counter.types.ts';
import { IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import React, { FC, useState } from 'react';

export const Counter: FC<ICounter> = ({ subText, header, initialValue }) => {
  const [number, setNumber] = useState(initialValue);
  return (
    <div className={'flex justify-between'}>
      <div className={'flex flex-col'}>
        <span className={'text-sm font-bold'}> {subText}</span>
        <span className={'text-xs mt-1'}>{header}</span>
      </div>
      <div>
        <IconButton
          aria-label="delete"
          color="primary"
          sx={{ borderRadius: '8px' }}
          onClick={() => {
            setNumber((prevState) => prevState - 1);
          }}>
          <RemoveIcon />
        </IconButton>
        <span className={'ml-2 mr-2'}>{number}</span>
        <IconButton
          aria-label="delete"
          color="primary"
          sx={{ borderRadius: '8px' }}
          onClick={() => {
            setNumber((prevState) => prevState + 1);
          }}>
          <AddIcon />
        </IconButton>
      </div>
    </div>
  );
};
