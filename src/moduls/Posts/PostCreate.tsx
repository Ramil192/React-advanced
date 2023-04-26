import { FC, FormEvent } from 'react';
import CustomButton from '../../UI/CustomButton';
import CustomInput from '../../UI/CustomInput';
import { useAppDispatch } from './store/hooks/redux';
import { postsSlice } from './store/reducers/PostSlice';
import { CustomForm, IPost } from './types/postTypes';

const PostCreate: FC<{ isVisible: boolean; changeVisible: () => void }> = ({
  isVisible,
  changeVisible,
}) => {
  const { addNewPost } = postsSlice.actions;
  const dispatch = useAppDispatch();

  const displayClass = isVisible ? 'hidden' : 'flex';

  const createNewPost = (event: FormEvent<CustomForm>) => {
    event.preventDefault();

    const inputs = event.currentTarget.elements;

    const tempNewPost: IPost = {
      id: Date.now(),
      title: inputs.title.value,
      body: inputs.body.value,
    };

    dispatch(addNewPost(tempNewPost));
    changeVisible();
    inputs.title.value = '';
    inputs.body.value = '';
  };

  return (
    <div
      onClick={changeVisible}
      className={`fixed ${displayClass} items-center justify-center inset-x-0 inset-y-0 bg-slate-500/50 `}
    >
      <div
        className="p-6 bg-white rounded-lg min-w-min"
        onClick={(e) => e.stopPropagation()}
      >
        <form
          className="h-52 flex flex-col justify-between"
          onSubmit={createNewPost}
        >
          <h2 className="text-3xl font-medium text-center pb-2">
            Создание Поста
          </h2>

          <CustomInput name="title" placeholder="Название поста" required />
          <CustomInput name="body" placeholder="Описание поста" required />
          <CustomButton style={{ width: 'max-content' }}>
            Создание Поста
          </CustomButton>
        </form>
      </div>
    </div>
  );
};

export default PostCreate;
