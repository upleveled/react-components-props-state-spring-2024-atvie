import { useState } from 'react';

export default function ExampleConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  return (
    <>
      {/* Conditional Rendering with Ternary Operators */}
      {isLoggedIn ? <div>Welcome</div> : <div>Please log in</div>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
      <hr />
      {/* Conditional Rendering with Boolean Operators */}
      {isButtonVisible && <div>Click me</div>}
      <button onClick={() => setIsButtonVisible(!isButtonVisible)}>
        Toggle Button
      </button>
    </>
  );
}
