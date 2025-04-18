import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./component/page/MainPage.jsx";
import PostWritePage from "./component/page/PostWritePage.jsx";
import PostViewPage from "./component/page/PostViewPage.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path={"post-write"} element={<PostWritePage/>}/>
        <Route path={"post/:postId"} element={<PostViewPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

// asdfadfadsf
export default App
