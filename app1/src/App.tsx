import { CheckboxForm } from "./components/CheckboxForm";

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
