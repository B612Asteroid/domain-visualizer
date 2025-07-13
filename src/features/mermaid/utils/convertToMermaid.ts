import type { DomainDocument } from "@/features/domain/types";

export function convertToMermaid(document: DomainDocument): string {
  const lines: string[] = ["classDiagram"];

  for (const domain of document.domains) {
    const entityNames = domain.entities.map(e => e.name);
    const addedRelations = new Set<string>();

    for (const entity of domain.entities) {
      for (const comment of entity.comments) {
        lines.push(`%%%% ${comment}`);
      }

      lines.push(`class ${entity.name} {`);
      for (const field of entity.fields) {
        lines.push(`  +${field.name} : ${field.type}`);

        if (entityNames.includes(field.type)) {
          const relation = `${field.type} <-- ${entity.name}`;
          if (!addedRelations.has(relation)) {
            addedRelations.add(relation);
          }
        }
      }
      lines.push("}");
    }

    for (const relation of domain.relations) {
      lines.push(`${relation.source} --> ${relation.target}`);
    }
    for (const relation of addedRelations) {
      lines.push(relation);
    }
  }
  return lines.join("\n");
}
