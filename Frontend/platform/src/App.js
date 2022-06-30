import "./App.css";
import Text from "./routes/text";
import Home from "./routes/home";
import SignIn from "./routes/signIn";
import CreateAccount from "./routes/createAccount";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/create-account" element={<CreateAccount />}></Route>
          <Route path="/post" element={<Text />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
