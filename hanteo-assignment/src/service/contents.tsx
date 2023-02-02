import { mockContents } from '../mockContents';
import { Content } from '../redux/contentsSlice';

export const getContents = async () => {
  try {
    return new Promise<Content[]>((resolve) => setTimeout(() => {
      resolve(mockContents);
    }, 1500));
  } catch (error) {
    console.error(error);
  }
};
