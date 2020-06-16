import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import classNames from "classname";
import Utils from "../Utils/";

import FillContainer from "../Components/Containers/FillContainer/FillContainer";
import FillContent from "../Components/Containers/FillContainer/FillContent";
import FillHeader from "../Components/Containers/FillContainer/FillHeader";

import AppSideBar from "./AppSideBar";
import AppHeader from "./AppHeader";

import CreateProduct from "../Components/Pages/CreateProduct";
import ViewProduct from "../Components/Pages/ViewProduct";
import ListProducts from "../Components/Pages/ListProducts";
import AddProduct from "../Components/Pages/AddProduct";

import "./App.scss";
const { getNestedValue, classes } = Utils;

function App(props) {
  return (
    <Router>
      <div className={classNames("full", "row", "main_bkgd")}>
        <AppSideBar />

        <FillContainer>
          <FillHeader>
            <AppHeader />
          </FillHeader>
          <FillContent>
            <div {...classes("full", "overflow-hidden", "main-content")}>
              <Route
                render={({ location }) => (
                  <AnimatePresence exitBeforeEnter initial={false}>
                    <Switch location={location} key={location.pathname}>
                      <Route exact path="/" component={ListProducts} />
                      <Route exact path="/add" component={AddProduct} />
                      <Route exact path="/create/" component={CreateProduct} />
                      <Route
                        exact
                        path="/product/:id"
                        render={(props) => {
                          let productId = getNestedValue(
                            props,
                            ["match", "params", "id"],
                            0
                          );
                          return <ViewProduct id={productId} />;
                        }}
                      />
                    </Switch>
                  </AnimatePresence>
                )}
              />
            </div>
          </FillContent>
        </FillContainer>
      </div>
    </Router>
  );
}

export default App;
