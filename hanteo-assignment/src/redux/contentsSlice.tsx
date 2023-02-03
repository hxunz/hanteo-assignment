import { createSlice } from '@reduxjs/toolkit';
import { getContents } from 'src/service/contents';
import { AppDispatch } from './store';

export interface Content {
  id: number;
  url: string;
}

export interface contentsState {
  contents: Content[];
}

export const initialState: contentsState = {
  contents: [],
}

const { actions, reducer } = createSlice({
  name: 'contents',
  initialState,
  reducers: {
    setContents: (state, { payload }) => ({
      ...state,
      contents: [...state.contents, ...payload],
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
