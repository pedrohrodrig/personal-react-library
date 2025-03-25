import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Alert from '../';
import '@testing-library/jest-dom';

describe('Alert component', () => {
  it('should render correctly', () => {
    render(<Alert severity="success">Success Alert</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent('Success Alert');
  });

  it('should render the correct icon based on severity', () => {
    render(<Alert severity="success">Success Alert</Alert>);
    const icon = screen.getByRole('img', { hidden: true });
    expect(icon).toBeInTheDocument();
  });

  it('should render a custom icon when the icon prop is provided', () => {
    render(
      <Alert
        severity="info"
        icon={<span data-testid="custom-icon">Custom Icon</span>}
      >
        Info Alert
      </Alert>
    );
    const customIcon = screen.getByTestId('custom-icon');
    expect(customIcon).toBeInTheDocument();
    expect(customIcon).toHaveTextContent('Custom Icon');
  });

  it('should render children content', () => {
    render(
      <Alert severity="warning">
        <p>Warning Content</p>
      </Alert>
    );
    const childContent = screen.getByText('Warning Content');
    expect(childContent).toBeInTheDocument();
  });

  it('should render a dismiss icon when fixed is false', () => {
    render(
      <Alert severity="info" fixed={false}>
        Info Alert
      </Alert>
    );
    const dismissIcon = screen.getByRole('img', { hidden: true });
    expect(dismissIcon).toBeInTheDocument();
  });

  it('should not render a dismiss icon when fixed is true', () => {
    render(
      <Alert severity="info" fixed={true}>
        Info Alert
      </Alert>
    );
    const dismissIcon = screen.queryByRole('img', { hidden: true });
    expect(dismissIcon).not.toBeInTheDocument();
  });

  it('should apply the correct variant styles', () => {
    const { rerender } = render(
      <Alert severity="success" variant="filled">
        Filled Alert
      </Alert>
    );
    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('filled');

    rerender(
      <Alert severity="success" variant="outlined">
        Outlined Alert
      </Alert>
    );
    expect(alert).toHaveClass('outlined');
  });
});
