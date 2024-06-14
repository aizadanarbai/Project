import { PostsContextProvider } from "./contexts/PostsContext";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import "./reset.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <PostsContextProvider>
          <Layout />
        </PostsContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
