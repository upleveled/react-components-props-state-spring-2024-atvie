// function Tweet(props) {
//   return (
//     <div style={{ border: '2px solid', margin: '8px', padding: '12px' }}>
//       <h2>Name: {props.user}</h2>
//       <div>message: {props.message}</div>
//       <h3>Number of likes: {props.likes}</h3>
//     </div>
//   );
// }

function Tweet({ user, message, likes }) {
  return (
    <div style={{ border: '2px solid', margin: '8px', padding: '12px' }}>
      <h2>Name: {user}</h2>
      <div>message: {message}</div>
      <h3>Number of likes: {likes}</h3>
    </div>
  );
}

export default function ExamplePropsDestructuring() {
  return (
    <div>
      <Tweet user="Karl" message="please use Slack" likes={12} />
      <Tweet user="Victor" message="I love React" likes={23} />
    </div>
  );
}
