"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const UserInfo = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    if (isPending) {
        return <span className="loading loading-spinner loading-sm" />;
    }

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success('Sign out succesfully');
                    redirect('/sign-in')
                },
            },
        });
    };

    return (
        <div className="shrink-0">
            {user ? (
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="flex cursor-pointer items-center gap-1.5 sm:gap-2"
                    >
                        <div className="avatar">
                            <div className="w-8 sm:w-9 rounded-full">
                                <Image
                                    alt={user.name || "User"}
                                    src={user.image || "/default-avatar.png"}
                                    width={36}
                                    height={36}
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <span className="hidden xs:inline sm:inline max-w-20 sm:max-w-32 truncate text-xs sm:text-sm font-medium">
                            {user.name}
                        </span>

                        <span className="text-[10px] sm:text-xs">▼</span>
                    </div>

                    <div
                        tabIndex={0}
                        className="dropdown-content z-50 mt-3 w-56 sm:w-64 max-w-[calc(100vw-1.5rem)] rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-xl"
                    >
                        <div className="border-b border-gray-100 pb-3">
                            <h3 className="font-semibold text-sm sm:text-base text-gray-800 wrap-break-word">
                                {user.name}
                            </h3>

                            <p className="wrap-break-word text-xs text-gray-500">
                                {user.email}
                            </p>
                        </div>

                        <Link
                            href="/profile"
                            className="mt-2 flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            <span>👤</span>
                            আমার প্রোফাইল
                        </Link>

                        <button
                            type="button"
                            onClick={handleSignOut}
                            className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-red-500 hover:bg-red-50"
                        >
                            <span>↪</span>
                            সাইন আউট
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex items-center gap-2 sm:gap-4">
                    <Link
                        href="/sign-in"
                        className="whitespace-nowrap text-xs sm:text-sm md:text-base font-semibold text-green-700"
                    >
                        সাইন ইন
                    </Link>

                    <Link
                        href="/sign-up"
                        className="btn min-h-8 h-9 sm:h-10 px-3 sm:px-4 text-xs sm:text-sm md:text-base border-0 bg-green-700 text-white hover:bg-green-800"
                    >
                        সাইন আপ
                    </Link>
                </div>
            )}
        </div>
    );
};

export default UserInfo;