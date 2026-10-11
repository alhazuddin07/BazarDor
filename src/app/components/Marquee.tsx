import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import { Itype } from "../types/type";
import Link from "next/link";

const Marque = async () => {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/products"
    );
    const data: Itype[] = await res.json();

    return (
        <div className="overflow-hidden border border-amber-100 py-3 shadow-sm sm:py-4 md:py-5">
            <MarqueeText direction="right" duration={14}>
                {data.map((d) => (
                    <Link key={d.id} href={`/productsDetails/${d.id}`}>
                        <div className="whitespace-nowrap hover:underline">
                            <div className="flex items-center justify-center gap-1.5 text-xs sm:gap-2 sm:text-sm md:text-base">
                                <div>{d.nameBn}</div>

                                <div>
                                    {d.today} টাকা/কেজি
                                </div>

                                <div>
                                    {d.change.dir === "up" ? (
                                        <div className="mx-1 text-red-500 sm:mx-2">
                                            ▲ {d.change.pct}%
                                        </div>
                                    ) : (
                                        <div className="mx-1 text-green-500 sm:mx-2">
                                            ▼ {d.change.pct}%
                                        </div>
                                    )}
                                </div>

                                <span className="mx-2 h-6 border-l border-gray-300 sm:mx-4 sm:h-7 md:mx-6 md:h-8"></span>
                            </div>
                        </div>
                    </Link>
                ))}
                ;
            </MarqueeText>
        </div>
    );
};

export default Marque;