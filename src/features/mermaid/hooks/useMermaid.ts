import { useMemo } from "react";
import { convertToMermaid } from "../utils/convertToMermaid";
import type { DomainDocument } from "@/features/domain/types";

export function useMermaid(document: DomainDocument) {
  return useMemo(() => convertToMermaid(document), [document]);
}
