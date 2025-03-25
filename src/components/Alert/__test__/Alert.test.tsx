import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Alert from '../';
import '@testing-library/jest-dom';
import { colors } from '@/styles';

describe('Alert component', () => {
  it('should render correctly', () => {
    render(<Alert severity="success">Success Alert</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent('Success Alert');
  });

  it('should render the correct icon based on severity', () => {
    render(<Alert severity="success">Success Alert</Alert>);
    const icon = screen.getByTestId('severity-icon');
    expect(icon).toBeInTheDocument();
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
    const dismissIcon = screen.getByTestId('dismiss-icon');
    expect(dismissIcon).toBeInTheDocument();
  });

  it('should not render a dismiss icon when fixed is true', () => {
    render(
      <Alert severity="info" fixed={true}>
        Info Alert
      </Alert>
    );
    const dismissIcon = screen.queryByTestId('dismiss-icon');
    expect(dismissIcon).not.toBeInTheDocument();
  });

  it('should apply the correct variant styles', () => {
    const { rerender } = render(
      <Alert severity="success" variant="filled">
        Filled Alert
      </Alert>
    );
    const alert = screen.getByRole('alert');
    expect(alert).toHaveStyle(`background-color: ${colors.success.default}`);

    rerender(
      <Alert severity="success" variant="outlined">
        Outlined Alert
      </Alert>
    );
    expect(alert).toHaveStyle(`border: 2px solid ${colors.success.default}`);
  });

  it('should render Title and Description inside Alert', () => {
    render(
      <Alert severity="info">
        <Alert.Title>Alert Title</Alert.Title>
        <Alert.Description>Alert Description</Alert.Description>
      </Alert>
    );

    const title = screen.getByText('Alert Title');
    const description = screen.getByText('Alert Description');

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('should throw an error if Title is used outside of Alert', () => {
    const renderOutsideAlert = () =>
      render(<Alert.Title>Invalid Title</Alert.Title>);

    expect(renderOutsideAlert).toThrowError(
      'Hierarchical Alert component is being used outside of the AlertProvider'
    );
  });

  it('should throw an error if Description is used outside of Alert', () => {
    const renderOutsideAlert = () =>
      render(<Alert.Description>Invalid Description</Alert.Description>);

    expect(renderOutsideAlert).toThrowError(
      'Hierarchical Alert component is being used outside of the AlertProvider'
    );
  });
});
