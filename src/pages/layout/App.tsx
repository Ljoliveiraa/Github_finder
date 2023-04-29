import { Outlet } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1>Teste EcoDots</h1>
      <Outlet />
    </div>
  );
}

export default App;
