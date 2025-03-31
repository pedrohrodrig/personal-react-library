import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Card from '../';

describe('Card component', () => {
  it('Card should render correctly', () => {
    render(<Card title="Card Title" description="Card Description" />);
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
  });

  it('Card should render with the correct title and description', () => {
    render(<Card title="Card Title" description="Card Description" />);
    const title = screen.getByText('Card Title');
    const description = screen.getByText('Card Description');
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('Card should render an image when the image prop is provided', () => {
    render(<Card image="image.jpg" imageAlt="Card Image" />);
    const image = screen.getByAltText('Card Image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'image.jpg');
  });

  it('Card should render children content', () => {
    render(
      <Card>
        <p>Child Content</p>
      </Card>
    );
    const childContent = screen.getByText('Child Content');
    expect(childContent).toBeInTheDocument();
  });

  it('Card should render a footer when the footer prop is provided', () => {
    render(<Card footer={<p>Footer Content</p>} />);
    const footerContent = screen.getByText('Footer Content');
    expect(footerContent).toBeInTheDocument();
  });

  it('Card should apply the correct direction style based on the direction prop', () => {
    const { rerender } = render(<Card direction="vertical" />);
    const card = screen.getByTestId('card');
    expect(card).toHaveStyle('flex-direction: column');

    rerender(<Card direction="horizontal" />);
    expect(card).toHaveStyle('flex-direction: row');
  });

  it('Card should apply full width styles when the fullWidth prop is true', () => {
    render(<Card fullWidth />);
    const card = screen.getByTestId('card');
    expect(card).toHaveStyle('width: 100%');
  });
});
