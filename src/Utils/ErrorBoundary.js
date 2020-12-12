import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }
  componentDidUpdate() {
    console.log("error boundary");
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div
          style={{
            backgroundColor: "#F8D7DA",
            border: "1px solid #f5c2c7",
            color: "#842029",
            borderRadius: ".25rem",
            margin: "1rem auto",
          }}
        >
          Something went wrong: {this.state.error.message}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
