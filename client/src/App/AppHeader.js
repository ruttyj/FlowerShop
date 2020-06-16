import React from "react";
import useKit from "../Utils/CompKit";
import PersonIcon from "@material-ui/icons/Person";

import Utils from "../Utils/";
import BlurredWrapper from "../Components/Containers/BlurredWrapper";

const { classes } = Utils;

function App(props) {
  const { goToPage, handles } = useKit();

  return (
    <div {...classes("app-header")}>
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
  );
}

export default App;
