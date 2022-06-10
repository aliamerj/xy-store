import { Provider } from "react-redux";
import store from "./store/store";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/HomePage";
import CartPage from "./routes/BillPage";
import MainStructurePage from "./routes/MainStructurePage";
import RegisterPage from "./routes/RegisterPage";
import SignInPage from "./routes/SignInPage";
import ProductPage from "./routes/ProductPage";
import NotFoundPage from "./routes/NotFoundPage";
import CheckutSuccess from "./routes/checkoutSuccessPage";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<MainStructurePage />}>
            <Route index element={<Home />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout-success" element={<CheckutSuccess />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
