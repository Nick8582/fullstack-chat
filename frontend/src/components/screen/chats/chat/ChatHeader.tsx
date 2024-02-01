import { Search } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import { getImageUrl } from '@/app/config/get-image-url.config';
import { InterfaceUser } from '@/types/user.types';

const ChatHeader = ({ correspondent }: { correspondent?: InterfaceUser }) => {
  return (
    <div className={'p-layout flex items-center justify-between'}>
      <div className={'flex items-center'}>
        <Image
          src={getImageUrl(correspondent?.avatar?.url) || '/no-avatar.png'}
          alt={correspondent?.email || ''}
          width={40}
          height={40}
          className={'mr-4 rounded-xl'}
        />
        <div className={'text-sm'}>
          <div>{correspondent?.username}</div>
          <div className={'opacity-30'}>Friend</div>
        </div>
      </div>
      <button className="text-[#7C7275] hover:text-white transition-colors ease-linear">
        <Search />
      </button>
    </div>
  );
};

export default ChatHeader;
