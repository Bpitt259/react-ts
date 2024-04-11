import { useState, useEffect } from "react";
import "./App.css";
import fetchData from "./api/fetchData";

function App() {
  const [data, setData] = useState<any>("");
  const url = "https://dummyjson.com/products/1";

  useEffect(() => {
    async function getData() {
      try {
        const books = await fetchData(url);
        setData(books);
      } catch (err) {
        console.log("Error occured when fetching books");
      }
    }
    getData();
  }, []);

  console.log(data);
  return (
    <div className="App">
      <main>
        <div>{data.brand}</div>
        <div>{data.title}</div>
      </main>
    </div>
  );
}

export default App;
