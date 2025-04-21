import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 8px;
  cursor: pointer;
  background: white;

  :hover {
    background: lightgrey;
  }
`;

const ContentText = styled.p`
  font-size: 16px;
  white-space: pre-wrap;
  text-align: center;
`;

function CommentListItem(props) {
  const {comment} = props;

  const deleteComment = () => {
    axios.delete(`http://localhost:8081/deleteComment/${comment.id}`, {})
      .then(res => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })

    alert("댓글이 삭제되었습니다")
    location.reload()
  }

  const updateComment = () => {
    const wantUpdate = prompt("바꿀 내용을 입력하세요")
    console.log(wantUpdate)

    axios.patch(`http://localhost:8081/updateComment`, {
      id: comment.id,
      title : wantUpdate
    })
      .then(res => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      })

    alert("댓글 수정 완료")
    location.reload()
  }

  return (
    <div className={"border border-2 p-3 rounded-2"}>
      <ContentText>{comment.title}</ContentText>
      <div className={"text-center"}>
        <button type={"button"} className={"btn btn-primary me-2"} onClick={updateComment}>수정</button>
        <button
          type={"button"}
          className={"btn btn-danger mb-3"}
          onClick={deleteComment}
        >삭제
        </button>
      </div>
    </div>
  );
}

export default CommentListItem