import { mockContents } from 'src/mockContents';
import { Content } from 'src/redux/contentsSlice';

export const getContents = async () => {
  try {
    return new Promise<Content[]>((resolve) => setTimeout(() => {
      resolve(mockContents);
    }, 1500));
  } catch (error) {
    console.error(error);
  }
};
