import Header from "./components/header/headerPage/Header";
import Contents from "./components/content/Contents";
import { Provider } from "react-redux";
import store from "./components/store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Contents />
      </Provider>
    </>
  );
}

export default App;
