import { useState } from 'react';

export default function ExampleFunctionComponent({ user }) {
  const [detailsShown, setDetailsShown] = useState(false);

  if (user === undefined) return <div>User not found!</div>;

  return (
    <>
      <img src={user.image} alt={user.imageAlt} />
      <h1>{user.name}</h1>
      <button onClick={() => setDetailsShown(!detailsShown)}>
        {detailsShown ? 'Hide' : 'Show'} Details
      </button>
      {detailsShown && <p>{user.details}</p>}
    </>
  );
}
