import { Itype } from "@/app/types/type";



const ProductDetailsPage = async ({ params }: { params: { productsId: string } }) => {

    const { productsId } = await params;

    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${productsId}`);
    const product: Itype = await res.json();
    console.log("all dataaaa", product);

    const isUp = product.change.dir === "up";
    const formatPrice = (price: number) => `${price.toLocaleString("bn-BD")} টাকা`;

    return (
        <main className="min-h-screen bg-[#f0f5f1] px-4 py-8">
            <div className="mx-auto max-w-5xl">

                <div className="mb-5 text-xs text-gray-500">
                    হোম &gt; {product.categoryNameBn} &gt; {product.nameBn}
                </div>

                <section className="mb-4 flex flex-col justify-between gap-4 rounded-xl border border-gray-200 bg-white p-5 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#f0f5f1] text-3xl">
                            {product.image}
                        </div>

                        <div>
                            <h1 className="text-xl font-bold text-gray-900">
                                {product.nameBn}
                            </h1>
                            <p className="text-xs text-gray-500">
                                প্রতি কেজি · {product.categoryNameBn}
                            </p>
                            <p className="mt-1 text-xs text-gray-600">
                                বাংলাদেশের বিভিন্ন বাজারের আজকের দাম
                            </p>
                        </div>
                    </div>

                    <div className="rounded-xl bg-[#f0f5f1] px-5 py-3 text-center sm:min-w-32">
                        <p className="text-xs text-gray-500">বর্তমান দাম</p>
                        <h2 className="text-2xl font-bold text-gray-900">
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

                <section className="rounded-xl border border-gray-200 bg-white p-5">
                    <h2 className="mb-3 text-sm font-bold text-gray-800">
                        দামের সারসংক্ষেপ
                    </h2>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                        <div className="rounded-xl border border-gray-200 p-3">
                            <p className="text-xs text-gray-500">গতকালের দাম</p>
                            <p className="mt-1 font-bold text-green-700">
                                {formatPrice(product.yesterday)}
                            </p>
                            <p className="mt-1 text-xs text-gray-500">প্রতি কেজি</p>
                        </div>

                        <div className="rounded-xl border border-gray-200 p-3">
                            <p className="text-xs text-gray-500">গত সপ্তাহের দাম</p>
                            <p className="mt-1 font-bold text-green-700">
                                {formatPrice(product.lastWeek)}
                            </p>
                            <p className="mt-1 text-xs text-gray-500">প্রতি কেজি</p>
                        </div>

                        <div className="rounded-xl border border-gray-200 p-3">
                            <p className="text-xs text-gray-500">গত মাসের দাম</p>
                            <p className="mt-1 font-bold text-green-700">
                                {formatPrice(product.lastMonth)}
                            </p>
                            <p className="mt-1 text-xs text-gray-500">প্রতি কেজি</p>
                        </div>
                    </div>

  
                    <h2 className="mb-3 mt-6 text-sm font-bold text-gray-800">
                        বাজারভিত্তিক আজকের দাম
                    </h2>

                    <div className="overflow-x-auto rounded-xl border border-gray-200">
                        <table className="w-full min-w-150 border-collapse text-left text-sm">
                            <thead className="bg-[#f8faf8] text-gray-600">
                                <tr>
                                    <th className="px-4 py-3 font-medium">বাজার</th>
                                    <th className="px-4 py-3 font-medium">বিভাগ</th>
                                    <th className="px-4 py-3 text-right font-medium">
                                        সর্বনিম্ন
                                    </th>
                                    <th className="px-4 py-3 text-right font-medium">
                                        সর্বোচ্চ
                                    </th>
                                    <th className="px-4 py-3 text-right font-medium">গড়</th>
                                </tr>
                            </thead>

                            <tbody>
                                {product.markets.map((market, index) => (
                                    <tr
                                        key={`${market.market}-${index}`}
                                        className={`border-t border-gray-200 ${index % 2 === 0 ? "bg-[#f0f5f1]" : "bg-white"
                                            } hover:bg-green-50`}
                                    >
                                        <td className="px-4 py-3 text-gray-800">
                                            {market.market}
                                        </td>
                                        <td className="px-4 py-3 text-gray-600">
                                            {market.division}
                                        </td>
                                        <td className="px-4 py-3 text-right">
                                            {formatPrice(market.min)}
                                        </td>
                                        <td className="px-4 py-3 text-right">
                                            {formatPrice(market.max)}
                                        </td>
                                        <td className="px-4 py-3 text-right font-semibold text-gray-800">
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