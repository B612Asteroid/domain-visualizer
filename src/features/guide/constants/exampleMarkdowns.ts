export type ExampleMarkdown = {
  [key: string]: {
    title: string;
    markdown: string;
    description: string;
  };
};

export const exampleMarkdowns = {
  domain: {
    title: "도메인 정의",
    markdown: `## Domain: Content \n > 콘텐츠 관리 도메인`,
    description: "도메인의 이름을 명시합니다. 전체 클래스들을 묶는 그룹 역할을 합니다.",
  },
  entity: {
    title: "엔티티 정의",
    markdown: `### Entity: Item
- id : UUID
- name : String
  - min: 1
  - max: 10
  - null: false
- order: Integer
  - default: 1
`,
    description:
      "엔티티 이름과 필드 목록을 정의합니다. 들여쓰기 없이 '-'로 필드를 구분합니다. 필드는 자유롭게 작성합니다.",
  },
  relations: {
    title: "관계 정의",
    markdown: `### Relation: ItemProductLink
- source: Item
- target: Product`,
    description: "엔티티 간의 관계를 나타냅니다. source --> target 으로 그려집니다.",
  },
};
