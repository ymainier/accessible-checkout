import { CheckoutForm } from "./CheckoutForm";
import { Basket } from "./Basket";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Checkout</h1>
      <Basket />
      <hr />
      <CheckoutForm />
    </div>
  );
}

export default App;
