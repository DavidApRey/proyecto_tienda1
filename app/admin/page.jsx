import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

async function AdminDashboardPage() {
    
    const session = await getServerSession(authOptions)

    if(!session){
        redirect('/api/auth/signin')
    }

    return (
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2'>
            <div className="shadow-lg rounded-xl w-full md:w-[50rem] p-4 bg-white relative">
                <a href="#" className="w-full h-full block">
                    <div className="flex items-center border-b-2 mb-2 py-2">
                        <div className="pl-3">
                            <div className="font-medium">
                                Jessica White
                            </div>
                            <div className="text-gray-600 text-sm">
                                Sr. David
                            </div>
                        </div>

                    </div>
                    <div className="w-full">
                        {/* <p className="text-gray-800 text-sm font-medium mb-2">
                            Working On:
                        </p>
                        <p className="text-blue-600 text-xs font-medium mb-2">
                            Due: Sunday, 23 August
                        </p>
                        <p className="text-gray-400 text-sm mb-4">
                            You’ve been coding for a while now and know your way around...
                        </p> */}
                        <p className="text-gray-800 text-xl font-medium mb-2">
                            {
                                JSON.stringify(session.user)
                            }
                        </p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default AdminDashboardPage
