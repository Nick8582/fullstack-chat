import { usePathname, useRouter } from 'next/navigation';
import React, { PropsWithChildren, useEffect } from 'react';

import { useAuth } from '@/hooks/useAuth';

const AuthProvider = ({ children }: PropsWithChildren<unknown>) => {
  const { user, isLoggedIn } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      window.localStorage.setItem('token', user?.jwt || '');
    }
  }, [user, isLoggedIn]);
  useEffect(() => {
    if (pathname !== '/login' && pathname !== '/register') {
      const isLoggedIn = !!window.localStorage.getItem('token');
      if (!isLoggedIn) return router.push('/login');
    }
  }, [pathname, isLoggedIn]);

  return <>{children}</>;
};

export default AuthProvider;
