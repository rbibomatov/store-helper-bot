import "./App.css";
import { useTelegram } from "./hooks/useTelegram";

function App() {
  const { onClose } = useTelegram();

  return (
    <>
      <h1>Hello!</h1>
      <button onClick={onClose}></button>
    </>
  );
}

export default App;
