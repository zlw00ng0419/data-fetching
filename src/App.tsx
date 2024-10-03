import './reset.css';
import './App.css';

import { useEffect, useState } from 'react';

import { PostDetail } from './PostDetail.tsx';
import { PostList } from './PostList.tsx';
import { fetchPosts, type Post } from './utils.ts';

export const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [postId, setPostId] = useState<number>();

  useEffect(() => {
    fetchPosts()
      .then((data) => {
        setPosts(data);
        setPostId(data[0]?.id);
      })
      .catch((error: unknown) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div className="App">
      <PostList
        posts={posts}
        postId={postId}
        onClickPost={setPostId}
      ></PostList>
      <PostDetail post={posts.find((p) => p.id === postId)}></PostDetail>
    </div>
  );
};