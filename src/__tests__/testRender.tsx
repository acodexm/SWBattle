import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, renderHook } from '@testing-library/react';
import React, { ReactNode } from 'react';

/**
 * wrapper for all App providers that are going to be mocked in tests.
 */
function wrapper({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: 0,
      },
    },
  });
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export const renderUI = (component: ReactNode) => {
  return render(component, { wrapper });
};

export function mountHook<Props, Result>(hook: (initialProps: Props) => Result) {
  return renderHook(hook, { wrapper });
}
