import "./styles.css";
import { Provider } from "react-redux";
import storeConfig from "./utils/store";
import "antd/dist/antd.css";
import HomePage from "./MapContainers/HomePage";

const { store } = storeConfig();

export default function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}
