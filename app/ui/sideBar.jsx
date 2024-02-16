import Link from 'next/link'
import React from 'react'

function SideBar() {
    return (
        <div className='bg-slate-700 h-[97vh] rounded-lg shadow-lg w-[20%] m-3 p-3'>
            <Link
                className='hover:bg-slate-300 flex flex-row rounded-lg m-1 p-1 text-white hover:text-black'
                href="/lista_productos">
                <div className='basis-1/5'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                        <path fillRule="evenodd" d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className='basis-4/5'>
                    <h3 className='text-xl'>Computadores</h3>
                </div>
            </Link>
        </div>
    )
}

export default SideBar
