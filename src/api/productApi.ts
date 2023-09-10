export const fetchImg = async (url: string) => {
  return await fetch(url).then((response) => response.blob());
};
