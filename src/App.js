import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home"
import User from "./components/User"
import Form from "./components/Form"
import Api from "./components/Api"

function App() {
  return (
      <BrowserRouter>
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/api" element={<Api />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/user" element={<User />} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;
