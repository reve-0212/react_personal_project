import styled from "styled-components";
import {useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import {Button} from "react-bootstrap";
import CommentList from "../list/CommentList.jsx";
import TextInput from "../ui/TextInput.jsx";
import data from "../../data.js"

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  :not(:last-child) {
    margin-bottom: 16px;
  }`;

const CommentContainer = styled.div`
  padding: 8px 16px;
  border: 1px solid grey;
  border-radius: 8px;`

const PostContainer = styled.div`
  padding: 8px 16px;
  border: 1px solid grey;
  border-radius: 8px;`;

const TitleText = styled.p`
  font-size: 28px;
  font-weight: 500;`;

const ContentText = styled.p`
  font-size: 20px;
  line-height: 32px;
  white-space: pre-wrap;`;

const CommentLabel = styled.p`
  font-size: 16px;
  font-weight: 500;`;

function PostViewPage() {
  const navigate = useNavigate();
  const {postId} = useParams();

  const post = data.find((item) => {
    return item.id === parseInt(postId)
  });

  const [comment, setComment] = useState("");

  return (
    <Wrapper>
      <Container>
        <Button
          className={"me-2"}
          onClick={() => {
            navigate("/");
          }}>뒤로 가기</Button>

        <Button
          className={"btn btn-secondary me-2"}
          onClick={() =>
            navigate("/")}>수정하기
        </Button>

        <Button
          className={"btn btn-warning"}
          onClick={() =>
            navigate("/")}>삭제하기
        </Button>

        <PostContainer>
          <TitleText>{post.title}</TitleText>
          <ContentText>{post.content}</ContentText>
        </PostContainer>

        <CommentLabel>댓글</CommentLabel>
        <CommentList comments={post.comments}/>

        <TextInput
          height={40}
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}/>

        <Button
          onClick={() => {
            navigate("/");
          }}>댓글 작성하기</Button>
      </Container>
    </Wrapper>
  );
}

export default PostViewPage