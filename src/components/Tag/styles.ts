import styled from 'styled-components';
import { TagProps } from './types';

import { borderRadius, colors, fonts, spacing } from '@/styles';

const StyledTag = styled.div<Partial<TagProps>>`
  display: inline-flex;
  gap: ${spacing.xxs};
  align-items: center;
  padding: ${spacing.xxs} ${spacing.xs};
  border-radius: ${borderRadius.lg};
  border: 1px solid ${({ variant }) => colors[variant ?? 'primary'].dark};
  background-color: ${({ variant }) => colors[variant ?? 'primary'].extraLight};
  color: ${({ variant }) => colors[variant ?? 'primary'].dark};
  font-family: ${fonts.family.dmSans};
  font-size: ${fonts.size.xs};
  font-weight: ${fonts.weight.semibold};
`;

export { StyledTag };
