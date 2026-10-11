
import { Itype } from '../types/type';
import Link from 'next/link';

const AllProducts = async () => {

    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products');
    const allProducts: Itype[] = await res.json();
    console.log("all", allProducts);

    return (
        <div id='allproducts' className='container mx-auto my-9'>
            <h1 className="text-2xl font-bold">সব পণ্য</h1>
            <p className='py-3'>মোট {allProducts.length} টি পণ্য দেখানো হচ্ছে</p>

            <div className="grid grid-cols-3 gap-5">
                {allProducts.map(a => (
                    <Link key={a.id} href={`/productsDetails/${a.id}`}>
                        <div>
                            <div className=" bg-white py-5 px-7 shadow-sm rounded-md">
                                <div className="flex gap-4 py-2">
                                    <p className="bg-[#ebf3eb] text-2xl p-2 rounded-md">{a.image}</p>
                                    <div>
                                        <p>{a.nameBn}</p>
                                        <p>{a.unit}</p>
                                    </div>
                                </div>
                                <div>

                                    <p>আজকের দাম</p>
                                    <div className="flex justify-between">
                                        <p><span className="font-bold">{a.today} </span>টাকা</p>
                                        <div>{a.change.dir === "up"
                                            ? <div className="text-red-500 mx-2">▲ {a.change.pct}%</div>
                                            : <div className="text-green-500 mx-2">▼ {a.change.pct}%</div>}
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