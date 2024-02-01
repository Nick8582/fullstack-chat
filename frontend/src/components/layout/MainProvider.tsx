'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import React, { PropsWithChildren } from 'react';

import AuthProvider from '@/providers/AuthProvider';

const queryClient = new QueryClient();

const MainProvider = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>{children}</AuthProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default MainProvider;
