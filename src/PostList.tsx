import type { Post } from './utils.ts';

export const PostList = ({ posts, postId, onClickPost }: PostListProps) => {
  return (
    <div className="post-list">
      <h1>Posts</h1>
      <div className="post-list-container">
        {posts.map((post) => (
          <h3
            key={post.id}
            className={`post-list-item ${postId === post.id ? 'target' : ''}`}
            onClick={() => {
              onClickPost(post.id);
            }}
          >
            <div>{post.id}</div>
            <div>{post.title}</div>
          </h3>
        ))}
      </div>
    </div>
  );
};

type PostListProps = {
  posts: Post[];
  postId: number | undefined;
  onClickPost: (id: number) => void;
};