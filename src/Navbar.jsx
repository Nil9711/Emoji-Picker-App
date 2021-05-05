import React, { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import { ThemeContext } from "./contexts/ThemeContext";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    fontSize: "45px",
  },
  img: {
    height: "4rem",
    width: "4rem",
  },
};
const Navbar = (props) => {
  const { classes } = props;
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div className={classes.root}>
        <span>
          <img
            className={classes.img}
            src="http://cdn.jsdelivr.net/emojione/assets/png/1f638.png"
            alt="cat"
          />
        </span>
        Emoji-Search
        <span>
          <img
            className={classes.img}
            src="http://cdn.jsdelivr.net/emojione/assets/png/1f638.png"
            alt="cat"
          />
        </span>
        <Switch onChange={toggleTheme} />
      </div>
    </>
  );
};

export default withStyles(styles)(Navbar);
