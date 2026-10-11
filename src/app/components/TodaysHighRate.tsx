import Link from "next/link";
import { Itype } from "../types/type";

const TodaysHighRate = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products');
    const data = await res.json();

    const highRateProducts: Itype[] = data.filter((h: Itype) => h.change.dir === "up").slice(0, 6);

    // console.log(highRateProducts);

    return (
        <div className="container mx-auto mt-8 sm:mt-10 md:mt-14 px-3 sm:px-4 lg:px-0">
            <div>
                <h1 className="text-xl sm:text-2xl font-bold py-3">
                    <span className="text-red-500">▲</span>
                    আজ দাম বেড়েছে
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
                    {highRateProducts.map(h => (
                        <Link key={h.id} href={`/productsDetails/${h.id}`}>
                            <div>
                                <div className="bg-white py-4 px-4 sm:py-5 sm:px-5 lg:px-7 shadow-sm rounded-md">
                                    <div className="flex gap-3 sm:gap-4 py-2">
                                        <p className="bg-[#ebf3eb] text-xl sm:text-2xl p-2 rounded-md shrink-0">{h.image}</p>
                                        <div className="min-w-0">
                                            <p className="text-sm sm:text-base wrap-break-word">{h.nameBn}</p>
                                            <p className="text-xs sm:text-sm">{h.unit}</p>
                                        </div>
                                    </div>
                                    <div>

                                        <p className="text-xs sm:text-sm">আজকের দাম</p>
                                        <div className="flex justify-between items-center gap-2">
                                            <p className="text-sm sm:text-base"><span className="font-bold">{h.today} </span>টাকা</p>
                                            <p className="text-red-500 text-sm sm:text-base shrink-0">▲ {h.change.pct}%</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TodaysHighRate;