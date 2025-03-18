import styled from 'styled-components';
import { CardProps } from './types';
import { borderRadius, colors, fonts, spacing } from '@/styles';

const getContainerMaxWidth = ({ direction, fullWidth }: CardProps) => {
  if (fullWidth) return 'unset';

  if (direction === 'vertical') return '300px';

  return '800px';
};

export const CardContainer = styled.div<CardProps>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === 'vertical' ? 'column' : 'row'};
  border: 1px solid ${colors.grayscale[300]};
  border-radius: ${borderRadius.lg};
  overflow: hidden;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  max-width: ${getContainerMaxWidth};
`;

export const CardContentContainer = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xl};
  padding: ${spacing.md};
  width: '100%';
`;

export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
`;

export const Title = styled.h2`
  font-family: ${fonts.family.montserrat};
  font-size: ${fonts.size.lg};
  font-weight: ${fonts.weight.semibold};
  color: ${colors.grayscale[900]};
  margin: 0;
`;

export const Description = styled.p`
  font-family: ${fonts.family.dmSans};
  font-size: ${fonts.size.sm};
  color: ${colors.grayscale.black};
  margin: 0;
`;
