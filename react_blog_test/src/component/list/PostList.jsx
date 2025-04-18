import PostListItem from "./PostListItem.jsx";

function PostList(props) {
  const {posts, onClickItem} = props;

  return (
    <div className={"d-flex flex-column w-75 text-center fs-4"}>
      {posts.map((posts) => {
        return (
          <PostListItem
            key={posts.id}
            post={posts}
            onClick={() => {
              onClickItem(posts);
            }}
          />
        )
      })}
    </div>
  );
}

export default PostList