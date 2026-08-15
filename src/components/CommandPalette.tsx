import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { projects } from '../data/projects';
import { timeline } from '../data/timeline';

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [open, onOpenChange]);

  const sections = [
    { id: 'hero', label: '🏠 Home' },
    { id: 'about', label: '📖 About' },
    { id: 'skills', label: '⚡ Skills' },
    { id: 'projects', label: '📁 Projects' },
    { id: 'timeline', label: '📅 Timeline' },
    { id: 'contact', label: '✉️ Contact' },
  ];

  const projectItems = projects.map(p => ({
    id: `project-${p.id}`,
    label: `📂 ${p.title}`,
    section: 'projects',
  }));

  const timelineItems = timeline.map((t, i) => ({
    id: `timeline-${i}`,
    label: `📌 ${t.semester}: ${t.title}`,
    section: 'timeline',
  }));

  const allItems = [...sections, ...projectItems, ...timelineItems];

  const handleSelect = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onOpenChange(false);
      setSearch('');
    }
  };

  return (
    <Command.Dialog
      open={open}
      onOpenChange={onOpenChange}
      label="Global Command Palette"
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div className="bg-terminal-card border border-terminal-border rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden">
        <Command.Input
          value={search}
          onValueChange={setSearch}
          placeholder="Type a command or search..."
          className="w-full bg-transparent text-white text-lg px-6 py-4 outline-none border-b border-terminal-border font-mono placeholder:text-terminal-gray"
          autoFocus
        />
        <Command.List className="max-h-[400px] overflow-y-auto p-2">
          <Command.Empty className="text-terminal-gray text-center py-8">
            No results found.
          </Command.Empty>
          {allItems.map((item) => (
            <Command.Item
              key={item.id}
              value={item.id}
              onSelect={() => handleSelect(item.id)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-terminal-border cursor-pointer transition-colors"
            >
              <span className="text-terminal-green">{item.label}</span>
              <span className="ml-auto text-xs text-terminal-gray">{item.section}</span>
            </Command.Item>
          ))}
        </Command.List>
        <div className="px-6 py-3 border-t border-terminal-border text-xs text-terminal-gray flex justify-between">
          <span>⌘K to close</span>
          <span>Navigate with ↑↓ · Enter to select</span>
        </div>
      </div>
    </Command.Dialog>
  );
}