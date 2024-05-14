import ExampleComponents from './ExampleComponents.js';
import ExampleProps from './ExampleProps.js';
import ExampleStateCounter from './ExampleStateCounter.js';
import ExampleStateEmail from './ExampleStateEmail.js';

export default function App() {
  return (
    <>
      <h1>Example: Import and Export Components</h1>
      <ExampleComponents />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: Props</h1>
      <ExampleProps
        name="Karl"
        age={35}
        address={{ street: '123 Main Str', zipCode: 12345 }}
      />
      <hr />
      <ExampleProps
        name="Antje"
        age={28}
        address={{ street: '456 Main Str', zipCode: 7899 }}
      />
      <hr />
      <ExampleProps
        name="Victor"
        age={31}
        address={{ street: '112 Main Str', zipCode: 1111 }}
      />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: State Counter</h1>
      <ExampleStateCounter />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: State Email</h1>
      <ExampleStateEmail />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
