import { FC, useState } from 'react';
import CustomButton from '../../UI/CustomButton';
import PostCreate from './PostCreate';
import PostItem from './PostItem';
import { useAppSelector } from './store/hooks/redux';

const Posts: FC<{ title: string }> = ({ title }) => {
  const [isVisible, setIsVisible] = useState(true);
  const { posts } = useAppSelector((state) => state.postsReducer);

  const handlerChangeVisible = () => {
    setIsVisible((prevValue) => !prevValue);
  };

  return (
    <div className="max-w-lg mx-auto pt-2">
      <CustomButton onClick={handlerChangeVisible}>Создание поста</CustomButton>
      <PostCreate isVisible={isVisible} changeVisible={handlerChangeVisible} />
      <h1 className="text-3xl font-medium text-center pb-2">{title}</h1>
      {posts.map((post, index) => (
        <PostItem post={post} key={post.id} currentPoints={index + 1} />
      ))}
    </div>
  );
};

export default Posts;
