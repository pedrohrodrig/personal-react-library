import React from 'react';
import { CardProps } from './types';
import {
  StyledCard,
  Content,
  Header,
  Description,
  Title,
  Footer,
  Body,
  Image
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
    <StyledCard
      direction={direction}
      fullWidth={fullWidth}
      data-testid="card"
      {...props}
    >
      {image && (
        <Image
          fullWidth={fullWidth}
          direction={direction}
          src={image}
          alt={imageAlt}
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
