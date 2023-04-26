export const getPageCountArray = (totalCount: number, limit: number) => {
  const pageCount = Math.ceil(totalCount / limit);
  return Array.from({ length: pageCount }, (_, index) => index + 1);
};
