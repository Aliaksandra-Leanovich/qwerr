import "./App.css";
import { CheckboxForm } from "./components/Checkbox/CheckboxForm";

function App() {
  const userToken = localStorage.getItem("userToken");

  return (
    <div className="App">
      <h2>Product Page</h2>
      <p>{userToken}</p>

      <CheckboxForm />
    </div>
  );
}

export default App;
