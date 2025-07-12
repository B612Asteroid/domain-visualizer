import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface MermaidState {
  markdown: string;
}

const initialState: MermaidState = {
  markdown: "",
};

export const mermaidSlice = createSlice({
  name: "mermaid",
  initialState,
  reducers: {
    setMarkdown: (state, action: PayloadAction<string>) => {
      state.markdown = action.payload;
    },
  },
});

export const { setMarkdown } = mermaidSlice.actions;
export default mermaidSlice.reducer;
