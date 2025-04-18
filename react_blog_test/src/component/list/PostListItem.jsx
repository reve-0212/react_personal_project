
function PostListItem(props) {
  const {post, onClick} = props;

  return (
    <div className={"mb-3 border border-2 p-3 rounded-3"} onClick={onClick}>
      <p>{post.title}</p>
    </div>
  );
}

export default PostListItem