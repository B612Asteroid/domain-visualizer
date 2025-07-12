## Domain: Content

> 콘텐츠 관리 도메인

### Entity: Task

> 코멘트는 어떻게 붙이던 자유야.

- id: UUID
- code: String
  - min: 1
  - max: 10
  - comment: 엔티티, 도메인 코멘트는 이렇게 적자
- name: String
  - min: 1
  - null: false
  - max: 30
- order: Integer
  - default: 1
- isDelete: Boolean
  - default: false

> 코멘트는 위에도, 이렇게 아래도 붙을 수 있어. 이 모두를 모아 배열로...

### Entity: Activity

- id: UUID
- task: Task
  - relation: many-to-one
  - null: true
- contentType: Enum
  - allows: ["HT", "VI", "QU"]
- name: String
  - min: 1
  - max: 1000
  - null: false
- order: Integer
- isDelete: Boolean
  - default: false

### Entity: Metadata

- id: Long
- activity: Activity
  - null: false
  - relation: one-to-one
- urlPath: String

> 예시니까 이정도만 쓸게.

### Relation: ActivityTopicLink

- source: Activity
- target: Topic

---

> 이렇게 줄로 그으면 이 도메인은 끝인것으로 하자.
