import { useState } from "react";
import "./index.css";

function Dropdowns() {
  const [asA, setAsA] = useState("");
  const [iWant, setIWant] = useState("");
  const [inOrderTo, setInOrderTo] = useState("");

  return (
    <>
      <div className="flex align items-baseline gap-4">
        <p> As a </p>
        <select className="mt-4 p-2 border rounded" required value={asA} onChange={(event) => { setAsA(event.target.value); setIWant(""); setInOrderTo("") }}>
          <option value="" disabled hidden>Pick One</option>
          <option value="mouse">Mouse</option>
          <option value="horse">Horse</option>
          <option value="octopus">Octopus</option>
        </select>
      </div>

      <div className="flex align items-baseline gap-4">
        <p> I want to </p>
        <select className="mt-4 p-2 border rounded" required value={iWant} onChange={(event) => { setIWant(event.target.value); setInOrderTo("") }}>
          <option value="" disabled hidden>Pick One</option>
          {
            asA === "mouse" ? (
              <>
                <option value="scroll">Scroll</option>
                <option value="click">Click</option>
                <option value="drag">Drag</option>
                <option value="navigate">Navigate</option>
                <option value="highlight">Highlight</option>
                <option value="select">Select</option>
                <option value="point">Point</option>
                <option value="zoom">Zoom</option>
                <option value="move">Move</option>
                <option value="glide">Glide</option>
              </>
            ) : asA === "horse" ? (
              <>
                <option value="gallop">Gallop</option>
                <option value="trot">Trot</option>
                <option value="jump">Jump</option>
                <option value="neigh">Neigh</option>
                <option value="graze">Graze</option>
                <option value="race">Race</option>
                <option value="buck">Buck</option>
                <option value="rear">Rear</option>
                <option value="nuzzle">Nuzzle</option>
                <option value="run">Run</option>
              </>
            ) : asA === "octopus" ? (
              <>
                <option value="connect">Connect</option>
                <option value="extend">Extend</option>
                <option value="power">Power</option>
                <option value="link">Link</option>
                <option value="charge">Charge</option>
                <option value="attach">Attach</option>
                <option value="synchronize">Synchronize</option>
                <option value="detect">Detect</option>
                <option value="share">Share</option>
                <option value="interface">Interface</option>
              </>
            ) : null
          }
        </select>
      </div>

      <div className="flex align items-baseline gap-4">
        <p> In order to </p>
        <select className="mt-4 p-2 border rounded" required value={inOrderTo} onChange={(event) => setInOrderTo(event.target.value)}>
          <option value="" disabled hidden>Pick One</option>
          <option value="increase-profit">Increase Profit</option>
          <option value="increase-profit">Increase Profit</option>
          <option value="increase-profit">Increase Profit</option>
          <option value="increase-profit">Increase Profit</option>
          <option value="increase-profit">Increase Profit</option>
          <option value="increase-profit">Increase Profit</option>
          <option value="increase-profit">Increase Profit</option>
          <option value="increase-profit">Increase Profit</option>
          <option value="increase-profit">Increase Profit</option>
          <option value="increase-profit">Increase Profit</option>
          <option value="increase-profit">Increase Profit</option>
          <option value="increase-profit">Increase Profit</option>
          <option value="increase-profit">Increase Profit</option>
          <option value="increase-profit">Increase Profit</option>
        </select>
      </div>
    </>
  );
}

export default Dropdowns;
