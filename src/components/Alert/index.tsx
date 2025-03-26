import { colors } from '@/styles';
import {
  faCheck,
  faCircleExclamation,
  faExclamation,
  faInfo,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
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
  icon = true,
  onClose,
  ...props
}: AlertProps) => {
  const getIcon = () => {
    const color =
      variant === 'outlined' ? colors[severity].dark : colors.grayscale.white;

    switch (severity) {
      case 'success':
        return (
          <FontAwesomeIcon
            icon={faCheck}
            color={color}
            size="lg"
            data-testid="severity-icon"
          />
        );
      case 'warning':
        return (
          <FontAwesomeIcon
            icon={faExclamation}
            color={color}
            size="lg"
            data-testid="severity-icon"
          />
        );
      case 'info':
        return (
          <FontAwesomeIcon
            icon={faInfo}
            color={color}
            size="lg"
            data-testid="severity-icon"
          />
        );
      case 'danger':
        return (
          <FontAwesomeIcon
            icon={faCircleExclamation}
            color={color}
            size="lg"
            data-testid="severity-icon"
          />
        );
      default:
        return null;
    }
  };

  const [isClosed, setIsClosed] = useState(false);

  return isClosed ? null : (
    <AlertContext.Provider value>
      <StyledAlert
        severity={severity}
        variant={variant}
        role="alert"
        {...props}
      >
        <ContentContainer>
          {icon && getIcon()}
          <TextContentContainer>{children}</TextContentContainer>
        </ContentContainer>
        {!fixed && (
          <FontAwesomeIcon
            data-testid="dismiss-icon"
            icon={faXmark}
            onClick={(e) => {
              e.preventDefault();
              if (onClose) {
                onClose();
              }
              setIsClosed(true);
            }}
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
