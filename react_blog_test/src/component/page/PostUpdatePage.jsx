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
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  :not(:last-child) {
    margin-bottom: 16px;
  }`;


function PostUpdatePage() {
  const navigate = useNavigate();
  const {postId} = useParams();

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  useEffect(() => {
    axios.all([
      axios.get(`http://localhost:8081/post/${postId}`),
    ])
      .then(axios.spread((res1, res2) => {
          console.log(res1.data);
          setTitle(res1.data.title);
          setContents(res1.data.contents);
        })
      )
      .catch((err) => {
        console.log(err);
      })
  }, [postId])

  const updateBlog = () => {
    // 주소 들어간 뒤에 데이터 넣기
    axios.patch(`http://localhost:8081/update`, {
      id: postId,
      title: title,
      contents: contents
    })
      .then(res => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      })

    alert("글 수정 완료")
    location.href = "http://localhost:5173";
  }

  return (
    <div className={"p-2"}>
      <Wrapper>
        <Container>
          <p>제목</p>
          <TextInput
            height={28}
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}/>

          <p>내용</p>
          <TextInput
            height={480}
            value={contents}
            onChange={(event) => {
              setContents(event.target.value);
            }}/>

          <Button
            onClick={() => updateBlog()}>글 수정하기</Button>
        </Container>
      </Wrapper>
    </div>
  );
}

export default PostUpdatePage