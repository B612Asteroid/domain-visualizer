import { configureStore } from "@reduxjs/toolkit";
import domainReducer from "@/features/domain/domainSlice";
import markdownReducer from "@/features/markdown/markdownSlice";
import mermaidReducer from "@/features/mermaid/slice/mermaidSlice";

export const store = configureStore({
  reducer: {
    domain: domainReducer,
    markdown: markdownReducer,
    mermaid: mermaidReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
