import "./index.css";
function App() {
  return (
    <>
      <div className="flex flex-col justify-content-center items-center h-screen">
        <h1> Krav SaaS </h1>

        <h2> Titel: </h2>
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
        <p className="font-bold"> Priority : 1 </p>
        <button className="bg-green-400 text-white font-bold py-2 px-4 rounded hover:bg-green-500 transition duration-300"> Reroll (0.19$) </button>
        <button className="bg-red-400 text-white font-bold py-2 px-4 rounded hover:bg-green-500 transition duration-300"> Boost (0.99$)</button>
      </div>
    </>
  );
}

export default App;
