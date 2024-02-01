import React, { PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';

import MainProvider from '@/components/layout/MainProvider';
import Sidebar from '@/components/layout/Sidebar/Sidebar';

import cl from './Layout.module.scss';

const LayoutClient = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <MainProvider>
      <main className={cl.layout}>
        <Sidebar />
        <section>{children}</section>
        <Toaster position="top-right" />
      </main>
    </MainProvider>
  );
};

export default LayoutClient;
