import { useEffect, useState } from 'react';

import { type Comment, fetchPostDetail, type Post } from './utils.ts';

export const PostDetail = ({ post }: PostDetailProps) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    if (post != null) {
      fetchPostDetail(post.id)
        .then((data) => {
          setComments(data);
        })
        .catch((error: unknown) => {
          console.error('Error fetching posts:', error);
        });
    }
  }, [post]);

  return (
    <div className="post-detail">
      <div className="post-detail-content">
        <h1>Content</h1>
        <p>{post?.body}</p>
      </div>
      <div className="post-detail-comments">
        <h1>Comments</h1>
        {comments.map((comment) => (
          <div className="comment" key={comment.id}>
            <div className="comment-email">작성자 : {comment.email}</div>
            <div className="comment-body">{comment.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

type PostDetailProps = {
  post: Post | undefined;
};