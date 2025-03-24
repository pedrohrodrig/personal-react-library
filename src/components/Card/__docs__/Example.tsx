import { FC } from 'react';
import Card from '../';
import { CardProps } from '../types';
import { Description } from '../styles';

const Example: FC<CardProps> = ({
  title = 'Card Title',
  description = 'This is a description of the card.',
  direction = 'vertical',
  image = 'https://placehold.co/300',
  imageAlt = 'Placeholder Image',
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
        footer={footer}
        fullWidth={fullWidth}
        {...props}
      >
        <Description>This is the body content of the card.</Description>
      </Card>
    </div>
  );
};

export default Example;
