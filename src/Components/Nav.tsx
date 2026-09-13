import Logo from '../assets/logo-text.png';
const Nav = () => {
    return (
        <nav className=' bg-[#ffffff] border-b border-gray-300 sticky top-0 z-50'>
            <div className='flex justify-between container mx-auto '>
         <button className="text-2xl md:hidden">
          ☰
        </button>
            <div className='px-2 py-4 '>
                <img src={Logo} alt="" />
            </div>
            <div className='hidden md:block'>
                <ul className='flex gap-4 px-2 py-5 items-center text-[#475569]'>
                    <li><span className='text-[#DB2777]'>Home</span></li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='px-2 py-4 gap-3 flex'>
                <button >Sign In</button>
                <button className='brand-gradient text-white rounded-3xl px-6 py-2 '>Sign Up</button>
            </div>
            </div>
        </nav>
    );
};

export default Nav;