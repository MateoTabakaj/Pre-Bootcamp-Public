import "./App.css";
import UserCard from "./components/UserCard";

function App() {
  const prop = [
    { firstName: "Jane", lastName: "Doe", age: 45, haircolor: "Black" },
    { firstName: "John", lastName: "Smith", age: 88, haircolor: "Browm" },
    {
      firstName: "Millard",
      lastName: "Fillmore",
      age: "50",
      haircolor: "Brown",
    },
    { firstName: "Maria", lastName: "Smith", age: 62, haircolor: "Brown" },
  ];
  const prs1 = prop[0];
  const prs2 = prop[1];
  const prs3 = prop[2];
  const prs4 = prop[3];

  return (
    <>
    <div className="App">
      <div class="first">
        <h1>
          {prs1.lastName},{prs1.firstName}
        </h1>
        <p>Age:{prs1.age}</p>
        <p>Haircolor{prs1.haircolor}</p>
      </div>
      <div class="second">
        <h1>
          {prs2.lastName},{prs2.firstName}
        </h1>
        <p>Age:{prs2.age}</p>
        <p>Haircolor:{prs2.haircolor}</p>
      </div>
      <div class="third">
        <h1>
          {prs3.lastName},{prs3.firstName}
        </h1>
        <p>Age:{prs3.age}</p>
        <p>Haircolor:{prs3.haircolor}</p>
      </div>
    </div>
    
    </>
  );
}

export default App;
