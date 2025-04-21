import styled from "styled-components";
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "react-bootstrap";
import CommentList from "../list/CommentList.jsx";
import TextInput from "../ui/TextInput.jsx";
import React, {useEffect, useState} from "react";
import axios from "axios";

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
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState([]);
  const [moreComment, setMoreComment] = useState("");

  useEffect(() => {
    axios.all([
      axios.get(`http://localhost:8081/post/${postId}`),
      axios.get(`http://localhost:8081/comment/${postId}`),
    ])
      .then(axios.spread((res1, res2) => {
          setPost(res1.data);
          setComment(res2.data);
        })
      )
      .catch((err) => {
        console.log(err);
      })
  }, [])

  const deletePost = () => {
    axios.delete(`http://localhost:8081/delete/${postId}`, {})
      .then(res => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })

    alert("게시글이 삭제되었습니다")

    location.href = "http://localhost:5173"
  }

  const showMoreComment = (event) => {
    setMoreComment(event.target.value);
  }

  const writeMoreComment = () => {
    if(moreComment == ""){
      alert("댓글의 내용을 입력해주세요")
    } else{
      console.log(post.id)

      axios.put(`http://localhost:8081/writeComment`, {
        blogId: post.id,
        title: moreComment,
      })
        .then(res => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })

      alert("댓글 작성 완료")
      location.reload(true);
    }
  }

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
            navigate(`/post/${postId}/update`)}>수정하기
        </Button>

        <Button
          className={"btn btn-warning"}
          onClick={() => deletePost()}>삭제하기
        </Button>

        <PostContainer>
          <TitleText>{post?.title}</TitleText>
          <ContentText>{post?.content}</ContentText>
        </PostContainer>

        <CommentLabel>댓글</CommentLabel>
        <CommentList comments={comment}/>

        <TextInput
          height={40}
          value={moreComment}
          onChange={(event) => {
            showMoreComment(event);
          }}/>

        <Button onClick={writeMoreComment}>댓글 작성하기</Button>
      </Container>
    </Wrapper>
  );
}

export default PostViewPage