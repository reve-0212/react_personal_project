import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import TextInput from "../ui/TextInput.jsx";
import {Button} from "react-bootstrap";
import axios from "axios";
import React, {useEffect, useState} from "react";

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

function PostWritePage() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const writeBlog = () => {
    if (title == "" || contents == "") {
      alert("제목 혹은 내용을 작성해주세요")
    } else {
      console.log(title)
      console.log(contents)

      axios.put("http://localhost:8081/write", null, {
        params: {title: title, contents: contents},
      }).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })

      location.href = "http://localhost:5173"
    }
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
            onClick={() => writeBlog()}>글 작성하기</Button>
        </Container>
      </Wrapper>
    </div>
  );
}

export default PostWritePage