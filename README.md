## 🧩 domain-visualizer

### 🛠️ 목표

- 도메인을 markdown 등등으로 생성하면 자동으로 mermaid 등을 통해 데이터를 시각화 한다.
- export 기능을 지원하여 PDF 등으로 만들어낼 수도 있다.
- 설계자, 개발자가 데이터를 쉽게 시각화하여 보기 위한 용도.

### ✏️ 기본 화면 구조 (구상안)

```
┌──────────────────────────────┐
│        Domain Visualizer     │
├──────────────────────────────┤
│ [Editor]     | [Preview]     │
│ ┌──────────┐ | ┌───────────┐ │
│ │Markdown  │ | │Mermaid    │ │
│ │에디터      │ | │Diagram    │ │
│ └──────────┘ | └───────────┘ │
└──────────────────────────────┘
```

### 📦 개발 스펙

- React.js
- tailwindcss
- md-editor
- mermaid.js
- redux-toolkit
