import React from "react";
import { motion } from "framer-motion";
import Utils from "../../../Utils";
import config from "../../../config";
import LoadingSquare from "../../../Components/Placeholders/LoadingSquare";

const { isFunc, isStr, isDef, isArr } = Utils;
const classNames = require("classnames");

const PageWrapper = (props) => {
  const { isLoading = false, classes = "" } = props;

  const { children } = props;
  const _className = isStr(classes) ? [classes] : isArr(classes) ? classes : [];
  return (
    <motion.div
      variants={config.variants.page}
      className={classNames(_className)}
      initial="exit"
      animate="enter"
      exit="exitUp"
    >
      {isLoading ? <LoadingSquare /> : <> {children} </>}
    </motion.div>
  );
};

export default PageWrapper;
