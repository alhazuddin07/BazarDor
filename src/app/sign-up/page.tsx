"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import gitLogo from '@/assets/github.png';
import goLogo from '@/assets/Google.png';
import { redirect } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";


const SignUpPage = () => {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const passwordsMatch = password === confirmPassword;

    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("দুটি পাসওয়ার্ড একই নয়!");
            return;
        }

        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries()) as { name: string, password: string, email: string, }

        console.log("user", user);

        const { data, error } = await authClient.signUp.email({
            ...user,
            callbackURL: "/",
        });

        if (data) {
            console.log(data);
            redirect('/')
        };

        if (error) {
            // toast.error(error.message ?? 'Sign up failed');
            console.log(error);
        };

    };

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };

    const handleGitHubSignIn = async () => {
        await authClient.signIn.social({
            provider: 'github',
        });
    };



    return (
        <section>
            <div>
                <div className='text-center my-9'>
                    <h2 className='text-3xl font-bold'>অ্যাকাউন্ট তৈরি করুন</h2>
                    <p className='text-[15px] text-[#747373]'>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
                </div>

                <div className='flex justify-center my-9 items-center text-center'>
                    <form className="bg-white p-5 rounded-2xl shadow-sm" onSubmit={onSubmit}>
                        <fieldset className="fieldset rounded-box">

                            <label className="label text-black text-[18px]">নাম</label>
                            <input name='name' type="text" className="input w-full" placeholder="আপনার নাম লিখুন" />

                            <label className="label text-black text-[18px]">ছবি</label>
                            <input name="image" type="url" className="input w-full" placeholder="প্রোফাইল ছবি সেট করুন" required />

                            <label className="label text-black text-[18px]">ইমেইল</label>
                            <input name='email' type="email" className="input validator w-full" placeholder="আপনার ইমেল লিখুন" required />


                            <label className="label text-black text-[18px]">পাসওয়ার্ড</label>
                            <input
                                name="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="কমপক্ষে ৮ অক্ষর"
                                className="input validator w-full"
                                required
                            />

                            <label className="label text-black text-[18px]">পাসওয়ার্ড নিশ্চিত করুন</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="আবার লিখুন"
                                className="input validator w-full"
                            />

                            {confirmPassword.length > 0 && (
                                <p
                                    className={`mt-1 text-sm ${passwordsMatch ? "text-green-600" : "text-red-500"
                                        }`}
                                >
                                    {passwordsMatch
                                        ? "পাসওয়ার্ড মিলেছে ✓"
                                        : "পাসওয়ার্ড মিলছে না!"}
                                </p>
                            )}

                            <button type='submit' className="btn bg-green-700 text-white mt-4">অ্যাকাউন্ট তৈরি করুন</button>

                            <div className="flex items-center gap-3 py-1">
                                <div className="h-px flex-1 bg-gray-200" />
                                <span className="text-xs text-gray-500">অথবা</span>
                                <div className="h-px flex-1 bg-gray-200" />
                            </div>

                            <div className="grid grid-cols-2 gap-2 py-2">

                                <button onClick={handleGoogleSignIn} className="btn flex">
                                    <Image src={goLogo} width={20} height={20} alt="google logo" />
                                    <p>Google দিয়ে চালিয়ে যান</p>
                                </button>


                                <button onClick={handleGitHubSignIn} className="btn flex">
                                    <Image src={gitLogo} width={20} height={20} alt="google logo" />
                                    <p>GitHub দিয়ে চালিয়ে যান</p>
                                </button>

                            </div>

                            <p className="py-2 text-[15px]">অ্যাকাউন্ট আছে?  <Link href={'/sign-in'} className="text-green-500">সাইন ইন করুন</Link></p>

                        </fieldset>
                    </form>
                </div>

            </div>

            <Link href={'/'}><p className="text-[#7a7979] py-3 hover:text-green-500">← হোম পেজে ফিরে যান</p></Link>

        </section>
    );
};

export default SignUpPage;