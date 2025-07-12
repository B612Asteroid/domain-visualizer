import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface MarkdownState {
  raw: string;
}

const initialState: MarkdownState = {
  raw: "", // 초기값은 비어있음
};

const markdownSlice = createSlice({
  name: "markdown",
  initialState,
  reducers: {
    setMarkdown(state, action: PayloadAction<string>) {
      state.raw = action.payload;
    },
  },
});

export const { setMarkdown } = markdownSlice.actions;
export default markdownSlice.reducer;
