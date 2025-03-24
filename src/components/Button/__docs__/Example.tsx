import { FC } from 'react';
import Button from '../';
import { ButtonProps } from '../types';

const Example: FC<ButtonProps> = ({
  disabled = false,
  onClick = () => {},
  variant = 'primary',
  size = 'small',
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
        disabled={disabled}
        onClick={onClick}
        variant={variant}
        fullWidth={fullWidth}
      >
        Button
      </Button>
    </div>
  );
};

export default Example;
