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
        <div className="mx-auto max-w-3xl mt-8">


            <h2 className='py-5 text-center text-2xl font-bold'>আপনার প্রোফাইল আপডেট করুন</h2>


            <div className='bg-white p-5 rounded-2xl shadow-sm'>
                <form onSubmit={handleUpdate}>
                    <fieldset className="fieldset rounded-box py-3">
                        <label className="label text-black text-[18px]">নাম</label>
                        <input name='name' type="text" className="w-full input" placeholder="আপনার নাম আপডেট করুন" required/>

                        <label className="lable text-black text-[18px]">ছবি</label>
                        <input name="image" type="url" className="w-full input" placeholder="আপনার ছবি আপডেট করুন" required/>
                    </fieldset>

                    <button className="btn w-full bg-green-700 text-white">আপডেট</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfilePage;