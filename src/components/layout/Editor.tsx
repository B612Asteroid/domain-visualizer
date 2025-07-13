// src/components/MarkdownEditor.tsx
import MDEditor from "@uiw/react-md-editor";
import { useDispatch, useSelector } from "react-redux";
import { setMarkdown } from "@/features/parser/markdown/slice/markdownSlice";
import type { RootState } from "@/stores/store";

export function MarkdownEditor() {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.markdown.raw);

  return (
    <div
      data-color-mode="light"
      className="w-full h-[500px] border border-gray-300 rounded-md bg-white shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-blue-500"
    >
      <MDEditor
        value={value}
        preview="edit"
        onChange={(v = "") => dispatch(setMarkdown(v))}
        height={1000}
        className="!bg-white !text-gray-800"
        textareaProps={{
          className: "text-sm font-mono focus:outline-none w-full h-full px-4 py-2",
        }}
      />
    </div>
  );
}
