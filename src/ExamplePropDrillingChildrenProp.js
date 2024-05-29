function Nav(props) {
  return (
    <>
      {/* display the username in the Nav component */}
      <button>logout</button> {props.username}
    </>
  );
}

function Header(props) {
  return (
    <header>
      UpLeveled
      {/* Display any children components passed to Header */}
      {props.children}
    </header>
  );
}

export default function ExamplePropDrillingChildrenProp() {
  const user = { name: 'Antje' };
  return (
    <div>
      <Header>
        {/* Pass the Nav component as a child to Header and pass the username to Nav */}
        <Nav username={user.name} />
      </Header>
      <h2>Blogpost</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
}
