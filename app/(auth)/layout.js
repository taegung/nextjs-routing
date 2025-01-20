'use client'; // ??

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: 'Register', href: '/register' },
    { name: 'Login', href: '/login' },
    { name: 'Forgot-Password?', href: '/forgot-password' },
];

export default function AuthLayout({children}) {
    // navLinks를 활용하여 네비게이션 할 수 있도록 구현

    // 현재 path의 이름을 가져오는 훅
    const pathName = usePathname();
    console.log(pathName);
    

    return (
        <section>
            {navLinks.map(link => {
                const isActive = pathName.startsWith(link.href);

                return (
                    <Link
                        className={`text-2xl text-blue-500 ${isActive ? 'text-red-500' : ''}`}
                        href={link.href} 
                        key={link.name}>
                            {link.name}&nbsp;
                    </Link>
                )
            })}
            {children}
        </section>
    );
}