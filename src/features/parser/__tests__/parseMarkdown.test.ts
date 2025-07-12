import { parseMarkdown } from "../parseMarkdown";
import type { DomainDocument } from "../../domain/types";

describe("parseMarkdown", () => {
  it("도메인과 엔티티, 필드, 관계를 올바르게 파싱해야 한다", () => {
    const input = `
## Domain: CMS

> 콘텐츠 관련 도메인입니다.

### Entity: Content
> 콘텐츠 기본 정보

- id: number
  - primary: true
- title: string
- body: string

### Relation: Content to Author
- source: Content
- target: Author
---
`;

    const result: DomainDocument = parseMarkdown(input);

    console.log(JSON.stringify(result));
    expect(result.domains.length).toBe(1);
    const domain = result.domains[0];

    expect(domain.name).toBe("CMS");
    expect(domain.entities.length).toBe(1);
    expect(domain.relations.length).toBe(1);

    const entity = domain.entities[0];
    expect(entity.name).toBe("Content");
    expect(entity.fields.length).toBe(3);
    expect(entity.fields[0].name).toBe("id");
    expect(entity.fields[0].type).toBe("number");
    expect(entity.fields[0].metadata?.primary).toBe(true);

    const relation = domain.relations[0];
    expect(relation.name).toBe("Content to Author");
    expect(relation.source).toBe("Content");
    expect(relation.target).toBe("Author");
  });
});
