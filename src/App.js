
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';

function App() {
  return (
    <div className="App">
      {/* add routes of the pages  */}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
