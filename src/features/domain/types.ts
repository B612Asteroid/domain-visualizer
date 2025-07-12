// 전체 DSL 문서를 표현
export type DomainDocument = {
  domains: DomainNode[];
};

// 도메인 단위
export type DomainNode = {
  [x: string]: unknown;
  name: string;
  description?: string;
  entities: EntityNode[];
  relations: RelationNode[];
};

// 엔티티 단위
export type EntityNode = {
  name: string;
  fields: FieldNode[];
  comments?: string[];
};

// 필드 단위
export type FieldNode = {
  name: string;
  type: string;
  metadata?: FieldMetadata;
  comments?: string[];
};

// 필드에 붙는 부가 정보 (key-value 속성)
export type FieldMetadata = {
  relation?: "one-to-one" | "one-to-many" | "many-to-one" | "many-to-many";
  null?: boolean;
  default?: string | number | boolean;
  min?: number;
  max?: number;
  allows?: string[];
  [key: string]: unknown; // 확장성 고려
};

// 관계 링크 정의
export type RelationNode = {
  name: string;
  source: string;
  target: string;
  comments?: string[];
};
