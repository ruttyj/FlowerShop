import React, { useState, useEffect } from "react";

import StarRatings from "react-star-ratings";

import PageWrapper from "../../../Components/Containers/PageWrapper";
import DollarSymbol from "../../../Components/Currencies/DollarSymbol";
import BlurredWrapper from "../../../Components/Containers/BlurredWrapper";
import ProductController from "../../../Controllers/ProductController";
import AddToCartButton from "../../../Components/Buttons/AddToCartButton";
import Utils from "../../../Utils/";
import "./ViewProduct.scss";
const { isDef, classes, getNestedValue, isDefNested } = Utils;

const productController = ProductController();

const Comp = (props) => {
  // State management
  const [state, setState] = useState({});
  const [hasRequested, sethasRequested] = useState(false);

  // Initialize
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
  const product = getNestedValue(state, "product", {});

  return (
    <PageWrapper isLoading={!isLoaded} classes={["full-width", "large-card"]}>
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
