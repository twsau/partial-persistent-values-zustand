import { useApp } from "./hooks";

export const App = () => {
  const app = useApp();
  return (
    <>
      <p>
        first count does not persist in local storage (will not survive a
        refresh)
      </p>
      <button onClick={app.incrementCount}>+ first count</button>
      <button onClick={app.incrementStoredCount}>+ second count</button>
      <pre>{JSON.stringify(app)}</pre>
    </>
  );
};
