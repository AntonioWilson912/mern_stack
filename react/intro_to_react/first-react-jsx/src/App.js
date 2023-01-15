import './App.css';
import PersonCard from './component/PersonCard';

function App() {
  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <h3>Things I need to do:</h3>
      <ul>
        <li>Learn React</li>
        <li>Climb Mt. Everest</li>
        <li>Run a marathon</li>
        <li>Feed the dogs</li>
      </ul>
      <PersonCard name={ "Jennifer" } age={ 52 } hairColor={ "green" }/>
    </div>
  );
}

export default App;
