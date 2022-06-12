import { usePartialPersistentStore } from "./hooks";

export const App = () => {
  const store = usePartialPersistentStore();
  return (
    <>
      <p>
        first count does not persist in local storage (will not survive a
        refresh)
      </p>
      <button onClick={() => store.incrementFirstCount()}>+ first count</button>
      <button onClick={() => store.incrementSecondCount()}>
        + second count
      </button>
      <pre>{JSON.stringify(store)}</pre>
    </>
  );
};
