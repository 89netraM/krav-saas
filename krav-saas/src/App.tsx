import { useState } from "react";
import "./index.css";

function App() {
  const [priority, setPriority] = useState(0);

  return (
    <>
      <div className="flex flex-col justify-content-center items-center h-100">
        <h1> Requirements SaaS </h1>

        <h2> Title: </h2>
        <div className="flex align items-baseline gap-4">
          <p> As a </p>
          <select className="mt-4 p-2 border rounded">
            <option value="option1">Mouse</option>
            <option value="option2">Horse</option>
            <option value="option3">Cow</option>
          </select>
        </div>

        <div className="flex align items-baseline gap-4">
          <p> I want to </p>
          <select className="mt-4 p-2 border rounded">
            <option value="option1">Mouse</option>
            <option value="option2">Horse</option>
            <option value="option3">Cow</option>
          </select>
        </div>

        <div className="flex align items-baseline gap-4">
          <p> In order to </p>
          <select className="mt-4 p-2 border rounded">
            <option value="option1">Mouse</option>
            <option value="option2">Horse</option>
            <option value="option3">Cow</option>
          </select>
        </div>
        <p className="font-bold"> Priority : {priority} </p>
        <div className="flex flex gap-4 mt-4 ">
          <button
            onClick={() => setPriority(Math.round(Math.random() * 10))}
            className="bg-green-400 text-white font-bold py-2 px-4 rounded hover:bg-green-500 transition duration-300"
          >
            {" "}
            Reroll (0.19$){" "}
          </button>
          <button
            onClick={() => setPriority(priority + 1)}
            className="bg-red-400 text-white font-bold py-2 px-4 rounded hover:bg-green-500 transition duration-300"
          >
            {" "}
            Boost (0.99$)
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
