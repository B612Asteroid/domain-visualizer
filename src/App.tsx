import { useState } from "react";
// import "@/styles/mdeditor.css";
import { MarkdownEditor } from "./components/layout/Editor";
import MermaidViewer from "@/features/mermaid/components/MermaidViewer";
import "@/styles/App.css";
import GuideLayer from "./features/guide/components/GuideLayer";
import GuideToggleButton from "./features/guide/components/GuideToggleButton";

function App() {
  const [showGuide, setShowGuide] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <header className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        🛠 Domain Visualizer
      </header>
      <>
        {showGuide && <GuideLayer onClose={() => setShowGuide(false)} />}
        <GuideToggleButton onToggle={() => setShowGuide(prev => !prev)} />
      </>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900 mb-2">📄 Markdown Editor</h2>
          <MarkdownEditor />
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900 mb-2">🧬 Mermaid Diagram</h2>
          <MermaidViewer />
        </div>
      </div>
    </div>
  );
}

export default App;
