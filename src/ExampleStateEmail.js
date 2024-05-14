// 1. create state for the component
// 2. display the current state
// 3. connect the onChange event ot update the state

import { useState } from 'react';

export default function ExampleStateEmail() {
  const [email, setEmail] = useState('');

  // 1. create state for the component

  let name = 'Karl';
  return (
    <>
      {/* 2. Display the current state */}
      <h2
        style={{
          padding: '10px',
          fontSize: '16px',
        }}
      >
        {email}
      </h2>
      <input
        style={{
          padding: '10px',
          fontSize: '16px',
          border: '1px solid blue',
          borderRadius: '5px',
        }}
        value={email}
        // 3. connect the onChange event ot update the state
        onChange={(event) => {
          console.log(event);
          setEmail(event.currentTarget.value);
        }}
      />
      {/* 💥💥  Example to how NOT to update 💥💥 */}
      <h2>{name}</h2>
      <button
        onClick={() => {
          console.log('update mame', name);
          name = 'Antje';
        }}
      >
        Update name to Antje
      </button>
    </>
  );
}
