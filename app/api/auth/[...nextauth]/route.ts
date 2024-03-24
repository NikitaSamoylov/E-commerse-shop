import NextAuth from "next-auth";
import { User as AuthUser, Account } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import bcrypt from 'bcryptjs';
import User from "../../../../libs/models/User";
import connect from '../../../../dbConnect/dbConnect';

export const authOptions: any = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text'
        },
        password: {
          label: 'Password',
          type: 'password'
        },
      },
      async authorize(credentials: any) {
        await connect();

        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            }
          }
        } catch (err: any) {
          throw new Error(err);
        }
      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  jwt: {
    encryption: true,
  },
  callbacks: {
    jwt: async ({ token, user, trigger }: { token:any, user:any, trigger:any }) => {
      if (user || trigger === 'update') {
        token.username = user.username;
        token.secondName = user.secondName;
        token.thirdName = user.thirdName;
        token.id = user._id;
        token.role = user.role;
        token.phone = user.phone;
      }

      return token;
    },
    session: ({ session, token }: { session:any, token:any }) => {
      if (token) {
        session.user.username = token.username;
        session.user.secondName = token.secondName;
        session.user.thirdName = token.thirdName;
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.phone = token.phone;
      }
      return session;
    },
}
}

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
