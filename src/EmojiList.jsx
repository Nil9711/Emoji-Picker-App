import React, { useState } from "react";
import Emoji from "./Emoji";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  search: {
    display: "flex",
    justifyContent: "center",
  },

  input: {
    width: "90vw",
    height: "2rem",
    fontSize: "2rem",
  },

  emojisList: {
    overflow: "auto",
    height: "50rem",
  },
};

const EmojiList = (props) => {
  const { classes } = props;
  const emojis = [
    { type: "😠", name: "Angry" },
    { type: "😤", name: "Triumph" },
    { type: "😂", name: "Joy" },
    { type: "😃", name: "Smiley" },
    { type: "😅", name: "Sweat Smile" },
    { type: "😆", name: "Laughing" },
    { type: "😊", name: "Blush" },
    { type: "😉", name: "Wink" },
    { type: "😌", name: "Relieved" },
    { type: "😋", name: "Yum" },
    { type: "😍", name: "Heart Eyes" },
    { type: "😁", name: "Grin" },
    { type: "🙂", name: "Slight Smile" },
  ];
  const [emojisToShow, setEmoji] = useState(emojis);

  const updateEmojis = (e) => {
    const foundEmojis = emojis.filter((emoji) =>
      emoji.name.toLowerCase().includes(e.target.value)
    );
    setEmoji(foundEmojis);
  };

  return (
    <div>
      <div className={classes.search}>
        <input className={classes.input} onChange={updateEmojis}></input>
      </div>
      <div className={classes.emojisList}>
        {emojisToShow.map((emoji) => (
          <Emoji key={emoji.name} type={emoji.type} name={emoji.name} />
        ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(EmojiList);
