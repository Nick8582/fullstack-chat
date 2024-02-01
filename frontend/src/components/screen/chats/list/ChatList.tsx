'use client';

import { useQuery } from '@tanstack/react-query';
import { Search } from 'lucide-react';
import React, { useEffect, useState } from 'react';

import { $fetch } from '@/$api/api.fetch';
import ChatListItem from '@/components/screen/chats/list/ChatListItem';
import Field from '@/components/ui/field/Field';
import Loader from '@/components/ui/loader/Loader';
import { useAuth } from '@/hooks/useAuth';
import { useDebounce } from '@/hooks/useDebounse';
import { InterfaceChat } from '@/types/chat.types';

const ChatList = () => {
  const { user, isLoggedIn } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['chats'],
    queryFn: () =>
      $fetch.get<{
        data: InterfaceChat[];
      }>(
        `/chats?sort=createdAt:desc
				&populate[messages]=*
				&populate[participants][populate][avatar]=*
				&filters[participants][email][$eq]=${user?.email}
				&filters[$or][0][participants][username][$contains]=${debouncedSearchTerm}
				&filters[$or][1][messages][text][$contains]=${debouncedSearchTerm}`,
        true
      ),
    enabled: isLoggedIn,
  });

  useEffect(() => {}, [debouncedSearchTerm]);

  return (
    <div>
      <div className={'p-layout border-t border-b border-border '}>
        <Field
          placeholder={'Search chats'}
          Icon={Search}
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
        />
      </div>
      <div>
        {isLoading || isFetching ? (
          <div className={'p-layout'}>
            <Loader />
          </div>
        ) : data?.data.length ? (
          data?.data.map((chat) => <ChatListItem chat={chat} key={chat.id} />)
        ) : (
          <p className={'p-layout'}>Chats not found!</p>
        )}
      </div>
    </div>
  );
};

export default ChatList;
