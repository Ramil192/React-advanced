import { FC, useEffect, useState } from 'react';
import CustomButton from '../../UI/CustomButton';
import NavigationPages from '../../components/NavigationPages';
import Loader from './../../components/Loader';
import PostCreate from './PostCreate';
import PostItem from './PostItem';
import PostSort from './PostSort/PostSort';
import { useFilterPosts } from './PostSort/hooks/usePost';
import { useAppDispatch, useAppSelector } from './store/hooks/redux';
import { postsSlice } from './store/reducers/PostSlice';
import { postApi } from './store/service/servicePost';
import { IFilter, sort } from './types/postTypes';
import { getPageCountArray } from './utils/pages';

const Posts: FC<{ title: string }> = ({ title }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [filter, setFilter] = useState<IFilter>({
    query: '',
    sort: '',
  });

  const { posts, limit, currentPage } = useAppSelector(
    (state) => state.postsReducer
  );

  const dispatch = useAppDispatch();
  const { addPostApi, updatePage } = postsSlice.actions;

  const { data, isLoading, isError } = postApi.useFetchAllPostsQuery({
    limit,
    page: currentPage,
  });

  const filteredAndSearchPosts = useFilterPosts(filter, posts);

  const changeSort = (value: sort) => {
    setFilter((prev) => ({ ...prev, sort: value }));
  };

  const changeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter((prev) => ({ ...prev, query: e.target.value }));
  };

  const changeVisible = () => {
    setIsVisible((prevValue) => !prevValue);
  };

  const changePage = (page: number) => {
    dispatch(updatePage(page));
  };

  useEffect(() => {
    if (data) {
      dispatch(addPostApi(data.postsApi));
    }
  }, [data]);

  const pages = getPageCountArray(data ? data?.totalCount : 1, limit);

  return (
    <div className="max-w-lg mx-auto pt-2">
      <CustomButton onClick={changeVisible}>Создание поста</CustomButton>
      
      <PostSort
        querySort={filter.query}
        changeSort={changeSort}
        selectedSort={filter.sort}
        changeQuery={changeQuery}
      />

      <PostCreate isVisible={isVisible} changeVisible={changeVisible} />

      <h1 className="text-3xl font-medium text-center pb-2">{title}</h1>
      {filteredAndSearchPosts.length < 1 && <strong>Постов нету</strong>}
      {isLoading && <Loader />}
      {isError && <h1>Произошла ошибка, попробуйте позже </h1>}
      {filteredAndSearchPosts &&
        filteredAndSearchPosts.map((post, index) => (
          <PostItem post={post} key={post.id} currentPoints={index + 1} />
        ))}

      <NavigationPages
        pages={pages}
        currentPage={currentPage}
        changePage={changePage}
      />
    </div>
  );
};

export default Posts;
