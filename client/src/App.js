import { Provider } from "react-redux";
import store from "./store/store";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/HomePage";
import CartPage from "./routes/BillPage";
import Checkout from "./routes/CheckoutPage";
import MainStructurePage from "./routes/MainStructurePage";
import RegisterPage from "./routes/RegisterPage";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<MainStructurePage />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/register" element={<RegisterPage/>}/>
          </Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
