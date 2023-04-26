export const getPageCountArray = (totalCount: number = 0, limit: number) => {
  const pageCount = Math.ceil(totalCount / limit);
  return Array.from({ length: pageCount }, (_, index) => index + 1);
};
