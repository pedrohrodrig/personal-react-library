import styled from 'styled-components';
import { ButtonProps } from './types';
import { colors, fonts, borderRadius, spacing } from '@/styles';

const getHoverBackgroundColor = (
  variant: ButtonProps['variant'],
  disabled: ButtonProps['disabled']
) => {
  if (disabled) {
    return colors.grayscale[100];
  }

  switch (variant) {
    case 'primary':
      return colors.primary.light;
    case 'secondary':
      return colors.secondary.light;
    case 'success':
      return colors.success.light;
    case 'warning':
      return colors.warning.light;
    case 'info':
      return colors.info.light;
    case 'danger':
      return colors.danger.light;
    case 'outline':
      return colors.grayscale[200];
    case 'ghost':
      return colors.grayscale[100];
    default:
      return colors.primary.light;
  }
};

const getBackgroundColor = (
  variant: ButtonProps['variant'],
  disabled: ButtonProps['disabled']
) => {
  if (disabled) {
    if (variant === 'outline') {
      return colors.grayscale.white;
    }
    return colors.grayscale[100];
  }

  switch (variant) {
    case 'primary':
      return colors.primary.default;
    case 'secondary':
      return colors.secondary.default;
    case 'success':
      return colors.success.default;
    case 'warning':
      return colors.warning.default;
    case 'info':
      return colors.info.default;
    case 'danger':
      return colors.danger.default;
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
    return '100%';
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

const getTextColor = (
  variant: ButtonProps['variant'],
  disabled: ButtonProps['disabled']
) => {
  if (disabled) {
    if (variant === 'outline') {
      return colors.grayscale[200];
    }

    return colors.grayscale.white;
  }

  switch (variant) {
    case 'primary':
    case 'secondary':
    case 'info':
    case 'danger':
    case 'success':
      return colors.grayscale.white;
    case 'warning':
      return colors.grayscale[800];
    case 'outline':
    case 'ghost':
      return colors.primary.default;
    default:
      return colors.grayscale.black;
  }
};

export const StyledButton = styled.button<ButtonProps>`
  min-width: fit-content;
  width: ${(props) => getButtonMinWidth(props.fullWidth, props.size)};
  height: ${(props) => getButtonHeight(props.size)};
  border: ${(props) =>
    props.disabled
      ? `${borderRadius.sm} solid ${colors.grayscale[200]}`
      : props.variant === 'outline'
        ? `${borderRadius.sm} solid ${colors.primary.default}`
        : 'none'};
  line-height: 1;
  font-size: ${fonts.size.base};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-weight: ${fonts.weight.bold};
  border-radius: ${borderRadius.md};
  display: inline-block;
  text-align: center;
  color: ${(props) => getTextColor(props.variant, props.disabled)};
  background-color: ${(props) =>
    getBackgroundColor(props.variant, props.disabled)};
  padding: ${(props) =>
    props.size === 'small'
      ? `${spacing.xs} ${spacing.sm}`
      : `${spacing.sm} ${spacing.md}`};
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${(props) =>
      getHoverBackgroundColor(props.variant, props.disabled)};
  }
`;

export const ButtonContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${spacing.sm};
`;
