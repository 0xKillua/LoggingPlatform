import { useState, useEffect } from "react";
import axios from "axios";

const Text = () => {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [result, setResult] = useState("Submit your first text!");
  const [data, setData] = useState([]);
  const submitText = (event) => {
    setText(event.target.value);
  };

  const submitAuthor = (event) => {
    setAuthor(event.target.value);
  };
  const abc = async () => {
    const returnData = await axios.get(
      "http://localhost:3003/api/get-data/Peter"
    );
    setData(returnData.data);
  };

  const postData = () => {
    if (text === "" || author === "") setResult("Please enter both fields");
    else {
      axios
        .post("http://localhost:3003/api/post-data", {
          author: author,
          text: text,
        })
        .then(function (res) {
          setText("");
          setAuthor("");
          setResult("Successfully submitted!");
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="textPanel">
      <div className="fetchData">
        {data.map((item) => (
          <div className="databox">
            <h>Author: {item.author} </h>
            <h>Data: {item.text}</h>
          </div>
        ))}
      </div>
      <div className="author">
        <h>author: </h>
        <input
          type="text"
          name="author"
          value={author}
          onChange={submitAuthor}
        ></input>
      </div>
      <div className="text">
        <h>Input your text here: </h>
        <textarea
          type="text"
          name="mainP"
          value={text}
          onChange={submitText}
        ></textarea>
      </div>
      <div>
        <button onClick={postData}> submit</button>
        <button onClick={abc}>call</button>
      </div>
      <h>{result}</h>
    </div>
  );
};

export default Text;
