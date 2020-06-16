import { useHistory } from "react-router-dom";
import Utils from "../../Utils/";
const { isDef } = Utils;

function CompKit() {
  let history = useHistory();

  function goToPage(page) {
    if (isDef(history)) {
      history.push(page);
    } else {
      console.log("history not defined");
    }
  }

  function goHome() {
    goToPage("/");
  }
  return {
    goToPage,
    goHome,
    handles: {
      goHome: () => goHome(),
    },
  };
}

export default CompKit;
