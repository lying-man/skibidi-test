import { FC } from "react";
import "./styles/globalStyles.scss";
import Layout from "./components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App