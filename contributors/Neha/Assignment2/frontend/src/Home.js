import React, { useEffect } from "react";
import axios from "axios";
const Home = () => {
  const [msg, setMsg] = React.useState("Click the button in home");

  const handleClick = async () => {
    try {
      const response = await axios.get("http://localhost:90");
      console.log(response);
      setMsg(response.data.msg);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick1 = async (e) => {
    e.preventDefault();
    const form = document.querySelector("form");
  
      const formData = new FormData(form);

      axios
        .post("http://localhost:90/upload", formData)
        .then((response) => {
          console.log(response.data);
          alert(response.data.msg);
        })
        .catch((error) => {
          console.error(error);
        });

  };
  return (
    <div
      style={{
        margin: "28vh 28vw",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>{msg}</h1>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: "blue",
          color: "white",
          borderRadius: "10px",
          padding: "10px",
          fontSize: "20px",
        }}
      >
        Click Me
      </button>
      <form
       onSubmit={handleClick1}
      >
        <label htmlFor="myFile">Select a file:</label>
        <input type="file" id="myFile" name="myFile" />
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            borderRadius: "10px",
            padding: "10px",
            fontSize: "20px",
          }}
          type="submit"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default Home;
