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
      return colors.grayscale.white;
    case 'ghost':
      return 'transparent';
    default:
      return colors.primary.default;
  }
};

const getButtonMinWidth = (
  fullWidth: ButtonProps['fullWidth'],
  size: ButtonProps['size']
) => {
  if (fullWidth) {
    return 'none';
  }

  switch (size) {
    case 'small':
      return '8rem';
    case 'medium':
      return '9.3rem';
    case 'large':
      return '11.25rem';
    default:
      return '9.3rem';
  }
};

const getButtonHeight = (size: ButtonProps['size']) => {
  switch (size) {
    case 'small':
      return 'auto';
    case 'medium':
      return '2.5rem';
    case 'large':
      return '3rem';
    default:
      return '2.5rem';
  }
};

export const StyledButton = styled.button<ButtonProps>`
  min-width: ${(props) => getButtonMinWidth(props.fullWidth, props.size)};
  height: ${(props) => getButtonHeight(props.size)};
  border: ${(props) =>
    props.variant === 'outline'
      ? `${borderRadius.md} solid ${colors.primary.default}`
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
      : props.variant === 'ghost'
        ? colors.primary.default
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
