import { useContext } from 'react';

import { ThemeProviderContext } from '@/providers';
import type { ThemeProviderContextType } from '@/types';

export const useTheme = (): ThemeProviderContextType => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
