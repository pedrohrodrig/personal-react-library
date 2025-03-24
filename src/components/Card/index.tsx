import React from 'react';
import { CardProps } from './types';
import {
  CardContainer,
  CardContentContainer,
  CardTextContainer,
  Description,
  Title
} from './styles';

const Card: React.FC<CardProps> = ({
  title,
  description,
  direction = 'vertical',
  image,
  imageAlt,
  children,
  footer,
  fullWidth = false,
  ...props
}) => {
  return (
    <CardContainer direction={direction} fullWidth={fullWidth} {...props}>
      {image && (
        <img
          src={image}
          alt={imageAlt}
          style={{ width: '100%', height: 'auto' }}
        />
      )}
      <CardContentContainer>
        <CardTextContainer>
          {title && <Title>{title}</Title>}
          {description && <Description>{description}</Description>}
        </CardTextContainer>
        {children && <div>{children}</div>}
        {footer && (
          <>
            <hr />
            {footer}
          </>
        )}
      </CardContentContainer>
    </CardContainer>
  );
};

export default Card;
