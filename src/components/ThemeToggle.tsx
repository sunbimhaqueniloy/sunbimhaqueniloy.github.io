import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-40 bg-[#14141e] border border-[#2a2a3a] rounded-full p-3 shadow-lg hover:border-violet-500 transition-colors group"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <span className="text-cyan-400 text-xl group-hover:scale-110 transition-transform">☀️</span>
      ) : (
        <span className="text-violet-400 text-xl group-hover:scale-110 transition-transform">🌙</span>
      )}
    </button>
  );
}