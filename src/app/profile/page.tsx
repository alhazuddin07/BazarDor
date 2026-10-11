"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

const ProfilePage = () => {

    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;

    if (isPending) {
        <span className="text-xs text-muted">Loading...</span>
    };

    const handleSignOut = async () => {
        await authClient.signOut();
        toast.success('Sign out succesfull');
    };

    return (
        <section className="mt-10 sm:mt-20 md:mt-40 px-3 sm:px-5 md:px-6">
            <div className="mx-auto max-w-3xl">

                <div className="mb-4 sm:mb-5 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                            আমার প্রোফাইল
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-500">
                            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
                        </p>
                    </div>

                    <Link href={'/update-profile'} className="shrink-0">
                        <button className="btn bg-green-700 text-sm sm:text-[18px] text-white w-16 sm:w-20 min-h-9 h-9 sm:h-12">
                            Edit
                        </button>
                    </Link>
                </div>

                <div className="card mb-4 border border-gray-200 bg-[#fbfdfb] shadow-none">
                    <div className="card-body flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-3 p-3 sm:p-4 md:p-5">

                        <div className="flex min-w-0 w-full sm:w-auto items-center gap-3">

                            <div className="bg-gray-100 p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl shrink-0">
                                {user?.image && (
                                    <Image
                                        className="rounded-xl sm:rounded-2xl w-14 h-14 sm:w-16 sm:h-16 md:w-25 md:h-25 object-cover"
                                        src={user?.image}
                                        width={100}
                                        height={100}
                                        alt="user Image"
                                    />
                                )}
                            </div>

                            <div className="min-w-0 flex-1">

                                <h3 className="truncate text-sm sm:text-base font-semibold text-gray-800">
                                    {user?.name}
                                </h3>

                                <p className="truncate text-xs sm:text-sm text-gray-500">
                                    {user?.email}
                                </p>

                            </div>

                        </div>

                        <Link href={'/sign-in'} className="self-end sm:self-auto shrink-0">
                            <button
                                onClick={handleSignOut}
                                type="button"
                                className="btn btn-outline btn-error btn-xs sm:btn-sm shrink-0"
                            >
                                ↪ সাইন আউট
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProfilePage;