import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";

const Navbar = () => {
  return (
    <header>
         <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-5 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/logo (1).svg'
          alt='logo'
          width={150}
          height={20}
          className='object-contain'
        />
      </Link>
      <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles='text-white rounded-full bg-black min-w-[130px] hover:bg-cyan-900 focus-within:shadow-lg'
      />
      </nav>
    </header>
  )
}

export default Navbar