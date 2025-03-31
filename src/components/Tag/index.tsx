import { colors } from '@/styles';
import React, { useState } from 'react';
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
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    setIsClosed(true);
  };

  return isClosed ? null : (
    <StyledTag variant={variant} onClose={onClose} {...props}>
      {text}
      {!fixed && (
        <X
          size={12}
          color={colors[variant].dark}
          onClick={handleClose}
          style={{ cursor: 'pointer' }}
        />
      )}
    </StyledTag>
  );
};

export default Tag;
