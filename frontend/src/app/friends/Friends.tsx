'use client';

import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { $fetch } from '@/$api/api.fetch';
import { getImageUrl } from '@/app/config/get-image-url.config';
import Loader from '@/components/ui/loader/Loader';
import { useProfile } from '@/hooks/useProfile';
import { InterfaceUser } from '@/types/user.types';

const Friends = () => {
  const { data: authUser, refetch: refetchProfile } = useProfile();
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['users'],
    queryFn: () => $fetch.get<InterfaceUser[]>('/users?populate=avatar', true),
  });

  return (
    <div className={' w-7/12'}>
      <h1 className={'p-layout border-r border-b border-border'}>People</h1>
      {isLoading || isFetching ? (
        <div className={'h-full flex align-center justify-center'}>
          <Loader />
        </div>
      ) : (
        <div className={' grid grid-cols-3'}>
          {data?.map((user) => {
            const isFriend = authUser?.friends?.some((u) => u.id === user.id);

            return (
              <div
                key={user.id}
                className={clsx(
                  'text-center border border-l-0 border-t-0 border-border p-layout'
                )}
              >
                <Image
                  width={100}
                  height={100}
                  src={getImageUrl(user?.avatar?.url) || '/no-avatar.png'}
                  alt={user?.username}
                  priority
                  className={'rounded-xl mx-auto'}
                />
                <div className="mt-3 text-xl font-medium">{user.username}</div>
                <button className="border-b border-white transition-colors hover:border-primary hover:text-primary cursor-pointer mt-2">
                  {isFriend ? 'Remove friends' : 'Add to friends'}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Friends;
