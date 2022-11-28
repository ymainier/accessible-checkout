import { CheckoutForm } from "./CheckoutForm";
import { Basket } from "./Basket";
import "./App.css";

function App() {
  return (
    <main className="app">
      <h1>Checkout</h1>
      <Basket />
      <hr role="presentation" />
      <CheckoutForm />
    </main>
  );
}

export default App;
