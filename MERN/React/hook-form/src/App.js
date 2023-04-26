import './App.css';
import UserForm ,{User} from './components/form';
// import User from './components/formcopy';

function App() {
  return (
    <div className="App">
      <UserForm className="User"/>
      <User></User>
    </div>
  );
}

export default App;
