import { useEffect, useState } from "react";
import { getWallet, type Wallet } from "../../api/wallet";
import Spinner from "../Spinner";
import "./index.css";

function Wallet() {
  const [wallet, setWallet] = useState<Wallet | undefined>(undefined);

  useEffect(() => {
    getWallet().then(setWallet);
  }, []);

  if (!wallet) {
    return <Spinner />;
  }

  return (
    <div className="wallet">
      Wallet
      <p>
        {wallet.freeCredits.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}{" "}
        free credits
      </p>
      <p>
        {wallet.realCredits.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}{" "}
        real credits
      </p>
    </div>
  );
}

export default Wallet;
