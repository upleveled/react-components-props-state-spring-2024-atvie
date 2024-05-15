import { useState } from 'react';

export default function ExampleStateNotSynchronous() {
  const [isOn, setIsOn] = useState(true);

  function toggleLight() {
    // workaround
    // const newValue = !isOn;
    console.log('before', isOn);
    // workaround
    // setIsOn(newValue);
    setIsOn(!isOn);
    // console.log(newValue)
    console.log('after', isOn);
  }

  return (
    <div>
      light bulb is {isOn ? 'on 🌝' : 'off 🌑'}
      <button onClick={() => toggleLight()}>toggle</button>
    </div>
  );
}
