import { createSlice } from '@reduxjs/toolkit';
import { getContents } from '../service/contents';
import { AppDispatch } from './store';

export interface Content {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Pagination {
  totalPages: number;
  page: number,
  size: number,
}

export interface contentsState {
  contents: Content[];
  pagination: Pagination;
}

export const initialState: contentsState = {
  contents: [],
  pagination: {
    totalPages: 1,
    page: 1,
    size: 1,
  }
}

const { actions, reducer } = createSlice({
  name: 'contents',
  initialState,
  reducers: {
    setContents: (state, { payload }) => ({
      ...state,
      contents: payload,
    }),
  }
})

export const {
  setContents
} = actions;

export function loadContents() {
  return async (dispatch: AppDispatch) => {
    try {
      const data = await getContents();

      dispatch(setContents(data));
    } catch (error) {
      console.error(error);
    }
  }
}


export default reducer;
