"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import gitLogo from '@/assets/github.png';
import goLogo from '@/assets/Google.png';
import Image from "next/image";
import { toast } from "react-toastify";
import Link from "next/link";


const SignInPage = () => {

    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries()) as { email: string, password: string };
        // console.log(user);

        const { data, error } = await authClient.signIn.email({
            ...user,
            callbackURL: '/'
        });

        if (data) {
            toast.success("Sign in successfully")
            console.log(data);
        };

        if (error) {
            toast.error(error.message || 'Sign in failed');
            console.log("Error message:", error.message);
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
        <div className='text-center mt-9'>
            <div>
                <div>
                    <h2 className='text-3xl font-bold'>সাইন ইন</h2>
                    <p className='text-[15px] text-[#747373]'>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
                </div>

                <div className='flex justify-center items-center text-center my-6'>

                    <form className="bg-white p-5 rounded-2xl shadow-sm" onSubmit={onSubmit}>
                        <fieldset className="fieldset rounded-box">

                            <label className="label text-black text-[18px]">ইমেইল</label>
                            <input name='email' type="email" className="input w-full" placeholder="আপনার ইমেল লিখুন" required />

                            <label className="label text-black text-[18px]">পাসওয়ার্ড</label>
                            <input name='password' type="password" className="input w-full" placeholder="কমপক্ষে ৮ অক্ষর" required />

                            <button type='submit' className="btn bg-green-700 text-white mt-4">সাইন ইন করুন</button>

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

                            <p className="py-2 text-[15px]">অ্যাকাউন্ট নেই?  <Link href={'/sign-up'} className="text-green-500">সাইন আপ করুন</Link></p>

                        </fieldset>
                    </form>
                </div>

            </div>

            <Link href={'/'}><p className="text-[#7a7979] py-3 hover:text-green-500">← হোম পেজে ফিরে যান</p></Link>

        </div>
    );
};

export default SignInPage;