import React from "react";
import GlobalStyles from "globalStyles";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";

interface ErrorFallbackProps {
	error: any;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
	return (
		<div role="alert">
			<p>Something went wrong:</p>
			<pre style={{ color: "red" }}>{error.message}</pre>
		</div>
	);
};

function App() {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<GlobalStyles />
		</ErrorBoundary>
	);
}

export default App;
