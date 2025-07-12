import { useMemo } from "react";
import { parseMarkdown } from "../parseMarkdown";

export function useParseMarkdown(markdown: string) {
  return useMemo(() => parseMarkdown(markdown), [markdown]);
}
