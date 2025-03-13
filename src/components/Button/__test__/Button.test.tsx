import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from '../';
import '@testing-library/jest-dom';

describe('Button component', () => {
  it('Button should render correctly', () => {
    render(<Button text="Button" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('Button should render with the correct text', () => {
    render(<Button text="Click me" />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Click me');
  });

  it('Button should be disabled when the disabled prop is true', () => {
    render(<Button text="Button" disabled />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});
