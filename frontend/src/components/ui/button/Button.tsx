import React, { FC, InputHTMLAttributes } from 'react';

import Loader from '@/components/ui/loader/Loader';

import cl from './Button.module.scss';

interface InterfaceButton extends InputHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const Button: FC<InterfaceButton> = ({ isLoading, children }) => {
  return (
    <button className={cl.button}>{isLoading ? <Loader /> : children}</button>
  );
};

export default Button;
