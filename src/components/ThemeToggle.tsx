import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-40 bg-terminal-card border border-terminal-border rounded-full p-3 shadow-lg hover:border-terminal-green transition-colors group"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <span className="text-terminal-orange text-xl group-hover:scale-110 transition-transform">☀️</span>
      ) : (
        <span className="text-terminal-blue text-xl group-hover:scale-110 transition-transform">🌙</span>
      )}
    </button>
  );
}