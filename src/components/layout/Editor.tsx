// src/components/MarkdownEditor.tsx
import MDEditor from "@uiw/react-md-editor";
import { useDispatch, useSelector } from "react-redux";
import { setMarkdown } from "@/features/parser/markdown/slice/markdownSlice";
import type { RootState } from "@/stores/store";

export function MarkdownEditor() {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.markdown.raw);

  return (
    <div data-color-mode="light" className="min-h-[300px]">
      <MDEditor value={value} onChange={(v = "") => dispatch(setMarkdown(v))} height={400} />
    </div>
  );
}
