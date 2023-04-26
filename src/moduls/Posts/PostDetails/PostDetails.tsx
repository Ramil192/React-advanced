import { FC } from 'react';
import { useParams } from 'react-router-dom';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';
import { postApi } from '../store/service/servicePost';

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
        <div>
          <h1 className="text-3xl font-medium">Вы открыли пост с ID: {id}</h1>
          <h6 className="font-medium">1. {post.title}</h6>
          <p>{post.body} </p>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
