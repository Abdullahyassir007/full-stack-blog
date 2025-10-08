import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between ">
        {/* LOGO */}
        <div className="flex items-center gap-4 text-2xl font-bold">
            <img src="/logo.png" alt="logo" className="w-8 h-8 object-contain"/>
            <span> Bloghere </span>
        </div>
        {/* MOBILE MENU */}
        <div className="md:hidden">
            {/* {MOBILE BUTTON} */}
            <div className = "cursor-pointer text-4xl" onClick = {() => setOpen((open) => !open)}>
                {open ? "X" : <img src="/menu.png" alt = "menu" className='w-8 h-8'></img> }
            </div>
            {/* {MOBILE LINK LIST} */}
            <div className={`w-full h-screen flex flex-col gap-8 font-medium text-gray-600 items-center justify-center absolute top-16 transition-all ease-in-out ${open ? "left-0" : "left-[100%]"}`}>
                <a href="#" className='text-lg'>Home</a>
                <a href="#" className='text-lg'>Trending</a>
                <a href="#" className='text-lg'>Most Popular</a>
                <a href="#" className='text-lg'>About</a>
                <a href="#">
                    <button className='py-2 px-4 text-lg rounded-3xl bg-blue-800 text-white'>Login</button>
                </a>  
            </div>
        </div>
        {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium text-gray-600">
                <a href="#" className='text-lg'>Home</a>
                <a href="#" className='text-lg'>Trending</a>
                <a href="#" className='text-lg'>Most Popular</a>
                <a href="#" className='text-lg'>About</a>
                <a href="#">
                    <button className='py-2 px-4 text-lg rounded-3xl bg-blue-800 text-white'>Login</button>
                </a>            
            </div>
        </div>
  );
};

export default Navbar;