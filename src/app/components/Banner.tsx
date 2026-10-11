'use client';
import Image from 'next/image';
import BannerLogo from "@/assets/bazar-hero.png";

const Banner = () => {

    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full"
    });

    return (
        <div className='container mx-auto bg-white shadow-sm mt-10 rounded-2xl'>
            <div className='flex justify-between p-8'>
                <div className=''>
                    <p className='text-green-400 bg-green-50 max-w-55 py-1 px-1 text-center rounded-2xl'>{date}</p>
                    <h2 className='text-4xl font-bold py-3'>আজকের বাজারের দাম এক নজরে</h2>
                    <p className='text-[#868282] py-3'>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন- <br /> সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                    <button 
                        onClick={()=> {
                            document.getElementById("allproducts")?.scrollIntoView({
                                behavior: 'smooth',
                            });
                        }}
                        className='btn bg-green-700 text-white my-3 py-2 px-4 rounded-md'>
                        সব পণ্য দেখুন
                    </button>
                </div>
                <div>
                    <Image
                        src={BannerLogo}
                        width={300}
                        height={300}
                        alt='Banner Image'
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;