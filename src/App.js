import logo from './logo.svg';
import './App.css';
import Termekek from './components/Termekek';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h3>Books</h3>
      </header>
      <div className='kontener'>
      <Termekek />
      </div>
    </div>
  );
}

export default App;
