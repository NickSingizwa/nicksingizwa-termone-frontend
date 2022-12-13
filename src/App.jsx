import './App.css';
import Calc from './views/Calc'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Calc />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
