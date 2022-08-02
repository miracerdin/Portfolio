import { makeStyles } from "@mui/styles";
import { Theme } from "./Theme";
import Image from "../images/brandBanner.jpg";
export const useStyles = makeStyles(() => ({
  HeaderWrapper: {
    width: "100%",
    minHeight: "100vh",
    height: "auto",
    background: `linear-gradient(to bottom right, #04303140, #00606473), url(${Image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  navbar: {
    backgroundColor: Theme.colors.base1,
    color: Theme.colors.base2,
  },
  ToolBar: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
  },
  navbuttons: {
    color: Theme.colors.base2,
  },
}));
