import React from 'react';
import { ButtonProps } from './types';
import { StyledButton, ButtonContent } from './styles';

const Button: React.FC<ButtonProps> = ({
  size,
  variant = 'primary',
  disabled = false,
  children,
  fullWidth = false,
  ...props
}) => {
  return (
    <StyledButton
      fullWidth={fullWidth}
      variant={variant}
      disabled={disabled}
      size={size}
      {...props}
    >
      <ButtonContent>{children}</ButtonContent>
    </StyledButton>
  );
};

export default Button;
