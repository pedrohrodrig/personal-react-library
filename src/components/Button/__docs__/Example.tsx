import React from 'react';
import { FC } from 'react';
import Button from '../';
import { ButtonProps } from '../types';

const Example: FC<ButtonProps> = ({
  disabled = false,
  onClick = () => {},
  variant = 'primary',
  size = 'small',
  text = 'Button',
  icon,
  iconPosition = 'right',
  fullWidth = false
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      }}
    >
      <Button
        size={size}
        text={text}
        disabled={disabled}
        onClick={onClick}
        variant={variant}
        icon={icon}
        iconPosition={iconPosition}
        fullWidth={fullWidth}
      />
    </div>
  );
};

export default Example;
