import ExampleArrayofObjects from './ExampleArrayofObjects.js';
import ExampleChildrenProps from './ExampleChildrenProps.js';
import ExampleChildrenPropsVsPropDrilling from './ExampleChildrenPropsVsPropDrilling.js';
import ExampleClassToFunction from './ExampleClassToFunction.js';
import ExampleComponents from './ExampleComponents.js';
import ExampleConditionalRendering from './ExampleConditionalRendering.js';
import ExampleControlledComponentsCheckboxes from './ExampleControlledComponentsCheckboxes.js';
import ExampleDataFetching from './ExampleDataFetching.js';
import ExampleDataModeling from './ExampleDataModeling.js';
import ExampleDerivingState from './ExampleDerivingState.js';
import ExampleFormsWithControlledComponents from './ExampleFormsWithControlledComponents.js';
import ExampleLiftingStateUp from './ExampleLiftingStateUp.js';
import ExampleMappingOverArrays from './ExampleMappingOverArrays.js';
import ExamplePropDrilling from './ExamplePropDrilling.js';
import ExamplePropDrillingChildrenProp from './ExamplePropDrilling.js';
import ExampleProps from './ExampleProps.js';
import ExamplePropsDestructuring from './ExamplePropsDestructuring.js';
import ExamplePropTypes from './ExamplePropTypes.js';
import ExampleReactAntipatterns from './ExampleReactAntipatterns.js';
import ExampleStateCounter from './ExampleStateCounter.js';
import ExampleStateEmail from './ExampleStateEmail.js';
import ExampleStateManagement from './ExampleStateManagement.js';
import ExampleStateNotSynchronous from './ExampleStateNotSynchronous.js';
import ExampleStylingOptions from './ExampleStylingOptions.js';
import ExampleUseEffect from './ExampleUseEffect.js';

export default function App() {
  return (
    <>
      <h1>Example: Data Fetching</h1>
      <ExampleDataFetching />
      <br />
      <br />
      <br />
      <br />
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
      <h1>Example: Mapping over Arrays</h1>
      <ExampleMappingOverArrays />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: Conditional Rendering</h1>
      <ExampleConditionalRendering />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: Props Destructuring</h1>
      <ExamplePropsDestructuring />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: State not Synchronous</h1>
      <ExampleStateNotSynchronous />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: Forms With Controlled Components</h1>
      <ExampleFormsWithControlledComponents />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: Lifting State Up</h1>
      <ExampleLiftingStateUp />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: Styling Options</h1>
      <ExampleStylingOptions />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: Class to Function Component</h1>
      <ExampleClassToFunction
        user={{
          details: 'details',
          name: 'Lukas',
          imageAlt: 'this is an image',
          image:
            'https://api.memegen.link/images/buzz/memes/memes_everywhere.png?width=400',
        }}
      />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: React Antipatterns</h1>
      <ExampleReactAntipatterns />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: Controlled Components with Checkboxes</h1>
      <ExampleControlledComponentsCheckboxes />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: Array of Objects</h1>
      <ExampleArrayofObjects />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: UseEffect</h1>
      <ExampleUseEffect />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: Children Props</h1>
      <ExampleChildrenProps />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: Prop Types</h1>
      <ExamplePropTypes />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: Data Modeling</h1>
      <ExampleDataModeling />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: Deriving State vs. Extra State Variable</h1>
      <ExampleDerivingState />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: Prop Drilling</h1>
      <ExamplePropDrilling />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: Children Prop</h1>
      <ExampleChildrenPropsVsPropDrilling />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: State Management</h1>
      <ExampleStateManagement />
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
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
