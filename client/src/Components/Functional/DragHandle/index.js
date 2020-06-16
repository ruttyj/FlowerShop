import React, { useState } from "react";
import { motion } from "framer-motion";

const DragHandle = function (props) {
  const { children } = props;
  const { onDrag } = props;
  return (
    <motion.div {...props} onPan={onDrag}>
      {children}
    </motion.div>
  );
};

export default DragHandle;
