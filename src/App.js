import { useState } from "react";
import "./App.css";
import Details from "./Components/Details";
import List from "./Components/List";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [Data, setdata] = useState([]);
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      console.log(res.data);
      setdata(res.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<List dat={Data} />} />
          <Route path="/details/:id" element={<Details dat={Data} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
