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
        <section className="mt-40">
            <div className="mx-auto max-w-3xl">

                <div className="mb-5 flex justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">আমার প্রোফাইল</h2>
                        <p className="text-xs text-gray-500">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
                    </div>

                    <Link href={'/update-profile'}>
                        <button className="btn bg-green-700 text-[18px] text-white w-20">Edit</button>
                    </Link>
                </div>

                <div className="card mb-4 border border-gray-200 bg-[#fbfdfb] shadow-none">
                    <div className="card-body flex-row items-center justify-between gap-3 p-4 sm:p-5">

                        <div className="flex min-w-0 items-center gap-3">

                            <div className="bg-gray-100 p-4 rounded-2xl">
                                {user?.image && (
                                    <Image className="rounded-2xl"
                                        src={user?.image}
                                        width={100}
                                        height={100}
                                        alt="user Image"
                                    />
                                )}
                            </div>

                            <div className="min-w-0">

                                <h3 className="truncate text-sm font-semibold text-gray-800">{user?.name}</h3>

                                <p className="truncate text-xs text-gray-500">{user?.email}</p>

                            </div>

                        </div>

                        <Link href={'/sign-in'}>
                            <button
                                onClick={handleSignOut}
                                type="button" className="btn btn-outline btn-error btn-xs shrink-0">↪ সাইন আউট
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProfilePage;