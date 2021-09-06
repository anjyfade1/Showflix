import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Showflix from './Container/Showflix/showflix';

function App() {
  return (
    <Router>

      <div className="App">
      <Showflix/>
      </div>
    </Router>
  );
}

export default App;
