import React, { useState } from "react";
import useKit from "../../../Utils/CompKit";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import FillContainer from "../../../Components/Containers/FillContainer/FillContainer";
import FillContent from "../../../Components/Containers/FillContainer/FillContent";
import PageWrapper from "../../../Components/Containers/PageWrapper";
import BlurredWrapper from "../../../Components/Containers/BlurredWrapper";
import ProductController from "../../../Controllers/ProductController";
import LoadingSquare from "../../Placeholders/LoadingSquare";
import "./AddProduct.scss";
import Utils from "../../../Utils/";
import config from "../../../config";
const { isDef, classes, getNestedValue, setImmutableValue } = Utils;

const productController = ProductController();

const Comp = (props) => {
  const { goToPage } = useKit();

  const [state, _setState] = useState({
    form: {
      title: "Product Title",
      description: "Product description",
      image_url: config.noImageUrl,
      price: 0.0,
    },
  });
  const setNestedState = (path, value) =>
    _setState(setImmutableValue(state, path, value));
  const getNestedState = (path, fallback = null) =>
    getNestedValue(state, path, fallback);
  const [isInit, setIsInit] = useState(false);
  if (!isInit) {
    setIsInit(true);
    setTimeout(() => {
      setNestedState("isLoaded", true);
    }, 500);
  }
  const isLoaded = getNestedState("isLoaded", false);

  const handleSave = async (e) => {
    e.preventDefault();
    let data = await productController.doTheThing(state.form);
    console.log(data);
  };

  const handleCancel = async (e) => {
    e.preventDefault();
    goToPage("/");
  };

  return (
    <PageWrapper
      isLoading={!isLoaded}
      classes={["full-width", "product-details-page"]}
    >
      <div {...classes("full-width", "card-outter")}>
        <BlurredWrapper classes={"full"}>
          <div {...classes("card-inner", "center-center")}>
            <>
              <div {...classes("row", "full-width")}>
                <FillContainer>
                  <FillContent>
                    <div {...classes("column", "full-width")}>
                      <div {...classes("content", "align-left")}>
                        <div {...classes("form-input")}>
                          <div {...classes("label")}>Title</div>
                          <div {...classes("input")}>
                            <input
                              type="text"
                              value={getNestedState(["form", "title"], "")}
                              onChange={(e) =>
                                setNestedState(
                                  ["form", "title"],
                                  e.target.value
                                )
                              }
                            />
                          </div>
                        </div>

                        <div {...classes("form-input")}>
                          <div {...classes("label")}>Image URL</div>
                          <div {...classes("input")}>
                            <input
                              type="text"
                              value={getNestedState(["form", "image_url"], "")}
                              onChange={(e) =>
                                setNestedState(
                                  ["form", "image_url"],
                                  e.target.value
                                )
                              }
                            />
                          </div>
                        </div>

                        <div {...classes("form-input")}>
                          <div {...classes("label")}>Price</div>
                          <div {...classes("input")}>
                            <input
                              type="number"
                              value={getNestedState(["form", "price"], 0.0)}
                              onChange={(e) =>
                                setNestedState(
                                  ["form", "price"],
                                  parseFloat(e.target.value)
                                )
                              }
                            />
                          </div>
                        </div>

                        <div {...classes("form-input")}>
                          <div {...classes("label")}>Description</div>
                          <div {...classes("input")}>
                            <div {...classes("textarea-wrapper")}>
                              <TextareaAutosize
                                value={getNestedState(
                                  ["form", "description"],
                                  ""
                                )}
                                onChange={(e) =>
                                  setNestedState(
                                    ["form", "description"],
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div {...classes("actions")}>
                        <div {...classes("spacer")} />
                        <button onClick={handleCancel}>Cancel</button>
                        <button onClick={handleSave}>Confirm</button>
                      </div>
                    </div>
                  </FillContent>
                </FillContainer>
                <div {...classes("column")}></div>
              </div>
            </>
          </div>
        </BlurredWrapper>
      </div>
    </PageWrapper>
  );
};

export default Comp;
