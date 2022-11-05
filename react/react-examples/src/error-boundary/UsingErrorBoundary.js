import Counter from './Counter';
import ErrorBoundary from './ErrorBoundary';

const UsingErrorBoundary = () => {
  return (
    <>
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
    </>
  );
};

export default UsingErrorBoundary;
