import { colors } from '@/styles';
import { useState } from 'react';
import { AlertCircle, AlertOctagon, CheckCircle, Info, X } from 'react-feather';
import { AlertContext, useAlertContext } from './context';
import {
  ContentContainer,
  Description,
  StyledAlert,
  TextContentContainer,
  Title
} from './styles';
import { AlertDescriptionProps, AlertProps, AlertTitleProps } from './types';

const Alert = ({
  children,
  severity,
  variant = 'filled',
  fixed = false,
  showIcon = true,
  onClose,
  ...props
}: AlertProps) => {
  const getIcon = () => {
    const color =
      variant === 'outlined' ? colors[severity].dark : colors.grayscale.white;

    switch (severity) {
      case 'success':
        return (
          <CheckCircle color={color} size={24} data-testid="severity-icon" />
        );
      case 'warning':
        return (
          <AlertCircle color={color} size={24} data-testid="severity-icon" />
        );
      case 'info':
        return <Info color={color} size={24} data-testid="severity-icon" />;
      case 'danger':
        return (
          <AlertOctagon color={color} size={24} data-testid="severity-icon" />
        );
      default:
        return null;
    }
  };

  const [isClosed, setIsClosed] = useState(false);

  return isClosed ? null : (
    <AlertContext.Provider value={true}>
      <StyledAlert
        severity={severity}
        variant={variant}
        role="alert"
        {...props}
      >
        <ContentContainer>
          {showIcon && getIcon()}
          <TextContentContainer>{children}</TextContentContainer>
        </ContentContainer>
        {!fixed && (
          <X
            data-testid="dismiss-icon"
            onClick={(e) => {
              e.preventDefault();
              if (onClose) {
                onClose();
              }
              setIsClosed(true);
            }}
            size={20}
          />
        )}
      </StyledAlert>
    </AlertContext.Provider>
  );
};

Alert.Title = function AlertTitle({ children }: AlertTitleProps) {
  useAlertContext();
  return <Title>{children}</Title>;
};

Alert.Description = function AlertDescription({
  children
}: AlertDescriptionProps) {
  useAlertContext();
  return <Description>{children}</Description>;
};

export default Alert;
