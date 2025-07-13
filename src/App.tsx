import "@/styles/App.css";
// import "@/styles/mdeditor.css";
import { MarkdownEditor } from "./components/layout/Editor";
import MermaidViewer from "@/features/mermaid/components/MermaidViewer";
function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-800">📄 Markdown Editor</h2>
          <MarkdownEditor />
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-800">🧬 Mermaid Diagram</h2>
          <MermaidViewer />
        </div>
      </div>
    </div>
  );
}

export default App;
