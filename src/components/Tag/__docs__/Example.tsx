import React from 'react';
import Tag from '../';
import { TagProps } from '../types';

const Example: React.FC<TagProps> = ({
  text = 'Tag Text',
  variant = 'primary',
  fixed = true,
  onClose
}) => {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Tag text={text} variant={variant} fixed={fixed} onClose={onClose} />
      <Tag
        text="Success Tag"
        variant="success"
        fixed={fixed}
        onClose={onClose}
      />
      <Tag
        text="Warning Tag"
        variant="warning"
        fixed={fixed}
        onClose={onClose}
      />
    </div>
  );
};

export default Example;
