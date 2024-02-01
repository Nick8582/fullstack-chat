import { Metadata } from 'next';
import React from 'react';

import Friends from '@/app/friends/Friends';

export const metadata: Metadata = {
  title: 'Friends',
};
const FriendsPage = () => {
  return <Friends />;
};

export default FriendsPage;
