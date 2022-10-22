import './App.css';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home"
import Cards from "./components/Cards"
import Table from "./components/Table"
import Form from "./components/Form"
import Api from "./components/Api"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cards" element={<Cards />} />
          <Route exact path="/table" element={<Table />} />
          <Route exact path="/form" element={<Form />} />


          <Route exact path="/api" element={<Api />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
