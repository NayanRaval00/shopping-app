import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { userLogin, userRegister } from '../../../../../../lib/api/auth/auth'

const credentialsProvider = (id, authorize) => CredentialsProvider({ id, authorize })

const authOptions = {
    providers: [
        credentialsProvider('login', async credentials => await userLogin(credentials)),
        credentialsProvider('register', async credentials => await userRegister(credentials)),
    ],
    pages: {
        signIn: '/login',
        error: '/login',
        signOut: '/login'
    },
    callbacks: {
        async session({ session, token }) {

            console.log(session, 'session');
            console.log(token, 'token');
            if (token.user.data !== undefined) {
                session.user = token.user.data
            } else {
                session.user = token.user
            }
            return session
        },
        async signIn({ account, user }) {
            console.log(account,'account');
            console.log(user,'user');
            return true
        }
    }
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
