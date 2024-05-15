export default function ExampleMappingOverArrays() {
  // const teamMembers = ['Karl', 'Victor', 'Lukas', 'Antje', 'Karl'];

  const teamMembers = [
    { id: 1, name: 'Karl H' },
    { id: 2, name: 'Victor' },
    { id: 3, name: 'Lukas' },
    { id: 4, name: 'Karl S' },
  ];

  return (
    <div>
      {teamMembers.map((teamMember) => {
        return (
          <div key={`teamMember-${teamMember.id}`}>
            <div>{teamMember.name}</div>
          </div>
        );
      })}
    </div>
  );
}
