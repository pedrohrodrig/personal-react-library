import React from 'react';
import { FC } from 'react';
import Card from '../';
import { CardProps } from '../types';

const Example: FC<CardProps> = ({
  title = 'Card Title',
  description = 'This is a description of the card.',
  direction = 'vertical',
  image = 'https://placehold.co/300',
  imageAlt = 'Placeholder Image',
  body = <p>This is the body content of the card.</p>,
  footer = <p>Footer content here</p>,
  fullWidth = false,
  ...props
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        padding: '1rem'
      }}
    >
      <Card
        title={title}
        description={description}
        direction={direction}
        image={image}
        imageAlt={imageAlt}
        body={body}
        footer={footer}
        fullWidth={fullWidth}
        {...props}
      />
    </div>
  );
};

export default Example;
