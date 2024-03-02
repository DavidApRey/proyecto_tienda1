import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import { SignInEmailPassword } from "@/auth/actions/auth-actions";

import icon_person from '../../../../public/images/icon_person.png';
import { fetch_valid_user } from "@/app/lib/data";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),

        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Correo Electronico", type: "Email", placeholder: "Usuario@email.com" },
                password: { label: "Constraseña", type: "password", placeholder: "********" }
            },

            async authorize(credentials, req) {
                const user = await SignInEmailPassword(credentials.email, credentials.password);
                if (user) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],

    session: {
        strategy: 'jwt'
    },

    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            return true;
        },

        async jwt({ token, user, account, profile }) {
            if(token.name == undefined){
                const DBuser = await fetch_valid_user(user[0].email);
                token.picture = icon_person.src;
                token.roles = DBuser[0].permisos;
                token.id = DBuser[0].id_cons;
                token.name = DBuser[0].nombreCompleto;
                token.email = DBuser[0].email;
            }else{
                const DBuser = await fetch_valid_user(token.email);
                token.roles = DBuser[0].permisos;
                token.id = DBuser[0].id_cons;
            }
            
            return token;
        },

        async session({ session, token, user }) {

            if(session && session.user){
                session.user.roles = token.roles;
                session.user.id = token.id;
            }

            return session;
        }
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }