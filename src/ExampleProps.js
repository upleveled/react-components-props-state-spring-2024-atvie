export default function ExampleProps(props) {
  console.log(props);
  return (
    <>
      <div>Name: {props.name}</div>
      <div>Age: {props.age}</div>
      <div>Street: {props.address.street}</div>
      <div>ZipCode: {props.address.zipCode}</div>
    </>
  );
}
