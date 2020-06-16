import React from "react";
import { useHistory } from "react-router-dom";
import SideBar from "../Components/SideBar/SideBar";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";
import Utils from "../Utils/";
import BlurredWrapper from "../Components/Containers/BlurredWrapper";
const { isDef, isArr, isStr, classes } = Utils;

function AppSideBar(props) {
  let history = useHistory();
  const goToPage = function (page) {
    if (isDef(history)) {
      history.push(page);
    } else {
      console.log("history not defined");
    }
  };

  return (
    <SideBar>
      <BlurredWrapper classes={["full"]}>
        <div
          {...classes("full", "column", "noselect", "focus_content", "tinted")}
        >
          <div className="button" onClick={() => goToPage("/")}>
            <HomeIcon />
          </div>
          <div className="button" onClick={() => goToPage("/add")}>
            <AddIcon />
          </div>
        </div>
      </BlurredWrapper>
    </SideBar>
  );
}

export default AppSideBar;
