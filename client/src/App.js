import { Provider } from "react-redux";
import store from "./store/store";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import CartPage from "./routes/CartPage";
import Checkout from "./routes/checkout";
import MainStructurePage from "./routes/MainStructurePage";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<MainStructurePage />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
