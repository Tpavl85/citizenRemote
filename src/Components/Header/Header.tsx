import React, { PropsWithChildren } from 'react';
import { Logo } from './Logo.tsx';
import DotsMobileStepper from '../Stepper/Stepper.tsx';

interface IHeader extends PropsWithChildren {}

export const Header: React.FC<IHeader> = ({}) => {
  return (
    <>
      <div className={'flex flex-row relative justify-center'} style={{ height: '56px' }}>
        <Logo />
        <DotsMobileStepper />
      </div>
    </>
  );
};
