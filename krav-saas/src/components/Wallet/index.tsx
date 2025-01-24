import { useState } from "react";
import { getWallet } from "../../api/wallet";
import Spinner from "../Spinner";

function Wallet() {
  const [wallet] = useState(getWallet());

  if (!wallet) {
    return <Spinner />;
  }

  return (
    <div w-50>
      <p>Wallet: {wallet.freeCredits} free credits</p>
      <p>{wallet.realCredits} real credits</p>
    </div>
  );
}

export default Wallet;
