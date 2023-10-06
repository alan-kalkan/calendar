import "./App.css";
import { getMonth } from "./utils/calendar";

function App() {
  console.table(getMonth());
  return <div>App</div>;
}

export default App;
