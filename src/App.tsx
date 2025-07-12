import "@/styles/App.css";
import "@/styles/mdeditor.css";
import { MarkdownEditor } from "./components/layout/Editor";
import MermaidViewer from "@/features/mermaid/components/MermaidViewer";
function App() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-6">
      <div className="w-full md:w-1/2">
        <MarkdownEditor />
      </div>
      <div className="w-full md:w-1/2">
        <MermaidViewer />
      </div>
    </div>
  );
}

export default App;
