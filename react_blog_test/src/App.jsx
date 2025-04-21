import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./component/page/MainPage.jsx";
import PostWritePage from "./component/page/PostWritePage.jsx";
import PostViewPage from "./component/page/PostViewPage.jsx";
import PostUpdatePage from "./component/page/PostUpdatePage.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path={"post-write"} element={<PostWritePage/>}/>
        <Route path={"post/:postId"} element={<PostViewPage/>}/>
        <Route path={"post/:postId/update"} element={<PostUpdatePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

// asdfadfadsf
export default App
