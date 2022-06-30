import Textbar from "../component/textbar";
import axios from "axios";
import { useEffect, useState } from "react";

const CreateAccount = () => {
  const [userData, setUserData] = useState({});
  const [result, setResult] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (firstName && lastName && emailAddress && password) {
      setUserData({
        firstName: firstName,
        lastName: lastName,
        emailAddress: emailAddress,
        password: password,
      });
    }
  }, [firstName, lastName, emailAddress, password]);

  const registerAccount = async () => {
    try {
      if (Object.keys(userData).length != 0) {
        const res = await axios.post(
          "http://localhost:3003/api/register",
          userData
        );
        if (res.data == "success") {
          setResult("You have been registered successfully");
          setFirstName("");
          setLastName("");
          setEmailAddress("");
          setPassword("");
          setUserData({});
        } else {
          setResult(res.data);
        }
      } else {
        setResult("Please fill in all rows!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bigBox">
      <div className="register-box">
        <form>
          <Textbar
            header={`First Name`}
            value={firstName}
            setData={(e) => setFirstName(e.target.value)}
          ></Textbar>
          <Textbar
            header={`Last Name`}
            value={lastName}
            setData={(e) => setLastName(e.target.value)}
          ></Textbar>

          <Textbar
            header={`Email Address`}
            value={emailAddress}
            setData={(e) => setEmailAddress(e.target.value)}
          ></Textbar>

          <Textbar
            header={`Password`}
            value={password}
            setData={(e) => setPassword(e.target.value)}
          ></Textbar>
        </form>
      </div>
      {result && <h> {result}</h>}
      <button onClick={registerAccount}>Register</button>
    </div>
  );
};

export default CreateAccount;
