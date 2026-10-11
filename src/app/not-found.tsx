'use client';
import Link from "next/link";



const NotFoundPage = () => {
    return (
        <div className="flex min-h-[80vh] items-center justify-center bg-[#f1f5f0] px-4 py-10">
            <div className="w-full max-w-lg text-center">

                <div className="relative mx-auto mb-6 flex h-52 w-52 items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-green-100"></div>

                    <div className="relative flex items-center gap-1">
                        <span className="text-7xl font-extrabold text-green-700">
                            4
                        </span>

                        <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-green-600 bg-white text-4xl shadow-md">
                            🥬
                        </div>

                        <span className="text-7xl font-extrabold text-green-700">
                            4
                        </span>
                    </div>

                    <span className="absolute right-5 top-5 text-2xl">🍃</span>
                    <span className="absolute bottom-5 left-5 text-xl">🌱</span>
                </div>

                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-green-700">
                    Error 404
                </p>

                <h1 className="mb-4 text-3xl font-extrabold text-gray-800 sm:text-4xl">
                    দুঃখিত! পেজটি খুঁজে পাওয়া যায়নি
                </h1>

                <p className="mx-auto mb-8 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
                    আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরানো হয়েছে,
                    ঠিকানা পরিবর্তন হয়েছে অথবা পেজটি আর নেই।
                    চলুন, আবার বাজার দর-এর হোমপেজে ফিরে যাই।
                </p>


                <div className="flex flex-col justify-center gap-3 sm:flex-row">
                    <Link
                        href="/"
                        className="btn border-0 bg-green-700 px-7 text-white shadow-md hover:bg-green-800"
                    >
                        <span>⌂</span>
                        হোমপেজে ফিরে যান
                    </Link>

                    <button
                        type="button"
                        onClick={() => window.history.back()}
                        className="btn border border-gray-300 bg-white px-7 text-gray-700 hover:bg-gray-100"
                    >
                        ← আগের পেজে যান
                    </button>
                </div>


                <div className="mt-10 border-t border-gray-200 pt-5">
                    <p className="text-sm text-gray-500">
                        🥬 <span className="font-semibold text-green-700">বাজার দর</span>
                        {" "}— প্রয়োজনীয় পণ্যের দাম এক নজরে।
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;