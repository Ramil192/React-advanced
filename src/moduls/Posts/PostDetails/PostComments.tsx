import { FC } from 'react';
import { useParams } from 'react-router-dom';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';
import { postApi } from '../store/service/servicePost';

const PostComments: FC = () => {
  const { id } = useParams();

  const {
    data: commits,
    isLoading: isLoadingCommits,
    isError: isErrorCommits,
  } = postApi.useFetchPostCommentsQuery(id!);

  if (isLoadingCommits) {
    return <Loader />;
  }

  return (
    <>
      <p className="text-3xl font-medium mb-2">Комментарий к посту</p>
      <ul className="max-w-lg mx-auto pt-2">
        {isErrorCommits && <Error />}
        {commits && (
          <>
            {commits.map((comment) => (
              <li key={comment.id} className="mb-2">
                <p className="text-lg font-medium">{comment.email}</p>
                <p>{comment.body}</p>
              </li>
            ))}
          </>
        )}
      </ul>
    </>
  );
};

export default PostComments;
