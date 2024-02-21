import { IButtonProps } from './Button.types.ts';
import React from 'react';
import * as Styles from './Button.styles.ts';

export const Button: React.FC<IButtonProps> = ({ children, ...props }) => {
  return <Styles.Btn {...props}>{children}</Styles.Btn>;
};
