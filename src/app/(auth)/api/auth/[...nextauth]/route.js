import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { userLogin, userRegister } from '../../../../../../lib/api/auth/auth'

const credentialsProvider = (id, authorize) => CredentialsProvider({ id, authorize })

const authOptions = {
    strategy: 'jwt',
    providers: [
        credentialsProvider('login', async credentials => await userLogin(credentials)),
        credentialsProvider('register', async credentials => await userRegister(credentials)),
    ],
    pages: {
        signIn: '/login',
        error: '/login',
        signOut: '/login'
    },
    secret: process.env.NEXTAUTH_SECRET,
    cookies: {
        domain: process.env.NEXTAUTH_COOKIE_DOMAIN
    },
    callbacks: {
        async session({ session, token }) {
            if (token.user.data !== undefined) {
                session.user = token.user.data
            } else {
                session.user = token.user
            }
            return session
        },
        async signIn({ account, user }) {
            return true
        }
    }
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
