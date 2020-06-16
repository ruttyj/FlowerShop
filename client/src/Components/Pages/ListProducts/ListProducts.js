import React, { useState } from "react";

import "./ListProducts.scss";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import RelLayer from "../../../Components/Layers/RelLayer";
import AbsLayer from "../../../Components/Layers/AbsLayer";
import FillContainer from "../../../Components/Containers/FillContainer/FillContainer";
import FillContent from "../../../Components/Containers/FillContainer/FillContent";
import FillFooter from "../../../Components/Containers/FillContainer/FillFooter";
import PageWrapper from "../../../Components/Containers/PageWrapper";
import DollarSymbol from "../../../Components/Currencies/DollarSymbol";
import BlurredWrapper from "../../../Components/Containers/BlurredWrapper";
import LoadingSquare from "../../../Components/Placeholders/LoadingSquare";
import ProductController from "../../../Controllers/ProductController";
import Utils from "../../../Utils/";
import config from "../../../config";
import AddToCartButton from "../../../Components/Buttons/AddToCartButton/";
import RemoveFromCartButton from "../../../Components/Buttons/RemoveFromCartButton/";
const {
  isDef,
  isDefNested,
  classes,
  setImmutableValue,
  getNestedValue,
} = Utils;
const classNames = require("classnames");
const productController = ProductController();

const Product = (props) => {
  const [isInCart, setIsInCart] = useState(false);

  const els = (v, alt) => (isDef(v) && v !== "" ? v : alt);

  const { product } = props;
  let linkTo = `/product/${product.id}`;
  return (
    <BlurredWrapper classes={"product-outter"}>
      <div {...classes("product-inner")}>
        <FillContainer>
          <FillContent>
            <RelLayer>
              <div {...classes("product-image")}>
                <img src={els(product.image_url, config.noImageUrl)} />
              </div>
              <div {...classes("in-cart-indicator", isInCart ? "active" : "")}>
                In Cart
              </div>
              <AbsLayer {...classes("product-hover")}>
                {isInCart ? (
                  <RemoveFromCartButton
                    onClick={() => setIsInCart(!isInCart)}
                  />
                ) : (
                  <AddToCartButton onClick={() => setIsInCart(!isInCart)} />
                )}
              </AbsLayer>
            </RelLayer>
          </FillContent>
          <FillFooter height={75}>
            <Link to={linkTo}>
              <div {...classes("product-title")}>{product.title}</div>
              <div {...classes("product-price")}>
                <DollarSymbol />
                {product.price}
              </div>
            </Link>

            <div className={classNames("product-rating")}>
              <StarRatings
                rating={isDef(product.rating) ? parseFloat(product.rating) : 0}
                numberOfStars={5}
                starDimension={"10"}
                starSpacing={"3"}
              />
            </div>
          </FillFooter>
        </FillContainer>
      </div>
    </BlurredWrapper>
  );
};

function delay() {}

const Featured = (props) => {
  const [state, _setState] = useState({});
  const setNestedState = (path, value) =>
    _setState(setImmutableValue(state, path, value));

  const [isInit, setIsInit] = useState(false);
  if (!isInit) {
    setIsInit(true);
    productController.fetchProductList().then((data) => {
      setNestedState("products", data);
    });
  }

  const isLoaded = isDefNested(state, "products");
  let contents = "";

  if (isLoaded) {
    contents = (
      <>
        {state.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </>
    );
  } else {
    contents = <LoadingSquare />;
  }
  return <PageWrapper classes={"product-browser"}>{contents}</PageWrapper>;
};

export default Featured;
