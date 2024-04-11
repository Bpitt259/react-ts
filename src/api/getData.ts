import fetch from "node-fetch";

const getData = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
};

export default getData;
