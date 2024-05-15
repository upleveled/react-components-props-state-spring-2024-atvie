import { useState } from 'react';

export default function ExampleFormsWithControlledComponents() {
  // 1. Create a state variable
  const [usernameInput, setUsernameInput] = useState('');
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <input
        // 2. Connect the state with the input field
        value={usernameInput}
        // 3. update the state onChange event
        onChange={(event) => setUsernameInput(event.currentTarget.value)}
      />
      <div>Name: {usernameInput}</div>
      <button>Click</button>
    </form>
  );
}
