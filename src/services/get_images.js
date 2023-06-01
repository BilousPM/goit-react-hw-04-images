const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34841382-75c0b952d5537088e5e81e69b';
export const PER_PAGE = 12;

export const getImages = (query, page) => {
  return fetch(
    `${BASE_URL}?&key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}&page=${page}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};
