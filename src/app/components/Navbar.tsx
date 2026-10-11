
import Image from 'next/image';
import Logo from '@/assets/logo-icon.png';
import UserInfo from './UserInfo';



const Navbar = () => {

    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full"
    });

    return (
        <div className='container mx-auto p-2'>
            <div className='flex justify-between'>
                <div className='flex gap-3'>
                    <Image
                        className='bg-green-700 p-3 rounded-2xl'
                        src={Logo}
                        width={60}
                        height={50}
                        alt='navImage'
                    />

                    <div>
                        <h1 className='text-3xl font-bold'>বাজার দর</h1>
                        <p>{date}</p>
                    </div>


                </div>
                <UserInfo />
            </div>

        </div>
    );
};

export default Navbar;