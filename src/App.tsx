
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Login from './pages/login';

function App() {

  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>

      </Router>
    </div>
  )
}

export default App
