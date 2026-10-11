'use client';
import { Itype } from "../types/type";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type Props = {
    categories: Itype[];
};

const NavLinkClient = ({ categories }: Props) => {

    const pathname = usePathname();

    return (
        <div className="w-full border border-amber-50 shadow-sm">
            <div className="container mx-auto flex w-full items-center gap-1.5 overflow-x-auto whitespace-nowrap p-2 sm:gap-2 sm:p-3 md:gap-3 md:px-4 lg:px-0">

                <Link
                    href="/"
                    className={`shrink-0 rounded-lg px-3 py-2 text-xs transition-colors sm:px-4 sm:text-sm md:text-base ${pathname === "/"
                            ? "bg-green-600 text-white"
                            : "hover:bg-green-50"
                        }`}
                >
                    হোম
                </Link>

                {categories.map((d) => {
                    const isActive = pathname === `/category/${d.slug}`;

                    return (
                        <Link
                            key={d.id}
                            href={`/category/${d.slug}`}
                            className={`shrink-0 rounded-lg px-3 py-2 text-xs transition-colors sm:px-4 sm:text-sm md:text-base ${isActive
                                    ? "bg-green-600 text-white"
                                    : "hover:bg-green-50"
                                }`}
                        >
                            <div className="flex items-center gap-1 sm:gap-2">
                                <span>{d.icon}</span>
                                <span>{d.nameBn}</span>
                            </div>
                        </Link>
                    );
                })}

            </div>
        </div>
    );
};

export default NavLinkClient;