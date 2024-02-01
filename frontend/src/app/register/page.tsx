import { Metadata } from 'next';
import React from 'react';

import Auth from '@/components/screen/auth/Auth';
import { NO_INDEX_PAGE } from '@/constants/seo.constants';

export const metadata: Metadata = { title: 'Login', ...NO_INDEX_PAGE };

const RegisterPage = () => {
  return <Auth type={'Register'} />;
};

export default RegisterPage;
