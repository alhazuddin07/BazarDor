"use client";

import { useState } from "react";
import { Itype } from "@/app/types/type";
import Link from "next/link";

type Props = {
    products: Itype[];
};

const toNumber = (value: string | number) => {
    const englishNumber = String(value)
        .replace(/[০-৯]/g, (digit) =>
            String("০১২৩৪৫৬৭৮৯".indexOf(digit))
        )
        .replace(/,/g, "");

    return Number(englishNumber);
};

const Sortner = ({ products }: Props) => {
    const [sortOrder, setSortOrder] = useState("default");

    const sortedProducts = [...products].sort((a, b) => {
        const priceA = toNumber(a.today);
        const priceB = toNumber(b.today);

        if (sortOrder === "price-asc") {
            return priceA - priceB;
        }

        if (sortOrder === "price-desc") {
            return priceB - priceA;
        }

        return 0;
    });

    return (
        <section>
            <div className="rounded-2xl py-2 sm:py-4 mb-4 sm:mb-6">
                <div className="flex justify-end items-center bg-white shadow-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5">

                    <div className="flex items-center gap-2">
                        <label htmlFor="sort" className="font-medium text-sm sm:text-base">
                            সাজান
                        </label>

                        <div className="relative">
                            <select
                                id="sort"
                                value={sortOrder}
                                onChange={(e) =>
                                    setSortOrder(e.target.value)
                                }
                                className="appearance-none select border border-gray-200 rounded-lg px-2 sm:px-3 py-2 pr-8 sm:pr-9 outline-none focus:ring-2 focus:ring-green-500 cursor-pointer bg-white text-xs sm:text-sm max-w-45 sm:max-w-none"
                            >
                                <option value="default">ডিফল্ট</option>
                                <option value="price-asc">
                                    দাম: কম থেকে বেশি
                                </option>
                                <option value="price-desc">
                                    দাম: বেশি থেকে কম
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
                    {sortedProducts.map((c) => (
                        <Link
                            key={c.id}
                            href={`/productsDetails/${c.id}`}
                            className="block min-w-0"
                        >
                            <div className="bg-white border border-[#e4ebe4] rounded-xl p-3 sm:p-4 md:p-5 hover:shadow-sm transition-shadow h-full">
                                <div className="flex items-center gap-2 sm:gap-3 mb-3">
                                    <div className="bg-[#f0f5f0] rounded-lg p-2 text-xl sm:text-2xl shrink-0">
                                        {c.image}
                                    </div>

                                    <div className="min-w-0">
                                        <p className="font-semibold text-sm sm:text-base text-gray-800 wrap-break-word">
                                            {c.nameBn}
                                        </p>
                                        <p className="text-[10px] sm:text-xs text-gray-500">
                                            প্রতি {c.unit}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-[10px] sm:text-xs text-gray-500">
                                    আজকের দাম
                                </p>

                                <div className="flex justify-between items-center gap-2">
                                    <p className="text-sm sm:text-base text-gray-700">
                                        <span className="font-bold text-base sm:text-lg text-gray-900">
                                            {c.today}
                                        </span>{" "}
                                        টাকা
                                    </p>

                                    {c.change.dir === "up" ? (
                                        <span className="badge badge-error badge-soft text-[10px] sm:text-xs h-5 px-2 shrink-0">
                                            ▲ {c.change.pct}%
                                        </span>
                                    ) : c.change.dir === "down" ? (
                                        <span className="badge badge-success badge-soft text-[10px] sm:text-xs h-5 px-2 shrink-0">
                                            ▼ {c.change.pct}%
                                        </span>
                                    ) : (
                                        <span className="badge bg-gray-100 text-gray-600 border-0 text-[10px] sm:text-xs h-5 px-2 shrink-0">
                                            — 0.0%
                                        </span>
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sortner;
