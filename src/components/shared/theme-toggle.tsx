import { Moon, Sun } from 'lucide-react';

import { useTheme } from '@/hooks';
import { Button } from '@/components/ui/button';

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      size="icon"
      variant="outline"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Sun size={15} className="hidden text-primary [html.dark_&]:block" />
      <Moon size={15} className="block text-foreground [html.dark_&]:hidden" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
