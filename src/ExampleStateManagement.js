import { useMachine } from '@xstate/react';
import { useReducer, useState } from 'react';
import { createMachine } from 'xstate';

// initial state of the lightbulb with useReducer
const initialLightbulbState = { status: 'on' };

// reducer function for the lightbulb
function lightbulbReducer(lightbulb, action) {
  switch (action.type) {
    case 'turnOn': {
      if (lightbulb.status !== 'broken') {
        return { status: 'on' };
      }
      return lightbulb;
    }
    case 'turnOff': {
      if (lightbulb.status !== 'broken') {
        return { status: 'off' };
      }
      return lightbulb;
    }
    case 'break':
      return { status: 'broken' };
    default:
      throw new Error('Unknown action');
  }
}

function ExampleUseReducer() {
  // initialize the lightbulb state with useReducer
  const [lightbulb, dispatch] = useReducer(
    lightbulbReducer,
    initialLightbulbState,
  );
  return (
    <div>
      <div>Lightbulb: {lightbulb.status}</div>
      {/* buttons to change the state of the lightbulb with dispatch */}
      <button onClick={() => dispatch({ type: 'turnOn' })}>On</button>
      <button onClick={() => dispatch({ type: 'turnOff' })}>Off</button>
      <button onClick={() => dispatch({ type: 'break' })}>Break</button>
    </div>
  );
}

// state machine for the lightbulb with XState
const lightbulbMachine = createMachine({
  id: 'lightbulb',
  initial: 'lightbulbOn',
  states: {
    lightbulbOn: {
      on: {
        TURN_OFF: 'lightbulbOff', // SNAKE_CASE
        BREAK: 'lightbulbBroken',
      },
    },
    lightbulbOff: {
      on: {
        TURN_ON: 'lightbulbOn', // SNAKE_CASE
        BREAK: 'lightbulbBroken',
      },
    },
    lightbulbBroken: {
      on: {
        // No transitions when broken!
      },
    },
  },
});

function ExampleXstate() {
  // initialize the lightbulb state with useMachine from XState
  const [lightbulb, send] = useMachine(lightbulbMachine);
  return (
    <div>
      <div>Lightbulb: {lightbulb.value}</div>
      <button
        onClick={() => {
          // send an event to the state machine
          send({ type: 'TURN_ON' });
        }}
      >
        On
      </button>
      <button
        onClick={() => {
          send({ type: 'TURN_OFF' });
        }}
      >
        Off
      </button>
      <button
        onClick={() => {
          send({ type: 'BREAK' });
        }}
      >
        Break
      </button>
    </div>
  );
}

export default function ExampleStateManagement() {
  const [lightbulb, setLightbulb] = useState({ status: 'on' });
  return (
    <>
      <h2>State Management with useState</h2>
      <div>Lightbulb: {lightbulb.status}</div>
      <div>
        <button
          onClick={() =>
            setLightbulb(
              lightbulb.status !== 'broken'
                ? { status: 'on' }
                : { status: 'broken' },
            )
          }
        >
          On
        </button>
        <button
          onClick={() =>
            setLightbulb(
              lightbulb.status !== 'broken'
                ? { status: 'off' }
                : { status: 'broken' },
            )
          }
        >
          Off
        </button>
        <button onClick={() => setLightbulb({ status: 'broken' })}>
          Break
        </button>
      </div>
      <h2>Example UseReducer</h2>
      <ExampleUseReducer />
      <h2>Example XState</h2>
      <ExampleXstate />
    </>
  );
}
