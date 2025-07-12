// src/components/MermaidDiagram.tsx
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/stores/store";
import { useParseMarkdown } from "@/features/parser/markdown/hooks/useParseMarkdown";
import { useMermaid } from "@/features/mermaid/hooks/useMermaid";
import mermaid from "mermaid";

export default function MermaidDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const markdown = useSelector((state: RootState) => state.markdown.raw);
  const parsed = useParseMarkdown(markdown);
  const diagram = useMermaid(parsed);

  useEffect(() => {
    if (!diagram || !containerRef.current) return;

    try {
      // DOM 요소 준비 후 파싱 → innerHTML 직접 삽입
      const insertMermaid = async () => {
        const { svg } = await mermaid.render("generatedDiagram", diagram);
        if (containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      };

      insertMermaid();
    } catch (err) {
      console.error("Mermaid render error:", err);
      if (containerRef.current) {
        containerRef.current.innerHTML = `<pre style="color:red;">Mermaid Error: ${String(err)}</pre>`;
      }
    }
  }, [diagram]);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: false });
  }, []);

  return <div className="p-4 bg-white border rounded overflow-auto" ref={containerRef} />;
}
