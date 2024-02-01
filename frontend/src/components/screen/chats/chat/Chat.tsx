'use client';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

import { $fetch } from '@/$api/api.fetch';
import ChatHeader from '@/components/screen/chats/chat/ChatHeader';
import { Message } from '@/components/screen/chats/chat/Message';
import MessageField from '@/components/screen/chats/chat/MessageFIeld';
import Loader from '@/components/ui/loader/Loader';
import { useAuth } from '@/hooks/useAuth';
import { InterfaceChat } from '@/types/chat.types';

const Chat = ({ id }: { id: string }) => {
  const { user } = useAuth();
  const { data, isLoading } = useQuery({
    queryKey: ['chat', id],
    queryFn: () =>
      $fetch.get<{
        data: InterfaceChat;
      }>(
        `/chats/${id}
				?populate[messages][populate][sender][populate][avatar]=*
				&populate[participants][populate][avatar]=*`,
        true
      ),
    select: (data) => data.data,
    enabled: !!id,
  });

  const correspondent = data?.participants.find((u) => u.email !== user?.email);

  return (
    <div
      className={
        'w-8/12 border-r border-border h-full flex flex-col max-h-screen overflow-hidden'
      }
    >
      {isLoading ? (
        <div className="flex items-center justify-center flex-1">
          <Loader />
        </div>
      ) : (
        <>
          <ChatHeader correspondent={correspondent} />
          <div
            className={
              'p-layout border-t border-border flex-1 overflow-y-scroll'
            }
          >
            {data?.messages.map((message) => (
              <Message key={message.id} message={message} />
            ))}
          </div>
        </>
      )}
      <MessageField />
    </div>
  );
};

export default Chat;
