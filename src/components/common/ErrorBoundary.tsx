import { Component, ReactNode } from 'react';
import { Container, Title, Text, Button, Stack, Paper } from '@mantine/core';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log the error to a logging service
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Container size="sm" py="xl">
          <Paper p="xl" radius="md" withBorder>
            <Stack align="center" gap="md">
              <Title order={2} style={{ color: 'var(--mantine-color-red-6)' }}>
                Something went wrong
              </Title>
              <Text size="sm" ta="center" style={{ color: 'var(--mantine-color-gray-6)' }}>
                We apologize for the inconvenience. Please try refreshing the page or contact support if the
                problem persists.
              </Text>
              <Button onClick={this.handleReset}>Try Again</Button>
            </Stack>
          </Paper>
        </Container>
      );
    }

    return this.props.children;
  }
} 