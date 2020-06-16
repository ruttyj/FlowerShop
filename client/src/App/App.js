import React, { useState } from "react";
import {
  BrowserRouter as Router,
  useHistory,
  Switch,
  Route,
} from "react-router-dom";
import useKit from "../Utils/CompKit";
import { AnimatePresence } from "framer-motion";
import classNames from "classname";
import Utils from "../Utils/";
import AppSideBar from "./AppSideBar.js";
import { motion, useTransform, useMotionValue } from "framer-motion";
import PersonIcon from "@material-ui/icons/Person";

import FillContainer from "../Components/Containers/FillContainer/FillContainer";
import FillContent from "../Components/Containers/FillContainer/FillContent";
import FillHeader from "../Components/Containers/FillContainer/FillHeader";
import PageWrapper from "../Components/Containers/PageWrapper";

import CreateProduct from "../Components/Pages/CreateProduct";
import ViewProduct from "../Components/Pages/ViewProduct";
import ListProducts from "../Components/Pages/ListProducts";
import AddProduct from "../Components/Pages/AddProduct";

import { SingleImage } from "../SingleImage";

import "./App.scss";
import "./Flex.scss";
const { getNestedValue, isDef, isArr, isStr, classes } = Utils;

function BlurredWrapper(props) {
  const { children, className } = props;
  let _className = isStr(className)
    ? [className]
    : isArr(className)
    ? className
    : [];
  return (
    <div {...classes("full", "blurred_bkgd", ..._className)}>
      <div className={classNames("full", "focus_content", "full")}>
        <div {...classes("full")}>{children}</div>
      </div>
    </div>
  );
}

function App(props) {
  const { goToPage, handles } = useKit();

  return (
    <Router>
      <div className={classNames("full", "row", "main_bkgd")}>
        <AppSideBar />

        <FillContainer>
          <FillHeader>
            <div className={classNames("app-header")}>
              <BlurredWrapper>
                <div
                  {...classes(
                    "full",
                    "tinted-light",
                    "space-between",
                    "v-align-center"
                  )}
                >
                  <div {...classes("flex")}></div>
                  <div
                    {...classes("flex", "grow", "title", "center-center")}
                    onClick={handles.goHome}
                  >
                    Flower Shop
                  </div>
                  <div {...classes("flex")}>
                    <div {...classes("button")}>
                      <PersonIcon />
                    </div>
                  </div>
                </div>
              </BlurredWrapper>
            </div>
          </FillHeader>
          <FillContent>
            <div {...classes("full", "overflow-hidden", "main-content")}>
              <Route
                render={({ location }) => (
                  <AnimatePresence exitBeforeEnter initial={false}>
                    <Switch location={location} key={location.pathname}>
                      <Route exact path="/image/:id" component={SingleImage} />
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
