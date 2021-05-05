import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  emojiStyle: {
    fontSize: "3rem",
    height: "5rem",
  },
  emojiLocation: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  emojiText: {
    fontSize: "2rem",
    margin: "auto",
  },
};

const Emoji = (props) => {
  const { classes } = props;

  return (
    <div className={classes.emojiStyle}>
      <div className={classes.emojiLocation}>
        {props.type}
        <div className={classes.emojiText}>{props.name}</div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Emoji);
