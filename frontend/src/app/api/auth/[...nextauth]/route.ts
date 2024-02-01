import NextAuth from 'next-auth';

import { nextAuthOptions } from '@/lib/next-auth.lib';

const handler = NextAuth(nextAuthOptions);
export { handler as GET, handler as POST };
