import "./App.css";
import Text from "./routes/text";
import Authenticate from "./logicControll/authLogic";
import SignIn from "./routes/signIn";
import CreateAccount from "./routes/createAccount";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignIn />}></Route>
          <Route path="/register" element={<CreateAccount />}></Route>
          <Route
            path="/post"
            element={
              <Authenticate>
                <Text />
              </Authenticate>
            }
          ></Route>
          <Route path="test" element={<Text />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
