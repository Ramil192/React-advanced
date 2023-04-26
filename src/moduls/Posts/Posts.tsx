import { FC, useEffect, useState } from 'react';
import CustomButton from '../../UI/CustomButton';
import Loader from './../../components/Loader';
import PostCreate from './PostCreate';
import PostItem from './PostItem';
import PostSort from './PostSort/PostSort';
import { useFilterPosts } from './PostSort/hooks/usePost';
import { useAppDispatch, useAppSelector } from './store/hooks/redux';
import { postsSlice } from './store/reducers/PostSlice';
import { postApi } from './store/service/servicePost';
import { IFilter, sort } from './types/postTypes';

const Posts: FC<{ title: string }> = ({ title }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [filter, setFilter] = useState<IFilter>({
    query: '',
    sort: '',
  });

  const { posts } = useAppSelector((state) => state.postsReducer);

  const dispatch = useAppDispatch();
  const { addPostApi } = postsSlice.actions;

  const {
    data: postsApi,
    isLoading,
    isError,
  } = postApi.useFetchAllPostsQuery(10);

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

  useEffect(() => {
    if (postsApi) {
      dispatch(addPostApi(postsApi));
    }
  }, [postsApi]);

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
      {isLoading && <Loader />}
      {isError && <h1>Произошла ошибка, попробуйте позже </h1>}
      {filteredAndSearchPosts &&
        filteredAndSearchPosts.map((post, index) => (
          <PostItem post={post} key={post.id} currentPoints={index + 1} />
        ))}
    </div>
  );
};

export default Posts;
