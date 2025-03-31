import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Tag from '../';

describe('Tag component', () => {
  it('should render correctly', () => {
    render(<Tag text="Tag Text" />);
    const tag = screen.getByText('Tag Text');
    expect(tag).toBeInTheDocument();
  });

  it('should render with the correct text', () => {
    render(<Tag text="Custom Tag" />);
    const tag = screen.getByText('Custom Tag');
    expect(tag).toBeInTheDocument();
  });

  it('should render a dismiss icon when fixed is false', () => {
    render(<Tag text="Tag Text" fixed={false} />);
    const dismissIcon = screen.getByRole('img');
    expect(dismissIcon).toBeInTheDocument();
  });

  it('should not render a dismiss icon when fixed is true', () => {
    render(<Tag text="Tag Text" fixed={true} />);
    const dismissIcon = screen.queryByRole('img');
    expect(dismissIcon).not.toBeInTheDocument();
  });

  it('should call onClose when dismiss icon is clicked', () => {
    const onClose = vi.fn();
    render(<Tag text="Tag Text" fixed={false} onClose={onClose} />);
    const dismissIcon = screen.getByRole('img');
    fireEvent.click(dismissIcon);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
