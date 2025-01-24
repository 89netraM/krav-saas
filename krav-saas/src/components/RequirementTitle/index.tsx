import { useCallback, useState } from "react";
import { purchaseTitle } from "../../api/wallet";
import "./index.css";

function RequirementTitle() {
  const [title, setTitle] = useState("");
  function onTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    if (newValue.length >= title.length) {
      setTitle(newValue);
    }
  }

  const onTitleClear = useCallback(async () => {
    await purchaseTitle();
    setTitle("");
  }, []);

  return (
    <div className="title">
      <h2>Title:</h2>
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
    </div>
  );
}

export default RequirementTitle;
