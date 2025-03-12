import React from 'react';
import { ButtonProps } from './types';
import { StyledButton } from './styles';

const Button: React.FC<ButtonProps> = ({
  size,
  variant = 'primary',
  disabled,
  text,
  ...props
}) => {
  return (
    <StyledButton variant={variant} disabled={disabled} size={size} {...props}>
      {text}
    </StyledButton>
  );
};

export default Button;
