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
    { id: 'visualizer', label: '📊 Visualizer' },
    { id: 'timeline', label: '📅 Timeline' },
    { id: 'blog', label: '📝 Blog' },
    { id: 'contact', label: '✉️ Contact' },
  ];

  const allItems = [...sections];

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
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div className="bg-[#14141e] border border-[#2a2a3a] rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden">
        <Command.Input
          value={search}
          onValueChange={setSearch}
          placeholder="Type a command or search..."
          className="w-full bg-transparent text-white text-lg px-6 py-4 outline-none border-b border-[#2a2a3a] placeholder:text-[#8a8a9a] font-mono"
          autoFocus
        />
        <Command.List className="max-h-[400px] overflow-y-auto p-2">
          <Command.Empty className="text-[#8a8a9a] text-center py-8">
            No results found.
          </Command.Empty>
          {allItems.map((item) => (
            <Command.Item
              key={item.id}
              value={item.id}
              onSelect={() => handleSelect(item.id)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-[#2a2a3a] cursor-pointer transition-colors"
            >
              <span>{item.label}</span>
              <span className="ml-auto text-xs text-[#8a8a9a]">jump to</span>
            </Command.Item>
          ))}
        </Command.List>
        <div className="px-6 py-3 border-t border-[#2a2a3a] text-xs text-[#8a8a9a] flex justify-between">
          <span>⌘K to close</span>
          <span>↑↓ navigate · Enter select</span>
        </div>
      </div>
    </Command.Dialog>
  );
}