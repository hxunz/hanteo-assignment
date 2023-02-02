import { httpClient } from './api';

export const getContents = async () => {
  try {
    const { data } = await httpClient.get('/posts');

    return data;

  } catch (error) {
    console.error(error);
  }
};
