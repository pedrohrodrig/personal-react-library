import React from 'react';
import { ButtonContent, StyledButton } from './styles';
import { ButtonProps } from './types';

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
