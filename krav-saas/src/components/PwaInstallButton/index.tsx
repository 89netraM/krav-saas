import { useEffect, useState } from "react";
import { awaitInstallable, triggerInstall } from "../../api/pwaInstall";
import "./index.css";

export default function PwaInstallButton() {
  const [isInstallable, setIsInstallable] = useState(false);
  useEffect(() => {
    awaitInstallable().then(() => setIsInstallable(true));
  }, []);

  return isInstallable ? (
    <button
      className="install-button bg-blue-400 text-white font-bold py-2 px-4 rounded hover:bg-blue-500 transition duration-300"
      onClick={() => triggerInstall()}
    >
      Install App
    </button>
  ) : null;
}
