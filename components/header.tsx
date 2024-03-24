'use client';
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
    const [pathname, setPathname] = useState('');

    useEffect(() => {
        setPathname(window.location.pathname);
    }, []);

    function gen_navi_item(label: string, path: string) {
        return (
            <div className=''>
                <a
                    href={path}
                    className={pathname === path ? "hover:text-gray-400 text-orange-400" : "hover:text-gray-400"}
                >
                    {label}
                </a>
            </div>
        );
    }

    return (
        <div className='container mx-auto px-4'>
            <div className="flex items-center flex-wrap w-full md:inline-flex md:justify-between">
                <div className='inline-flex flex-shrink-0 items-center w-full h-20 md:w-auto'>
                    <Image src="/CYBEREDGE.svg" width={300} height={80} />
                    <span className="text-2xl font-bold"></span>
                </div>
                <div id="navbar_menu" className="inline-flex items-center justify-end w-full gap-x-4 pb-2 md:w-auto md:pb-0">
                    {gen_navi_item('HOME', '/')}
                    {gen_navi_item('SERVICES', '/services')}
                    {gen_navi_item('PROFILE', '/profile')}
                    {gen_navi_item('CONTACT', '/contact')}
                </div>
            </div>
        </div>
    );
}  