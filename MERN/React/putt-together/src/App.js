import "./App.css";
import UserCard from "./components/card";

function App() {
  return (
    <div className="App">
      <UserCard
        lastName={'Doe'}
        firstName={'Jane'}
        age= {45}
        haircolor={'Black'}
      />
      <UserCard
        lastName={'Smith'}
        firstName={'John'}
        age= {88}
        haircolor={'Brown'}
      />
    </div>
  );
}

export default App;

