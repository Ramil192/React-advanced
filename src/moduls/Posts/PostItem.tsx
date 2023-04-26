import { FC } from 'react';
import CustomButton from '../../UI/CustomButton';
import { useAppDispatch } from './store/hooks/redux';
import { postsSlice } from './store/reducers/PostSlice';
import { IPost } from './types/postTypes';

const PostItem: FC<{
  post: IPost;
  currentPoints: number;
}> = ({ post, currentPoints }) => {
  const { removePost } = postsSlice.actions;
  const dispatch = useAppDispatch();

  const handlerRemove = (id: number) => {
    dispatch(removePost(id));
  };

  return (
    <div className="mb-2 p-2 flex justify-between border-2 border-green-600">
      <div>
        <h6 className="font-medium">
          {currentPoints}. {post.title}
        </h6>
        <p>{post.body} </p>
      </div>
      <CustomButton onClick={() => handlerRemove(post.id)}>
        Удалить
      </CustomButton>
    </div>
  );
};

export default PostItem;
