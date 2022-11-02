import "./App.css";
import { useTelegram } from "./hooks/useTelegram";

function App() {
  const { onClose } = useTelegram();

  return (
    <>
      <h1>Hello!</h1>
      <input type="text" />
      <button onClick={onClose}>Отправить</button>
    </>
  );
}

export default App;
