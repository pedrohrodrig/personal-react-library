import React from 'react';
import Card from '../';
import { CardProps } from '../types';
import { Description } from '../styles';
import Button from '@/components/Button';

const Example: React.FC<CardProps> = ({
  title = 'Card Title',
  description = 'This is a description of the card.',
  direction = 'vertical',
  image = 'https://placehold.co/300',
  imageAlt = 'Placeholder Image',
  footer = <Description>Footer content here</Description>,
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
        footer={footer}
        fullWidth={fullWidth}
        {...props}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem'
          }}
        >
          <Button>Button 1</Button>
          <Button variant="outline">Button 2</Button>
        </div>
      </Card>
    </div>
  );
};

export default Example;
