import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";
import SideBar from "../Components/SideBar/SideBar";
import Utils from "../Utils/";
import BlurredWrapper from "../Components/Containers/BlurredWrapper";
import useKit from "../Utils/CompKit";

const { classes } = Utils;

function AppSideBar(props) {
  const { goToPage } = useKit();

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
