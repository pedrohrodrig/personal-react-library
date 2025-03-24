import React from 'react';
import { CardProps } from './types';
import {
  CardContainer,
  CardContentContainer,
  Header,
  Description,
  Title,
  Footer
} from './styles';

// TODO: refactor footer and content to sub components
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
        <Header>
          {title && <Title>{title}</Title>}
          {description && <Description>{description}</Description>}
        </Header>
        {children && <div>{children}</div>}
      </CardContentContainer>
      {footer && <Footer>{footer}</Footer>}
    </CardContainer>
  );
};

export default Card;
