import Sortner from '@/app/components/Sortner';
import { Itype } from '@/app/types/type';

const CategoryPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products?category=${id}`);
    const data: Itype[] = await res.json();

    console.log("its data", data);

    const category = data[0];

    return (
        <div className='container mx-auto mt-5 sm:mt-7 md:mt-9 px-3 sm:px-4 lg:px-0'>
            <div className='flex gap-3 sm:gap-4 bg-white items-center shadow-sm py-4 sm:py-5 px-3 sm:px-5 rounded-xl sm:rounded-2xl'>
                <p className='bg-[#d7e6d7] text-2xl sm:text-3xl p-2 sm:p-3 rounded-xl sm:rounded-2xl shrink-0'>
                    {category.image}
                </p>
                <div className='min-w-0'>
                    <p className='text-lg sm:text-xl md:text-2xl font-bold wrap-break-word'>
                        {category.categoryNameBn}
                    </p>
                    <p className='text-sm sm:text-base text-[#6c6c6ce2]'>
                        {data.length} টি পণ্যের আজকের দাম ও পরিবর্তন
                    </p>
                </div>
            </div>

            <div className='mt-5 sm:mt-6 md:mt-8'>
                <Sortner products={data} />
            </div>

        </div>
    );
};

export default CategoryPage;