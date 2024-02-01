import { useQuery } from '@tanstack/react-query';

import { $fetch } from '@/$api/api.fetch';
import { InterfaceUser } from '@/types/user.types';

export function useProfile() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: () => $fetch.get<InterfaceUser>('/users/me?populate=deep', true),
  });
}
