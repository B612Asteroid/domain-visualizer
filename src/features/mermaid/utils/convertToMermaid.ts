import type { DomainDocument } from "@/features/domain/types";

export function convertToMermaid(document: DomainDocument): string {
  const lines: string[] = ["classDiagram"];

  for (const domain of document.domains) {
    for (const entity of domain.entities) {
      lines.push(`class ${entity.name} {`);
      for (const field of entity.fields) {
        lines.push(`  +${field.name} : ${field.type}`);
      }
      lines.push("}");
    }

    for (const relation of domain.relations) {
      lines.push(`${relation.source} --> ${relation.target}`);
    }
  }

  return lines.join("\n");
}
