export interface Wallet {
  freeCredits: number;
  realCredits: number;
}

const initialWallet: Wallet = {
  freeCredits: 20.0,
  realCredits: 0,
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function initializeWallet() {
  window.localStorage.setItem("wallet", JSON.stringify(initialWallet));
}

export async function getWallet(): Promise<Wallet> {
  await sleep(1000);
  const stringWallet = window.localStorage.getItem("wallet");
  if (!stringWallet) {
    initializeWallet();
    return initialWallet;
  }
  return JSON.parse(stringWallet);
}

export function setWallet(wallet: Wallet) {
  window.localStorage.setItem("wallet", JSON.stringify(wallet));
}

export async function purchaseReroll() {
  const wallet = await getWallet();
  wallet.freeCredits -= 0.19;
  setWallet(wallet);
}

export async function purchaseBoost() {
  const wallet = await getWallet();
  wallet.freeCredits -= 0.99;
  setWallet(wallet);
}

export async function purchaseTitle() {
  const wallet = await getWallet();
  wallet.freeCredits -= 1.99;
  setWallet(wallet);
}
