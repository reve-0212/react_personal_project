import styled from "styled-components";
import CommentListItem from "./CommentListItem.jsx";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  :not(:last-child) {
    margin-bottom: 16px;
  }`;

function CommentList(props) {
  const {comments} = props;

  return (
    <div className={"w-100"}>
      {comments.map((comment, index) => {
        return (
          <CommentListItem key={comment.id} comment={comment}/>
        )
      })}
    </div>
  );
}

export default CommentList