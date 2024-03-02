import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";
import { redirect } from 'next/navigation'
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
    title: "E-commerce",
    description: "",
};

export default async function AdminDashboardLayout({ children }) {

    const session = await getServerSession(authOptions)

    if(session!=null){
        if(session.user.roles != 'admin'){
            redirect('/api/auth/signin');
        }
    }else{
        redirect('/');
    }

    return (
        <>
            {children}
        </>
    );
}
