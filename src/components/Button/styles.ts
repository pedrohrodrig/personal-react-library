import styled from 'styled-components';
import { ButtonProps } from './types';
import { colors, fonts, borderRadius, spacing } from '@/styles';

const getBackgroundColor = (variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'primary':
      return colors.primary.default;
    case 'secondary':
      return colors.secondary.default;
    case 'outline':
      return colors.info.default;
    case 'ghost':
      return colors.warning.default;
    default:
      return colors.primary.default;
  }
};

export const StyledButton = styled.button<ButtonProps>`
  border: ${(props) =>
    props.variant === 'outline'
      ? `${borderRadius.md} solid ${colors.info.default}`
      : 'none'};
  line-height: 1;
  font-size: ${fonts.size.base};
  cursor: pointer;
  font-weight: ${fonts.weight.bold};
  border-radius: ${borderRadius.md};
  display: inline-block;
  text-align: center;
  color: ${(props) =>
    props.variant === 'primary'
      ? colors.grayscale.white
      : colors.grayscale.black};
  background-color: ${(props) => getBackgroundColor(props.variant)};
  padding: ${(props) =>
    props.size === 'small'
      ? `${spacing.xs} ${spacing.sm}`
      : `${spacing.sm} ${spacing.md}`};
`;

export const ButtonContent = styled.div<ButtonProps>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) =>
    props.iconPosition === 'right' ? 'row' : 'row-reverse'};
  justify-content: center;
  align-items: center;
  gap: ${spacing.sm};
`;
