import { Itype } from '../types/type';
import Link from 'next/link';

const AllProducts = async () => {

    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products');
    const allProducts: Itype[] = await res.json();
    // console.log("all", allProducts);

    return (
        <div id='allproducts' className='container mx-auto my-6 sm:my-9 px-3 sm:px-4'>
            <h1 className="text-xl sm:text-2xl font-bold">সব পণ্য</h1>
            <p className='py-3 text-sm sm:text-base'>মোট {allProducts.length} টি পণ্য দেখানো হচ্ছে</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
                {allProducts.map(a => (
                    <Link key={a.id} href={`/productsDetails/${a.id}`} className="min-w-0">
                        <div>
                            <div className="bg-white py-4 px-4 sm:py-5 sm:px-5 lg:px-7 shadow-sm rounded-md h-full">
                                <div className="flex gap-3 sm:gap-4 py-2">
                                    <p className="bg-[#ebf3eb] text-xl sm:text-2xl p-2 rounded-md shrink-0">{a.image}</p>
                                    <div className="min-w-0">
                                        <p className="text-sm sm:text-base wrap-break-word">{a.nameBn}</p>
                                        <p className="text-xs sm:text-sm text-gray-500">{a.unit}</p>
                                    </div>
                                </div>
                                <div>

                                    <p className="text-xs sm:text-sm text-gray-500">আজকের দাম</p>
                                    <div className="flex justify-between items-center gap-2">
                                        <p className="text-sm sm:text-base"><span className="font-bold">{a.today} </span>টাকা</p>
                                        <div className="shrink-0">{a.change.dir === "up" ? (
                                            <span className="badge badge-error badge-soft text-[10px] sm:text-xs h-5 px-2">
                                                ▲ {a.change.pct}%
                                            </span>
                                        ) : a.change.dir === "down" ? (
                                            <span className="badge badge-success badge-soft text-[10px] sm:text-xs h-5 px-2">
                                                ▼ {a.change.pct}%
                                            </span>
                                        ) : (
                                            <span className="badge bg-gray-100 text-gray-600 border-0 text-[10px] sm:text-xs h-5 px-2">
                                                — 0.0%
                                            </span>
                                        )}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AllProducts;