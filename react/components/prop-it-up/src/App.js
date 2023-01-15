import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard lastName={ "Jones" } firstName={ "Bob" } age={ 73 } hairColor={ "Green" }/>
      <PersonCard lastName={ "Wilson" } firstName={ "John" } age={ 27 } hairColor={ "Blue" }/>
      <PersonCard lastName={ "Cole" } firstName={ "Henry" } age={ 14 } hairColor={ "Black" }/>
      <PersonCard lastName={ "Junior" } firstName={ "Scout" } age={ 7 } hairColor={ "Blonde" }/>
    </div>
  );
}

export default App;
