import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Menu from "./component/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./component/Accueil";
import ListeArticles from "./component/ListeArticles";
import AjouterArticle from "./component/AjouterArticle";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import reducer from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = legacy_createStore(reducer)
root.render( 
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/articles" element={<ListeArticles />} />
          <Route path="/add-article" element={<AjouterArticle />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
