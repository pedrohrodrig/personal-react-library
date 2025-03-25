import React from 'react';
import Alert from '../';
import { AlertProps } from '../types';

const Example: React.FC<AlertProps> = ({
  variant = 'filled',
  fixed = false
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        padding: '1rem'
      }}
    >
      <Alert severity="success" variant={variant} fixed={fixed}>
        Success Alert
      </Alert>
      <Alert severity="warning" variant={variant} fixed={fixed}>
        Warning Alert
      </Alert>
      <Alert severity="info" variant={variant} fixed={fixed}>
        Info Alert
      </Alert>
      <Alert severity="danger" variant={variant} fixed={fixed}>
        Danger Alert
      </Alert>
    </div>
  );
};

export default Example;
