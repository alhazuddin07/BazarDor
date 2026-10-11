import React from "react";

const Loading = () => {
    return (
        <div className="flex min-h-[80vh] flex-col items-center justify-center bg-green-50/50 px-4">
            {/* Loading Animation */}
            <div className="relative flex h-24 w-24 items-center justify-center">
                <div className="absolute h-24 w-24 animate-spin rounded-full border-4 border-green-200 border-t-green-700" />

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
                    🛒
                </div>
            </div>

            {/* Loading Text */}
            <h2 className="mt-8 text-2xl font-bold text-green-800">
                একটু অপেক্ষা করুন...
            </h2>

            <p className="mt-2 text-center text-sm text-gray-500">
                বাজারদরের সর্বশেষ তথ্য লোড হচ্ছে
            </p>

            {/* Loading Dots */}
            <div className="mt-5 flex items-center gap-2">
                <span className="h-2 w-2 animate-bounce rounded-full bg-green-700 [animation-delay:-0.3s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-green-700 [animation-delay:-0.15s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-green-700" />
            </div>
        </div>
    );
};

export default Loading;