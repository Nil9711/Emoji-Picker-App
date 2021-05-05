import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

export default function Page(props) {
  const { isDarkMode } = useContext(ThemeContext);

  const styles = {
    height: "100vh",
    width: "100vw",
    backgroundColor: isDarkMode ? "#7d7d7c" : "#ebe5d8",
  };
  return <div style={styles}>{props.children}</div>;
}
