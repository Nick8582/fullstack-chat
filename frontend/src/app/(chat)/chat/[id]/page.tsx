import { Metadata } from 'next';
import React from 'react';

import Chat from '@/components/screen/chats/chat/Chat';
import { NO_INDEX_PAGE } from '@/constants/seo.constants';

export const metadata: Metadata = { title: 'Chat', ...NO_INDEX_PAGE };

const ChatPage = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return <Chat id={params.id} />;
};

export default ChatPage;
