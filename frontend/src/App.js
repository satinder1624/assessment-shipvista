import "./App.css";
// import Plant from "./Plant";
import { store } from "./actions/store";
import { Provider } from "react-redux";
import PlantList from "./components/PlantList";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Assessment</h1>

        {/* <Plant /> */}
        <PlantList />
      </div>
    </Provider>
  );
}

export default App;
