// 1. Create state variable
// 2. Connect the state variable to the form fields
// 3. Update the values of the state variables based on user input

import { useState } from 'react';

export default function ExampleControlledComponentsCheckboxes() {
  // 1. Create state variable
  const [isCookieAccepted, setIsCookieAccepted] = useState(false);

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <h3>{JSON.stringify(isCookieAccepted)}</h3>
      <label>
        <input
          type="checkbox"
          // 2. Connect the state variable to the form fields
          checked={isCookieAccepted}
          // 3. Update the values of the state variables based on user input
          onChange={(event) => setIsCookieAccepted(event.currentTarget.checked)}
        />
        Cookie Accepted?
      </label>
    </form>
  );
}
