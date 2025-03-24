import React from 'react';
import { CardProps } from './types';
import {
  StyledCard,
  Content,
  Header,
  Description,
  Title,
  Footer,
  Body
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
    <StyledCard direction={direction} fullWidth={fullWidth} {...props}>
      {image && (
        <img
          src={image}
          alt={imageAlt}
          style={{ width: '100%', height: 'auto' }}
        />
      )}
      <Content direction={direction}>
        <Header>
          {title && <Title>{title}</Title>}
          {description && <Description>{description}</Description>}
        </Header>
        {children && <Body>{children}</Body>}
        {footer && <Footer>{footer}</Footer>}
      </Content>
    </StyledCard>
  );
};

export default Card;
