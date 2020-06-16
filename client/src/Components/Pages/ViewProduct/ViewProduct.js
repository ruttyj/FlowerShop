import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import RelLayer from "../../../Components/Layers/RelLayer";
import AbsLayer from "../../../Components/Layers/AbsLayer";
import FillContainer from "../../../Components/Containers/FillContainer/FillContainer";
import FillContent from "../../../Components/Containers/FillContainer/FillContent";
import FillFooter from "../../../Components/Containers/FillContainer/FillFooter";
import Utils from "../../../Utils/";
import config from "../../../config";
import PageWrapper from "../../../Components/Containers/PageWrapper";
import DollarSymbol from "../../../Components/Currencies/DollarSymbol";
import BlurredWrapper from "../../../Components/Containers/BlurredWrapper";
import ProductController from "../../../Controllers/ProductController";
import AddToCartButton from "../../../Components/Buttons/AddToCartButton";
import LoadingSquare from "../../Placeholders/LoadingSquare";
import "./style.scss";
const {
  isFunc,
  isStr,
  isDef,
  isArr,
  classes,
  getNestedValue,
  isDefNested,
} = Utils;

const productController = ProductController();

const Comp = (props) => {
  const [state, setState] = useState({});
  const [hasRequested, sethasRequested] = useState(false);
  const { id } = props;
  useEffect(() => {
    if (isDef(id) && !hasRequested) {
      sethasRequested(true);
      let newState = { ...state };
      productController.fetchProduct(id).then((data) => {
        newState.product = data;
        setState(newState);
      });
    }
  }, [id]);

  const isLoaded = isDefNested(state, "product");

  let product = getNestedValue(state, "product", {});

  return (
    <PageWrapper
      isLoading={!isLoaded}
      classes={["full-width", "product-details-page"]}
    >
      <div {...classes("full-width", "card-outter")}>
        <BlurredWrapper classes={"full"}>
          <div {...classes("card-inner", "center-center")}>
            <>
              <div
                {...classes("product-display")}
                style={{ "--product-image": `url(${product.image_url})` }}
              >
                <div {...classes("img")}></div>
              </div>
              <div
                {...classes(
                  "product-descript",
                  "grow",
                  "align-left",
                  "column",
                  "full-height"
                )}
              >
                <h2>{product.title}</h2>
                <StarRatings
                  rating={parseFloat(product.rating)}
                  numberOfStars={5}
                  starDimension={"10"}
                  starSpacing={"3"}
                />
                <div {...classes("info-block", "grow")}>
                  <p {...classes("label")}>Description</p>
                  <p>
                    {String(product.description)
                      .split("\n")
                      .map((line, i) => (
                        <span key={i}>
                          {i !== 0 ? <br /> : ""}
                          {line}
                        </span>
                      ))}
                  </p>
                </div>
                <div {...classes("row", "full-width", "space-between")}>
                  <div {...classes("price", "center-start", "full")}>
                    <DollarSymbol />
                    {product.price}
                  </div>
                  <div {...classes("center-end", "full")}>
                    <AddToCartButton />
                  </div>
                </div>
              </div>
            </>
          </div>
        </BlurredWrapper>
      </div>
    </PageWrapper>
  );
};

export default Comp;
