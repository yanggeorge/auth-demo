import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';

export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        username: { label: 'username', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        console.log('🚀 ~ auth.ts:15 ~ authorize ~ credentials:', credentials);
        // 简单的凭证检查
        if (credentials?.username === 'admin' && credentials?.password === '123456') {
          return {
            id: '1',
            name: 'admin',
            email: 'admin@example.com',
          };
        }

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});
