import { FC, useState } from 'react';
import CustomButton from '../../UI/CustomButton';
import PostCreate from './PostCreate';
import PostItem from './PostItem';
import PostSort from './PostSort/PostSort';
import { useFilterPosts } from './PostSort/hooks/usePost';
import { useAppSelector } from './store/hooks/redux';
import { IFilter, sort } from './types/postTypes';

const Posts: FC<{ title: string }> = ({ title }) => {
  const [isVisible, setIsVisible] = useState(true);
  const { posts } = useAppSelector((state) => state.postsReducer);

  const [filter, setFilter] = useState<IFilter>({
    query: '',
    sort: 'body',
  });

  const filteredAndSearchPosts = useFilterPosts(filter, posts);

  const changeSort = (value: sort) => {
    setFilter((prev) => ({ ...prev, sort: value }));
  };

  const changeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter((prev) => ({ ...prev, query: e.target.value }));
  };

  const handlerChangeVisible = () => {
    setIsVisible((prevValue) => !prevValue);
  };

  return (
    <div className="max-w-lg mx-auto pt-2">
      <CustomButton onClick={handlerChangeVisible}>Создание поста</CustomButton>
      <PostSort
        querySort={filter.query}
        changeSort={changeSort}
        selectedSort={filter.sort}
        changeQuery={changeQuery}
      />
      <PostCreate isVisible={isVisible} changeVisible={handlerChangeVisible} />
      <h1 className="text-3xl font-medium text-center pb-2">{title}</h1>
      {filteredAndSearchPosts.length < 1 && <strong>Постов нету</strong>}
      {filteredAndSearchPosts.map((post, index) => (
        <PostItem post={post} key={post.id} currentPoints={index + 1} />
      ))}
    </div>
  );
};

export default Posts;
