import Navigation from "./plugins/navigation";
import { Provider } from "react-redux";
import { store } from "./plugins/redux";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
