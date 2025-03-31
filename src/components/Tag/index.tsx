import { colors } from '@/styles';
import React from 'react';
import { X } from 'react-feather';
import { StyledTag } from './styles';
import { TagProps } from './types';

const Tag: React.FC<TagProps> = ({
  variant = 'primary',
  fixed = true,
  text,
  onClose,
  ...props
}) => {
  return (
    <StyledTag variant={variant} onClose={onClose} {...props}>
      {text}
      {!fixed && <X size={12} color={colors[variant].dark} />}
    </StyledTag>
  );
};

export default Tag;
