import Card from "./components/Card";

export default function App() {
  let myObj ={
    username:"chaiorcode",
    age:30
  }
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-5">
        My React App
      </h1>

      <Card channel="chaiorcode" username={myObj.username} btnText="Click Me" />
      
      <Card channel="chaiorcode" username="hassan" btnText="Follow me" />
    </div>
  );
}