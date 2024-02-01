import { PropsWithChildren } from 'react';

import CurrentUser from '@/components/screen/chats/CurrentUser';
import ChatList from '@/components/screen/chats/list/ChatList';

export default function ChatPage({ children }: PropsWithChildren<unknown>) {
  return (
    <div className={'grid h-full'} style={{ gridTemplateColumns: '.7fr 3fr' }}>
      <div className={'border-r border-border'}>
        <CurrentUser />
        <ChatList />
      </div>
      <div>{children}</div>
    </div>
  );
}
