import { useState, useEffect } from 'react';

interface GitHubStats {
  repos: number;
  followers: number;
}

export function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch('https://api.github.com/users/sunbimhaqueniloy');
        const data = await res.json();
        setStats({
          repos: data.public_repos || 0,
          followers: data.followers || 0,
        });
        setLoading(false);
      } catch {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 animate-pulse">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="bg-terminal-card h-20 rounded-lg border border-terminal-border" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      <div className="bg-terminal-card p-4 rounded-lg border border-terminal-border text-center hover:border-violet-500 transition">
        <div className="text-2xl font-bold text-violet-400">{stats?.repos || 0}</div>
        <div className="text-xs text-terminal-gray">Repositories</div>
      </div>
      <div className="bg-terminal-card p-4 rounded-lg border border-terminal-border text-center hover:border-cyan-400 transition">
        <div className="text-2xl font-bold text-cyan-400">{stats?.followers || 0}</div>
        <div className="text-xs text-terminal-gray">Followers</div>
      </div>
      <div className="bg-terminal-card p-4 rounded-lg border border-terminal-border text-center hover:border-violet-500 transition">
        <div className="text-2xl font-bold text-violet-400">42</div>
        <div className="text-xs text-terminal-gray">Total Stars</div>
      </div>
      <div className="bg-terminal-card p-4 rounded-lg border border-terminal-border text-center hover:border-cyan-400 transition">
        <div className="text-2xl font-bold text-cyan-400">365</div>
        <div className="text-xs text-terminal-gray">Contributions</div>
      </div>
    </div>
  );
}