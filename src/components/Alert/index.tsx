import React from 'react';
import { AlertProps } from './types';
import { ContentContainer, StyledAlert } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faCircleExclamation,
  faExclamation,
  faInfo,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import { colors } from '@/styles';

const Alert: React.FC<AlertProps> = ({
  children,
  severity,
  variant = 'filled',
  fixed = false,
  icon,
  ...props
}) => {
  const getIcon = () => {
    const color =
      variant === 'outlined' ? colors[severity].dark : colors.grayscale.white;

    switch (severity) {
      case 'success':
        return <FontAwesomeIcon icon={faCheck} color={color} size="lg" />;
      case 'warning':
        return <FontAwesomeIcon icon={faExclamation} color={color} size="lg" />;
      case 'info':
        return <FontAwesomeIcon icon={faInfo} color={color} size="lg" />;
      case 'danger':
        return (
          <FontAwesomeIcon icon={faCircleExclamation} color={color} size="lg" />
        );
      default:
        return null;
    }
  };

  return (
    <StyledAlert severity={severity} variant={variant} {...props}>
      <ContentContainer>
        {icon ? icon : getIcon()}
        <div>{children}</div>
      </ContentContainer>
      {!fixed && <FontAwesomeIcon icon={faXmark} />}
    </StyledAlert>
  );
};

export default Alert;
