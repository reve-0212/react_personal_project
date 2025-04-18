import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import PostList from "../list/PostList.jsx";
import data from "../../data.js"

function MainPage() {

  const navigate = useNavigate();

  return (
    <div className={"d-flex flex-column align-items-center p-2"}>
      <h3 className={"mb-3"}>심지현의 미니 블로그</h3>

      <Button
        className={"mb-3"}
        onClick={() => navigate("/post-write")}>글 작성하기</Button>

      <PostList
        posts={data}
        onClickItem={(item) => {
          navigate(`/post/${item.id}`);
        }}/>
    </div>
  );
}

export default MainPage