import { Itype } from "@/app/types/type";

const ProductDetailsPage = async ({ params }: { params: { productsId: string } }) => {

    const { productsId } = await params;

    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${productsId}`);
    const product: Itype = await res.json();
    console.log("all dataaaa", product);

    const isUp = product.change.dir === "up";
    const formatPrice = (price: number) => `${price.toLocaleString("bn-BD")} টাকা`;

    return (
        <main className="min-h-screen bg-[#f0f5f1] px-3 py-5 sm:px-4 sm:py-8">
            <div className="mx-auto max-w-5xl">

                <div className="mb-4 wrap-break-word text-xs text-gray-500 sm:mb-5 sm:text-sm">
                    হোম &gt; {product.categoryNameBn} &gt; {product.nameBn}
                </div>

                <section className="mb-4 flex flex-col justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4 sm:p-5 md:flex-row md:items-center">

                    <div className="flex min-w-0 items-start gap-3 sm:items-center">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f1] text-2xl sm:h-14 sm:w-14 sm:text-3xl">
                            {product.image}
                        </div>

                        <div className="min-w-0">
                            <h1 className="wrap-break-word text-lg font-bold text-gray-900 sm:text-xl">
                                {product.nameBn}
                            </h1>
                            <p className="text-xs text-gray-500 sm:text-sm">
                                প্রতি কেজি · {product.categoryNameBn}
                            </p>
                            <p className="mt-1 text-xs leading-relaxed text-gray-600 sm:text-sm">
                                বাংলাদেশের বিভিন্ন বাজারের আজকের দাম
                            </p>
                        </div>
                    </div>

                    <div className="w-full rounded-xl bg-[#f0f5f1] px-4 py-3 text-center sm:px-5 md:w-auto md:min-w-32 md:shrink-0">
                        <p className="text-xs text-gray-500">বর্তমান দাম</p>
                        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                            {product.today.toLocaleString("bn-BD")}
                        </h2>
                        <p className="text-xs text-gray-500">টাকা / কেজি</p>
                        <p
                            className={`mt-1 text-xs font-semibold ${isUp ? "text-red-600" : "text-green-600"
                                }`}
                        >
                            {isUp ? "▲" : "▼"} {product.change.pct.toLocaleString("bn-BD")}%
                        </p>
                    </div>
                </section>

                <section className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
                    <h2 className="mb-3 text-sm font-bold text-gray-800 sm:text-base">
                        দামের সারসংক্ষেপ
                    </h2>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                        <div className="rounded-xl border border-gray-200 p-3 sm:p-4">
                            <p className="text-xs text-gray-500 sm:text-sm">গতকালের দাম</p>
                            <p className="mt-1 warp-break-words text-sm font-bold text-green-700 sm:text-base">
                                {formatPrice(product.yesterday)}
                            </p>
                            <p className="mt-1 text-xs text-gray-500">প্রতি কেজি</p>
                        </div>

                        <div className="rounded-xl border border-gray-200 p-3 sm:p-4">
                            <p className="text-xs text-gray-500 sm:text-sm">গত সপ্তাহের দাম</p>
                            <p className="mt-1 warp-break-words text-sm font-bold text-green-700 sm:text-base">
                                {formatPrice(product.lastWeek)}
                            </p>
                            <p className="mt-1 text-xs text-gray-500">প্রতি কেজি</p>
                        </div>

                        <div className="rounded-xl border border-gray-200 p-3 sm:col-span-2 sm:p-4 md:col-span-1">
                            <p className="text-xs text-gray-500 sm:text-sm">গত মাসের দাম</p>
                            <p className="mt-1  warp-break-words text-sm font-bold text-green-700 sm:text-base">
                                {formatPrice(product.lastMonth)}
                            </p>
                            <p className="mt-1 text-xs text-gray-500">প্রতি কেজি</p>
                        </div>
                    </div>

                    <h2 className="mb-3 mt-5 text-sm font-bold text-gray-800 sm:mt-6 sm:text-base">
                        বাজারভিত্তিক আজকের দাম
                    </h2>

                    <div className="overflow-x-auto rounded-xl border border-gray-200">
                        <table className="w-full min-w-150 border-collapse text-left text-xs sm:text-sm">
                            <thead className="bg-[#f8faf8] text-gray-600">
                                <tr>
                                    <th className="whitespace-nowrap px-3 py-3 font-medium sm:px-4">বাজার</th>
                                    <th className="whitespace-nowrap px-3 py-3 font-medium sm:px-4">বিভাগ</th>
                                    <th className="whitespace-nowrap px-3 py-3 text-right font-medium sm:px-4">
                                        সর্বনিম্ন
                                    </th>
                                    <th className="whitespace-nowrap px-3 py-3 text-right font-medium sm:px-4">
                                        সর্বোচ্চ
                                    </th>
                                    <th className="whitespace-nowrap px-3 py-3 text-right font-medium sm:px-4">গড়</th>
                                </tr>
                            </thead>

                            <tbody>
                                {product.markets.map((market, index) => (
                                    <tr
                                        key={`${market.market}-${index}`}
                                        className={`border-t border-gray-200 ${index % 2 === 0 ? "bg-[#f0f5f1]" : "bg-white"
                                            } hover:bg-green-50`}
                                    >
                                        <td className="whitespace-nowrap px-3 py-3 text-gray-800 sm:px-4">
                                            {market.market}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-3 text-gray-600 sm:px-4">
                                            {market.division}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-3 text-right sm:px-4">
                                            {formatPrice(market.min)}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-3 text-right sm:px-4">
                                            {formatPrice(market.max)}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-3 text-right font-semibold text-gray-800 sm:px-4">
                                            {formatPrice(Math.round((market.min + market.max) / 2))}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default ProductDetailsPage;