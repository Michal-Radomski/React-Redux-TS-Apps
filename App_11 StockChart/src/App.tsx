import FinancialItem from "./components/FinancialItem";
import "./App.scss";
import {Provider} from "react-redux";
import store from "./Store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <FinancialItem />
      </div>
    </Provider>
  );
}

export default App;
