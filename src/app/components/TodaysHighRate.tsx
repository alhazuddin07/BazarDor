import Link from "next/link";
import { Itype } from "../types/type";


const TodaysHighRate = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products');
    const data = await res.json();

    const highRateProducts: Itype[] = data.filter((h: Itype) => h.change.dir === "up").slice(0, 6);

    // console.log(highRateProducts);

    return (
        <div className="container mx-auto mt-14">
            <div>
                <h1 className="text-2xl font-bold py-3">
                    <span className="text-red-500">▲</span>
                    আজ দাম বেড়েছে
                </h1>

                <div className="grid grid-cols-3 gap-5">
                    {highRateProducts.map(h => (
                        <Link key={h.id} href={`/productsDetails/${h.id}`}>
                            <div>
                                <div className=" bg-white py-5 px-7 shadow-sm rounded-md">
                                    <div className="flex gap-4 py-2">
                                        <p className="bg-[#ebf3eb] text-2xl p-2 rounded-md">{h.image}</p>
                                        <div>
                                            <p>{h.nameBn}</p>
                                            <p>{h.unit}</p>
                                        </div>
                                    </div>
                                    <div>

                                        <p>আজকের দাম</p>
                                        <div className="flex justify-between">
                                            <p><span className="font-bold">{h.today} </span>টাকা</p>
                                            <p className="text-red-500">▲ {h.change.pct}%</p>
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