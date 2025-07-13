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
    if (!diagram || !containerRef.current) {
      return;
    }

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
    mermaid.initialize({
      startOnLoad: false,
      themeVariables: {
        background: "#ffffff",
        primaryColor: "#E0F2FE",
        primaryTextColor: "#0F172A",
        lineColor: "#94A3B8",
        fontFamily: "Inter, sans-serif",
        fontSize: "14px",
        edgeLabelBackground: "#ffffff",
      },
    });
  }, []);

  return (
    <div className="w-full min-h-[500px] border border-gray-300 rounded-md bg-white shadow-sm p-4 overflow-auto relative">
      {diagram ? (
        <div ref={containerRef} />
      ) : (
        <p className="text-gray-500 italic">No diagram to render.</p>
      )}
    </div>
  );
}
