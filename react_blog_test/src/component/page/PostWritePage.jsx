import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import TextInput from "../ui/TextInput.jsx";
import {Button} from "react-bootstrap";

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
  const [content, setContent] = useState("");

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
            value={content}
            onChange={(event) => {
              setContent(event.target.value);
            }}/>

          <Button
            onClick={() => navigate("/")}>글 작성하기</Button>
        </Container>
      </Wrapper>
    </div>
  );
}

export default PostWritePage