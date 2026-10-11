'use client';
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import React from 'react';

const UpdateProfilePage = () => {

    const handleUpdate = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newUserData = Object.fromEntries(formData.entries()) as { name: string, image: string };

        await authClient.updateUser({
            ...newUserData,
        })

        redirect('/')
    }

    return (
        <div className="mx-auto mt-5 sm:mt-8 max-w-3xl px-3 sm:px-5 md:px-6">

            <h2 className='py-4 sm:py-5 text-center text-xl sm:text-2xl md:text-3xl font-bold'>
                আপনার প্রোফাইল আপডেট করুন
            </h2>

            <div className='bg-white p-4 sm:p-5 md:p-7 rounded-xl sm:rounded-2xl shadow-sm'>
                <form onSubmit={handleUpdate}>
                    <fieldset className="fieldset rounded-box py-2 sm:py-3">
                        <label className="label text-black text-base sm:text-lg">নাম</label>
                        <input
                            name='name'
                            type="text"
                            className="w-full input text-sm sm:text-base"
                            placeholder="আপনার নাম আপডেট করুন"
                            required
                        />

                        <label className="lable text-black text-base sm:text-lg">ছবি</label>
                        <input
                            name="image"
                            type="url"
                            className="w-full input text-sm sm:text-base"
                            placeholder="আপনার ছবি আপডেট করুন"
                            required
                        />
                    </fieldset>

                    <button className="btn w-full mt-2 sm:mt-3 bg-green-700 text-sm sm:text-base text-white">
                        আপডেট
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfilePage;