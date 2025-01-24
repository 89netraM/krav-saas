import { useState } from "react";
import Wallet from "./components/Wallet";
import Dropdowns from "./components/Dropdowns";
import "./index.css";
import Spinner from "./components/Spinner";

function App() {
  const [priority, setPriority] = useState(0);

  const [title, setTitle] = useState("");
  function onTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    if (newValue.length >= title.length) {
      setTitle(newValue);
    }
  }
  function onTitleClear() {
    setTitle("");
  }

  const [spinneron, setSpinneron] = useState(false);

  return (
    <>
      <Wallet />
      <div className="flex flex-col justify-content-center items-center">
        <img src="logo-big.png" style={{ height: 205, width: 200 }} />
      </div>

      <div className="flex flex-col justify-content-center items-center h-100">
        <h1> Create new ticket </h1>

        <h2>
          Title:
          <input
            type="text"
            className="mt-4 p-2 border rounded"
            value={title}
            onChange={onTitleChange}
          />
          <button
            className="clear-title bg-blue-400 text-white font-bold py-2 px-4 rounded hover:bg-blue-500 transition duration-300"
            onClick={onTitleClear}
          >
            Clear ($1.99)
          </button>
        </h2>

        <Dropdowns />

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
        <div className="flex flex gap-8 mt-4 createbutton">
          <button
            onClick={() => (setSpinneron(true))}
            className="text-white font-bold py-2 px-4 rounded hover:bg-green-500 transition duration-300"
          >
            {" "}
            Create (100$)
          </button>
        </div>
      </div>
      {spinneron?<Spinner />:null}
    </>
  );
}

export default App;
