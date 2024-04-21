import { Provider } from "react-redux";
import { store } from "./store";
import { WeatherComponent } from "./component/weather";
;

const App = () => {
  return (
    <Provider store={store}>
      <WeatherComponent />
    </Provider>
  );
};

export default App;