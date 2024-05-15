import { useState } from 'react';

function Lightbulb(props) {
  return <div>The lightbulb is {props.isOn ? 'on 🌝' : 'off 🌑'}</div>;
}

function Switch(props) {
  return <button onClick={() => props.setIsOn(!props.isOn)}>Toggle</button>;
}

export default function ExampleLiftingStateUp() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      <Lightbulb isOn={isOn} />
      <Switch isOn={isOn} setIsOn={setIsOn} />
    </div>
  );
}
