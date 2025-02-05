let deferredPrompt: any;
let installResolve: () => void;
const installPromise = new Promise<void>(r => installResolve = r);

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installResolve();
});

export function awaitInstallable() {
  return installPromise;
}

export function triggerInstall() {
  deferredPrompt.prompt();
}
