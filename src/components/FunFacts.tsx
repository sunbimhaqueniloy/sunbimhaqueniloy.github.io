import { funFacts } from '../data/funFacts';

export function FunFacts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {funFacts.map((fact, i) => (
        <div
          key={i}
          className="bg-terminal-card p-4 rounded-lg border border-terminal-border hover:border-violet-500 transition group"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl group-hover:scale-110 transition-transform">{fact.emoji}</span>
            <p className="text-sm text-gray-300">{fact.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}