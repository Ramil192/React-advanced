import { FC } from 'react';
import { useParams } from 'react-router-dom';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';
import { postApi } from '../store/service/servicePost';
import PostComments from './PostComments';

const PostDetails: FC = () => {
  const { id } = useParams();

  const {
    data: post,
    isLoading: isLoadingPost,
    isError: isErrorPost,
  } = postApi.useFetchPostQuery(id!);

  return (
    <div className="max-w-lg mx-auto pt-2">
      {isLoadingPost && <Loader />}
      {isErrorPost && <Error />}
      {post && (
        <>
          <p className="text-3xl font-medium">Вы открыли пост с ID: {id}</p>
          <h1 className="font-medium">1. {post.title}</h1>
          <p>{post.body} </p>
        </>
      )}
      <PostComments />
    </div>
  );
};

export default PostDetails;
