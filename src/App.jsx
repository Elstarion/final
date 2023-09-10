import "./App.css";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default App;
