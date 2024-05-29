import { useEffect, useState } from 'react';

// count1 > 0 count2 > 0 --> display count1, count2
// count1 > 0 count2 < 0 --> display count1
// count2 > 0 count1 < 0 --> display count2
// count2 < 0 count1 < 0 --> display nothing

// Deriving state
function calculatePositiveValues(count1, count2) {
  if (count1 > 0 && count2 > 0) {
    return [count1, count2];
  } else if (count1 > 0 && count2 <= 0) {
    return [count1];
  } else if (count1 <= 0 && count2 > 0) {
    return [count2];
  } else if (count1 <= 0 && count2 <= 0) {
    return [];
  }
}

export default function ExampleDerivingState() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  // Extra state variable
  // const [positiveValues, setPositiveValues] = useState([]);

  // Extra state variable approach
  // useEffect(() => {
  //   if (count1 > 0 && count2 > 0) {
  //     setPositiveValues([count1, count2]);
  //   } else if (count1 > 0 && count2 <= 0) {
  //     setPositiveValues([count1]);
  //   } else if (count1 <= 0 && count2 > 0) {
  //     setPositiveValues([count2]);
  //   } else if (count1 <= 0 && count2 <= 0) {
  //     setPositiveValues([]);
  //   }
  // }, [count1, count2]);

  return (
    <div>
      <div>Count 1: {count1}</div>
      <div>Count 2: {count2}</div>
      <button onClick={() => setCount1(count1 + 1)}>Count 1 +</button>
      <button onClick={() => setCount1(count1 - 1)}>Count 1 -</button>
      <br />
      <button onClick={() => setCount2(count2 + 1)}>Count 2 +</button>
      <button onClick={() => setCount2(count2 - 1)}>Count 2 -</button>
      <div>
        {/* use join to display the array as a string with commas in between */}
        Positive Values: {calculatePositiveValues(count1, count2).join(', ')}
      </div>
    </div>
  );
}
