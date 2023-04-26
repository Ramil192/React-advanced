import { FC } from 'react';
import PostItem from './PostItem';
import { useAppSelector } from './store/hooks/redux';

const Posts: FC<{ title: string }> = ({ title }) => {
  const { posts } = useAppSelector((state) => state.postsReducer);

  return (
    <div className="max-w-lg mx-auto pt-2">
      <h1 className="text-3xl font-medium text-center pb-2">{title}</h1>
      {posts.map((post, index) => (
        <PostItem post={post} key={post.id} currentPoints={index + 1} />
      ))}
    </div>
  );
};

export default Posts;
