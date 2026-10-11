import Image from 'next/image';
import Logo from '@/assets/logo-icon.png';
import UserInfo from './UserInfo';

const Navbar = () => {

    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full"
    });

    return (
        <div className='container mx-auto px-3 sm:px-4 py-2 sm:py-3'>
            <div className='flex items-center justify-between gap-2 sm:gap-4'>

                <div className='flex items-center gap-2 sm:gap-3 min-w-0'>
                    <Image
                        className='bg-green-700 p-2 sm:p-3 rounded-xl sm:rounded-2xl w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-12.5 shrink-0'
                        src={Logo}
                        width={60}
                        height={50}
                        alt='navImage'
                    />

                    <div className='min-w-0'>
                        <h1 className='text-xl sm:text-2xl md:text-3xl font-bold'>
                            বাজার দর
                        </h1>
                        <p className='text-xs sm:text-sm md:text-base text-gray-600'>
                            {date}
                        </p>
                    </div>
                </div>

                <div className='shrink-0'>
                    <UserInfo />
                </div>

            </div>
        </div>
    );
};

export default Navbar;