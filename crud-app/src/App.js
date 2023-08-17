import './App.css';
import Create from './components/create';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from './components/read';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
