// src/components/MermaidDiagram.tsx
import { useEffect, useRef } from "react";
import mermaid from "mermaid";
import { useSelector } from "react-redux";
import type { RootState } from "@/stores/store";
import { useParseMarkdown } from "@/features/parser/markdown/hooks/useParseMarkdown";
import { useMermaid } from "@/features/mermaid/hooks/useMermaid";

export function MermaidDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const markdown = useSelector((state: RootState) => state.markdown.raw);
  const parsed = useParseMarkdown(markdown);
  const diagram = useMermaid(parsed);

  useEffect(() => {
    if (!diagram || !containerRef.current) return;

    try {
      mermaid.initialize({ startOnLoad: false });
      mermaid.render("generatedDiagram", diagram, svgCode => {
        containerRef.current!.innerHTML = svgCode;
      });
    } catch (err) {
      console.error("Mermaid render error:", err);
      containerRef.current!.innerHTML = `<pre style="color:red;">Mermaid Error: ${err}</pre>`;
    }
  }, [diagram]);

  return <div className="p-4 bg-white border rounded overflow-auto" ref={containerRef} />;
}
