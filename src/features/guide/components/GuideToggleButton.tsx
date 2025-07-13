interface Props {
  onToggle: () => void;
}

export default function GuideToggleButton({ onToggle }: Props) {
  return (
    <button
      className="fixed top-4 right-4 z-50 bg-white text-sm px-3 py-1.5 rounded shadow border hover:bg-gray-100"
      onClick={onToggle}
    >
      ❓ 가이드
    </button>
  );
}
