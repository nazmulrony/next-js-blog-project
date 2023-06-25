'use client';
import Link from 'next/link';

const links = [
    {
        id: 1,
        title: 'Home',
        url: '/',
    },
    {
        id: 2,
        title: 'Portfolio',
        url: '/portfolio',
    },
    {
        id: 3,
        title: 'Blog',
        url: '/blog',
    },
    {
        id: 4,
        title: 'About',
        url: '/about',
    },
    {
        id: 5,
        title: 'Contact',
        url: '/contact',
    },
    {
        id: 6,
        title: 'Dashboard',
        url: '/dashboard',
    },
];

export default function Navbar() {
    return (
        <div className="h-24 flex justify-between items-center">
            <Link href="/" className="font-bold text-2xl">
                Devs Blog
            </Link>
            <div className="flex items-center gap-6">
                {links.map((link) => (
                    <Link key={link.id} href={link.url}>
                        {link.title}
                    </Link>
                ))}
                <button
                    onClick={() => console.log('logged out')}
                    className=" p-[5px] border-none bg-[#53c28b] cursor-pointer text-white rounded"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
