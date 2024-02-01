'use client';

import clsx from 'clsx';
import { Sun } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { MENU } from '@/components/layout/Sidebar/sidebar.data';
import { useAuth } from '@/hooks/useAuth';

import cl from './Sidebar.module.scss';

const Sidebar = () => {
  const pathname = usePathname();
  const { isLoggedIn } = useAuth();
  return (
    <aside className={cl.sidebar}>
      {isLoggedIn ? (
        <>
          <Image src="/logo.svg" priority alt={'logo'} width={45} height={45} />
          <nav>
            {MENU.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                className={clsx(pathname == item.url && cl.active)}
              >
                <item.icon size={27} />
              </Link>
            ))}
          </nav>
          <Sun size={35} />
        </>
      ) : null}
    </aside>
  );
};

export default Sidebar;
