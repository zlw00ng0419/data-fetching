export const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return (await response.json()) as Post[];
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const fetchPostDetail = async (postId: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
  );
  return (await response.json()) as Comment[];
};

export type Comment = {
  id: number;
  email: string;
  body: string;
};
