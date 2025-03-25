import styled from 'styled-components';
import { AlertProps } from './types';

import { colors, spacing, borderRadius } from '@/styles';

export const StyledAlert = styled.div<AlertProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing.lg};
  border-radius: ${borderRadius.md};
  color: ${({ variant, severity }) =>
    variant === 'outlined' ? colors[severity].default : colors.grayscale.white};
  ${({ variant, severity }) =>
    variant === 'outlined'
      ? `
    background-color: transparent;
    border: 2px solid ${colors[severity].default};
    `
      : `
    background-color: ${colors[severity].default}; 
    `}
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.lg};
`;
