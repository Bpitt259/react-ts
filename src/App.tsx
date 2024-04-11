import { useState, useEffect } from "react";
import "./App.css";
import getData from "./api/getData";

function App() {
  const [data, setData] = useState<any>(null);
  const url = "https://api.github.com/users/github";

  useEffect(() => {
    setData(getData(url));
  }, []);

  return (
    <div className="App">
      <header className="App-header">header</header>
      <main>{data}</main>
    </div>
  );
}

export default App;
