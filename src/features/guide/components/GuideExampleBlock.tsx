interface Props {
  title: string;
  markdown: string;
  description: string;
  onClick: (markdown) => void;
}

export default function GuideExampleBlock({ title, markdown, description, onClick }: Props) {
  return (
    <div className="mb-6" onClick={() => onClick(markdown)}>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <pre className="bg-gray-100 text-sm p-3 rounded overflow-auto whitespace-pre-wrap">
        {markdown}
      </pre>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
    </div>
  );
}
