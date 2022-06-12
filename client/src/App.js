import { Provider, useSelector } from "react-redux";
import store from "./store/store";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./routes/HomePage";
import CartPage from "./routes/BillPage";
import MainStructurePage from "./routes/MainStructurePage";
import RegisterPage from "./routes/RegisterPage";
import ProductPage from "./routes/ProductPage";
import NotFoundPage from "./routes/NotFoundPage";
import CheckutSuccess from "./routes/checkoutSuccessPage";
import LoginInPage from "./routes/LoginPage";

function App() {
  const currentUser = useSelector((state) => state.entities.auth.currentUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<MainStructurePage />}>
          <Route index element={<Home />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout-success" element={<CheckutSuccess />} />
          <Route
            path="/register"
            element={
              currentUser === "login successed" ? (
                <Navigate to="/" replace />
              ) : (
                <RegisterPage />
              )
            }
          />

          <Route
            path="/login"
            element={
              currentUser === "login successed" ? (
                <Navigate to="/" replace />
              ) : (
                <LoginInPage />
              )
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
