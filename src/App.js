import EmojiList from "./EmojiList";
import Navbar from "./Navbar";
import Page from "./Page";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Page>
        <Navbar />
        <EmojiList />
      </Page>
    </ThemeProvider>
  );
}

export default App;
