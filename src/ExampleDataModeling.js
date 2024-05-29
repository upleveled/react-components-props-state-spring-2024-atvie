import { useState } from 'react';

const teamRoles = {
  admin: 'admin',
  editor: 'editor',
  noRights: 'no-rights',
};

const teamJobPosition = {
  developer: 'developer',
  ceo: 'CEO',
};

const initialTeamMembers = [
  {
    id: 1,
    name: 'Victor',
    jobPosition: teamJobPosition.developer,
    role: teamRoles.editor,
    pets: [
      { name: 'Wuff', type: 'cat' },
      {
        name: 'Miau',
        type: 'dog',
      },
    ],
  },
  {
    id: 2,
    name: 'Karl',
    jobPosition: teamJobPosition.ceo,
    role: teamRoles.noRights,
    pets: [],
  },
  {
    id: 3,
    name: 'Antje',
    jobPosition: teamJobPosition.designer,
    role: teamRoles.editor,
    pets: [],
  },
  {
    id: 4,
    name: 'Matthias',
    jobPosition: teamJobPosition.designer,
    role: teamRoles.editor,
    pets: [],
  },
  {
    id: 5,
    name: 'Lukas',
    jobPosition: teamJobPosition.designer,
    role: teamRoles.editor,
    pets: [],
  },
];

export default function ExampleDataModeling() {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
  return (
    <>
      <div>
        {teamMembers.map((teamMember) => {
          return (
            <div key={`teamMember-${teamMember.id}`}>
              <div>Name: {teamMember.name}</div>
              <div>Role: {teamMember.role}</div>
              <hr />
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          const karl = teamMembers.find((teamMember) => {
            return teamMember.name === 'Karl';
          });
          // Update team member role directly
          karl.role = teamRoles.admin;
          // Update the team member role use spread operator to trigger rerender
          // in React immutable step
          setTeamMembers([...teamMembers]);
        }}
      >
        Change Karls role to Admin
      </button>
      <button
        onClick={() => {
          // copy and update the current state using .map
          const newTeamMembers = teamMembers.map((teamMember) => {
            if (teamMember.name === 'Victor') {
              // return copied object, and change the role
              return { ...teamMember, role: teamRoles.admin };
            }
            // return all other teamMembers
            return teamMember;
          });
          // set state to new copied array
          setTeamMembers(newTeamMembers);
        }}
      >
        Change Victor role to Admin
      </button>
    </>
  );
}
