// import Navigation from "./plugins/navigation";
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";
import { store } from "./plugins/redux";
import AppSrc from "./src";

export default function App() {
  return (
    <Provider store={store} >
      <AppSrc />
    </Provider>
  );
}
