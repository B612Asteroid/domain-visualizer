import GuideExampleBlock from "./GuideExampleBlock";
import { exampleMarkdowns } from "../constants/exampleMarkdowns";
import { useDispatch, useSelector } from "react-redux";
import { setMarkdown } from "@/features/parser/markdown/slice/markdownSlice";
import type { RootState } from "@/stores/store";
interface Props {
  onClose: () => void;
}

export default function GuideLayer({ onClose }: Props) {
  const dispatch = useDispatch();
  const markdownValue = useSelector((state: RootState) => state.markdown.raw);
  const addMarkdown = (markdown: string) => {
    dispatch(setMarkdown(markdownValue + "\n" + markdown));
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-40 backdrop-blur-sm bg-white/90 overflow-auto p-8">
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-black">
        닫기 ✖
      </button>
      <h2 className="text-2xl font-bold mb-6">📘 마크다운 가이드</h2>
      {Object.keys(exampleMarkdowns).map((key: string, index: number) => (
        <GuideExampleBlock
          key={index}
          onClick={addMarkdown}
          title={exampleMarkdowns[key].title}
          markdown={exampleMarkdowns[key].markdown}
          description={exampleMarkdowns[key].description}
        />
      ))}
    </div>
  );
}
