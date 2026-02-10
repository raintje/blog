export const POSTS_PER_PAGE: number = 10;

export const getPageNumbers = (n: number) => {
  const p: number = n / Number(POSTS_PER_PAGE);

  const ns: Array<number> = [];
  for (let i = 1; i <= Math.ceil(p); i++) {
    ns.push(i);
  }

  return ns;
};
