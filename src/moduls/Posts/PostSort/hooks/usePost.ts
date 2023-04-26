import { useMemo } from 'react';
import { IFilter, IPost } from '../../types/postTypes';

export const useFilterPosts = (filter: IFilter, posts: IPost[]) => {
  const filteredItem = useMemo(() => {
    const queryFilteredItems = filter.query
      ? posts.filter((post) =>
          post.title
            .toLocaleLowerCase()
            .includes(filter.query.toLocaleLowerCase())
        )
      : posts;

    if (filter.sort) {
      const key = filter.sort;
      return [...queryFilteredItems].sort((a, b) =>
        a[key].localeCompare(b[key])
      );
    }

    return queryFilteredItems;
  }, [posts, filter.sort, filter.query]);

  return filteredItem;
};
