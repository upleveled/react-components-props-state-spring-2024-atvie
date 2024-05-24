import { useState } from 'react';

const initialUsers = [
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Tein',
      last: 'Beverloo',
    },
    location: {
      city: 'Uitwierde',
      state: 'Utrecht',
      country: 'Netherlands',
    },
    email: 'tein.beverloo@example.com',
    id: 1,
    picture: 'https://randomuser.me/api/portraits/med/men/97.jpg',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Tein',
      last: 'Beverloo',
    },
    location: {
      city: 'Uitwierde',
      state: 'Utrecht',
      country: 'Netherlands',
    },
    email: 'tein.beverloo@example.com',
    id: 2,
    picture: 'https://randomuser.me/api/portraits/med/men/97.jpg',
  },
];

export default function ExampleArrayofObjects() {
  const [users, setUsers] = useState(initialUsers);
  return (
    <>
      <div>
        {users.map((user) => {
          return (
            <div key={`user-${user.id}`}>
              <img src={user.picture} alt="user pic" />
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
      </div>
      <button
        onClick={() => {
          const newUserId = users[users.length - 1].id + 1;
          const newUser = {
            gender: 'female',
            name: {
              title: 'Ms',
              first: 'Antonija',
              last: 'Obradović',
            },
            location: {
              city: 'Pančevo',
              state: 'South Bačka',
              country: 'Serbia',
            },
            email: 'antonija.obradovic@example.com',
            id: newUserId,
            picture: 'https://randomuser.me/api/portraits/med/women/71.jpg',
          };
          // Don't do this!!
          // users.push(newUser);
          // console.log(users);

          // Do this!
          // // 1. Create a copy of the current state
          // // current state = initial users Array of Objects
          // const newUsers = [...users];
          // // 2. Update the copy with new user
          // newUsers.push(newUser);
          // // 3. Set state to the copy of the old state
          // setUsers(newUsers);
          setUsers([...users, newUser]);
        }}
      >
        Add User
      </button>
      <button
        onClick={() => {
          // 1. Create a copy of the current state
          const newUsers = [...users];
          // 2. Update the copy created in step 1
          newUsers[0].name.first = 'Antje';
          // 3. Set the state to the copy of the old state
          setUsers(newUsers);
        }}
      >
        Set first name to Antje
      </button>
      <button
        onClick={() => {
          // 1. Create a copy of the current state
          const newUsers = [...users];
          // 2. Update the copy created in step 1
          newUsers.pop();
          // 3. Set the state to the copy of the old state
          setUsers(newUsers);
        }}
      >
        Delete the last user
      </button>
    </>
  );
}
