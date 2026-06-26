import { Component, type ReactNode, type ErrorInfo } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * Error boundary with fallback UI and retry functionality.
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error Boundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex min-h-[400px] items-center justify-center px-4">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-coral/10">
              <AlertTriangle className="h-8 w-8 text-brand-coral" />
            </div>
            <h2 className="mb-2 text-xl font-bold text-text-primary font-heading">
              Something went wrong
            </h2>
            <p className="mb-6 max-w-md text-text-secondary">
              We apologise for the inconvenience. Please try refreshing the page or contact us if the
              problem persists.
            </p>
            <button
              onClick={this.handleReset}
              className="inline-flex items-center gap-2 rounded-xl bg-brand-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-navy-light"
            >
              <RefreshCw className="h-4 w-4" />
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
