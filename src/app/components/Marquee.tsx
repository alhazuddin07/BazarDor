
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
import { Itype } from "../types/type";
import Link from "next/link";


const Marque = async () => {

    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products');
    const data: Itype[] = await res.json();

    return (
        <div className="py-5 border border-amber-100 shadow-sm ">
            <MarqueeText direction="right" duration={14}>
                {
                    data.map(d =>
                        <Link key={d.id} href={`/productsDetails/${d.id}`}>
                            <div className="hover:underline">
                                <div className="flex gap-2 justify-center items-center">
                                    <div>{d.nameBn}</div>
                                    <div>{d.today} টাকা/কেজি</div>
                                    <div>{d.change.dir === "up"
                                        ? <div className="text-red-500 mx-2">▲ {d.change.pct}%</div>
                                        : <div className="text-green-500 mx-2">▼ {d.change.pct}%</div>}
                                    </div>
                                    <span className="h-8 border-l border-gray-300 mx-6"></span>
                                </div>
                            </div>
                        </Link>
                    )
                };
            </MarqueeText>
        </div>
    );
};

export default Marque;