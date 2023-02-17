import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";

import { Provider } from "react-redux";
import { store } from "./store/store";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
