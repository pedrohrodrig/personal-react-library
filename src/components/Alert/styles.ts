import styled from 'styled-components';
import { AlertProps } from './types';

import { colors, spacing, borderRadius, fonts } from '@/styles';

export const StyledAlert = styled.div<AlertProps>`
  display: flex;
  align-items: flex-start;
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
  align-items: flex-start;
  gap: ${spacing.lg};
`;

export const TextContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xs};
`;

export const Title = styled.div`
  font-weight: ${fonts.weight.semibold};
  font-family: ${fonts.family.montserrat};
  font-size: ${fonts.size.xl};
`;

export const Description = styled.div`
  font-family: ${fonts.family.dmSans};
  font-size: ${fonts.size.base};
`;
