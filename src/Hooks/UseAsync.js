import React, { useState, useEffect, useCallback } from 'react';

// Usage
function App( props) {
  const { execute, status, value, error } = useAsync(myFunction, false);
console.log(props)
  return (
    <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
      {status === 'idle' && <div>
        <p className="text-center text-3xl">Welcome.<br />Start your journey by clicking a button</p>
        </div>}
      {status === 'success' && <div>{value}</div>}
      {status === 'error' && <div>{error}</div>}
      <button className="bg-blue-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full" 
              onClick={execute} 
              disabled={status === 'pending'}
      >
        {status !== 'pending' ? 'Click me' : 'Loading...'}
      </button>
    </div>
  );
}

// An async function for testing our hook.
// Will be successful 50% of the time.
const myFunction = () => {
  // props.msg
  // TODO inserire alert CSS di rilievo
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.random() * 10;
      rnd <= 5
        ? resolve('Submitted successfully 🙌')
        : reject('Oh no there was an error 😞');
    }, 2000);
  });
};

// Hook
const useAsync = (asyncFunction, immediate = true) => {
  const [status, setStatus] = useState('idle');
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  // The execute function wraps asyncFunction and
  // handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.
  const execute = useCallback(() => {
    setStatus('pending');
    setValue(null);
    setError(null);

    return asyncFunction()
      .then(response => {
        setValue(response);
        setStatus('success');
      })
      .catch(error => {
        setError(error);
        setStatus('error');
      });
  }, [asyncFunction]);

  // Call execute if we want to fire it right away.
  // Otherwise execute can be called later, such as
  // in an onClick handler.
  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, value, error };
};
export default App;