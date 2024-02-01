import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import GetInitialData from "./compo/GetInitialData";
import { store } from "@/lib/Store";
import { Context } from "@/context/Context";

function App({ Component, pageProps }) {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <Provider store={store}>
        <Context >
          <GetInitialData />
          <Component {...pageProps} />
          <ToastContainer />
        </Context>
      </Provider>
    </div>
  );
}

export default App;
