import type { DomainDocument, DomainNode, EntityNode, FieldNode } from "../../domain/types";

export function parseMarkdown(markdown: string): DomainDocument {
  const lines = markdown.split("\n");

  const document: DomainDocument = { domains: [] };

  let currentDomain: DomainNode | null = null;
  let currentEntity: EntityNode | null = null;
  let currentField: FieldNode | null = null;
  let pendingComments: string[] = [];

  // #. 함수 선언부
  const parseDomain = (line: string) => {
    if (currentDomain) {
      document.domains.push(currentDomain);
    }
    currentDomain = {
      name: line.replace("## Domain:", "").trim(),
      entities: [],
      relations: [],
    };
    pendingComments = [];
  };

  const parseEntity = (line: string) => {
    if (!currentDomain) {
      // 기본 도메인 생성
      currentDomain = {
        name: "Default",
        entities: [],
        relations: [],
      };
    }
    if (currentEntity) {
      currentDomain.entities.push(currentEntity);
    }
    currentEntity = {
      name: line.replace("### Entity:", "").trim(),
      fields: [],
      comments: pendingComments,
    };
    pendingComments = [];
  };

  const parseRelation = (line: string) => {
    const relationName = line.replace("### Relation:", "").trim();
    if (currentDomain) {
      currentDomain.relations.push({
        name: relationName,
        source: "",
        target: "",
      });
    }
  };

  const parseField = (line: string) => {
    const keyValue = line.slice(1).trim().split(":");
    const key = keyValue[0].trim();
    const value = keyValue[1]?.trim();
    // Relation 내부 source/target
    const currentRelation = currentDomain?.relations[currentDomain.relations.length - 1];
    if (currentRelation && currentRelation.source === "") {
      currentRelation.source = value || "";
    } else if (currentRelation && currentRelation.target === "") {
      currentRelation.target = value || "";
    } else if (currentEntity) {
      currentField = {
        name: key,
        type: value || "",
        metadata: {},
        comments: pendingComments,
      };
      currentEntity.fields.push(currentField);
      pendingComments = [];
    }
  };

  const parseMetadata = (line: string) => {
    // 하위 메타데이터 (들여쓰기 or dash)
    const [metaKey, metaValue] = line.slice(3).split(":");
    const key = metaKey.trim();
    const meta = metaValue?.trim();
    let value: unknown = meta;
    if (meta === "true") {
      value = true;
    } else if (meta === "false") {
      value = false;
    } else if (!isNaN(Number(meta))) {
      value = Number(meta);
    } else if (meta.startsWith("[") && meta.endsWith("]")) {
      value = JSON.parse(meta);
    }
    if (currentField) {
      currentField.metadata![key] = value;
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith("## Domain:")) {
      // 새 도메인
      parseDomain(trimmed);
    } else if (trimmed.startsWith("### Entity:")) {
      // 새 엔티티
      parseEntity(trimmed);
    } else if (trimmed.startsWith("### Relation:")) {
      if (!currentDomain) {
        continue;
      }
      parseRelation(trimmed);
    } else if (/^-\s+[^:]+:\s+.+/.test(line)) {
      parseField(line);
    } else if (trimmed.startsWith(">")) {
      pendingComments.push(trimmed.replace(/^>\s*/, "").trim());
    } else if (trimmed.startsWith("---")) {
      // 도메인 종료
      if (currentEntity) {
        currentDomain?.entities.push(currentEntity);
        currentEntity = null;
      }
      if (currentDomain) {
        document.domains.push(currentDomain);
        currentDomain = null;
      }
    } else if (line.startsWith("  -") && currentField) {
      parseMetadata(line);
    }
  }

  // 마지막 도메인 마무리
  if (currentEntity) {
    currentDomain?.entities.push(currentEntity);
  }
  if (currentDomain) {
    document.domains.push(currentDomain);
  }

  return document;
}
