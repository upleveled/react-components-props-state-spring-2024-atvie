import { useEffect, useState } from 'react';

export default function ExampleDataFetching() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // runs on initial render
  useEffect(() => {
    async function firstRenderFetch() {
      const response = await fetch('https://randomuser.me/api/', {
        method: 'GET',
      });

      const data = await response.json();

      setUsers([data.results[0]]);

      setIsLoading(false);
    }

    firstRenderFetch().catch((error) => {
      console.log(error);
    });
  }, []); // only triggers on initial render

  useEffect(() => {
    if (users.length > 0) {
      document.title = users[users.length - 1].name.first;
    }
  }, [users]); // only triggers when users is updated

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={`user-${Number(user.uuid)}`}>
            <img src={user.picture.medium} alt="user pic" />
            <h2>
              {user.name.first} {user.name.last}
            </h2>
            <div>
              Location: {user.location.city} {user.location.state}{' '}
              {user.location.country}
            </div>
            <div>Email: {user.email}</div>
          </div>
        );
      })}
      <div>
        <button
          onClick={async () => {
            const response = await fetch('https://randomuser.me/api/', {
              method: 'GET',
            });

            const data = await response.json();

            // 1. copy state
            // const newUsers = [...users];
            // 2. update state
            // newUsers.push(data.results[0]);
            // 3. set new state with copy
            // setUsers(newUsers);

            // using spread operator syntax
            setUsers([...users, data.results[0]]);
          }}
        >
          Get User
        </button>
      </div>
    </div>
  );
}
