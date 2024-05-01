import React from 'react';

interface Props {
	children: React.ReactNode;
}

interface State {
	hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error) {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		this.logErrorToMyService(error, errorInfo);
	}

	logErrorToMyService(error: Error, errorInfo: React.ErrorInfo) {
		console.error('Caught an error:', error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return <h1>Что-то пошло не так.</h1>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
