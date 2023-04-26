import { FC } from 'react';
import { IPost } from './types/postTypes';

const PostItem: FC<{
  post: IPost;
  currentPoints: number;
}> = ({ post, currentPoints }) => {
  return (
    <div className="mb-2 p-2 flex justify-between border-2 border-green-600">
      <div>
        <h6 className="font-medium">
          {currentPoints}. {post.title}
        </h6>
        <p>{post.body} </p>
      </div>
      <button>Удалить</button>
    </div>
  );
};

export default PostItem;
