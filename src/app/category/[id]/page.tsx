import { Itype } from '@/app/types/type';
import Link from 'next/link';


const CategoryPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products?category=${id}`);
    const data: Itype[] = await res.json();

    console.log("its data", data);

    const category = data[0];

    return (
        <div className='container mx-auto mt-9'>
            <div className='flex gap-4 bg-white items-center shadow-sm py-5 px-5 rounded-2xl'>
                <p className='bg-[#d7e6d7] text-3xl p-2 rounded-2xl'>{category.image}</p>
                <div>
                    <p className='text-2xl font-bold'>{category.categoryNameBn}</p>
                    <p className='text-[#6c6c6ce2]'>{data.length} টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                </div>
            </div>

            <div className='bg-white items-center shadow-sm py-5 px-5 rounded-2xl my-8 '>
                <div>amer somer bangla</div>
            </div>

            <div className='grid grid-cols-3 gap-5'>
                {
                    data.map(c =>
                        <Link key={c.id} href={`/productsDetails/${c.id}`}>
                            <div>
                                <div className=" bg-white py-5 px-7 shadow-sm rounded-md">
                                    <div className="flex gap-4 py-2">
                                        <p className="bg-[#ebf3eb] p-2 rounded-md">{c.image}</p>
                                        <div>
                                            <p>{c.nameBn}</p>
                                            <p>{c.unit}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p>আজকের দাম</p>

                                        <div className='flex justify-between'>

                                            <p><span className="font-bold">{c.today} </span>টাকা</p>
                                            <div>{c.change.dir === "up"
                                                ? <div className="text-red-500 mx-2">▲ {c.change.pct}%</div>
                                                : <div className="text-green-500 mx-2">▼ {c.change.pct}%</div>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>

        </div>
    );
};

export default CategoryPage;