import { useState } from 'react';
import Imageb from './Imageb';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';


const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Debugging logs
//   console.log("ImageKit URL Endpoint:", urlEndpoint);
//   console.log("Image path:", path);
//   console.log("Full URL:", `${urlEndpoint}${relPath}`);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between ">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
   
            <Imageb 
             src="logo.png" alt="logo" className="w-8 h-8 object-contain"/>
            <span> Bloghere </span>
        </Link>
        {/* MOBILE MENU */}
        <div className="md:hidden">
            {/* {MOBILE BUTTON} */}
            <div className = "cursor-pointer text-4xl" onClick = {() => setOpen((open) => !open)}>
                {open ? "X" : <img src="/menu.png" alt = "menu" className='w-8 h-8'></img> }
            </div>
            {/* {MOBILE LINK LIST} */}
            <div className={`w-full h-screen flex flex-col gap-8 font-medium text-gray-600 items-center justify-center absolute top-16 transition-all ease-in-out ${open ? "left-0" : "left-[100%]"}`}>
                <Link to="/" className='text-lg'>Home</Link>
                <Link to="/" className='text-lg'>Trending</Link>
                <Link to="/" className='text-lg'>Most Popular</Link>
                <Link to="/" className='text-lg'>About</Link>
                <Link to="/">
                    <button className='py-2 px-4 text-lg rounded-3xl bg-blue-800 text-white'>Login</button>
                </Link>  
            </div>
        </div>
        {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium text-gray-600">
                <Link to="/" className='text-lg'>Home</Link>
                <Link to="/" className='text-lg'>Trending</Link>
                <Link to="/" className='text-lg'>Most Popular</Link>
                <Link to="/" className='text-lg'>About</Link>

                <SignedOut>
                    <Link to="/login">
                        <button className='py-2 px-4 text-lg rounded-3xl bg-blue-800 text-white'>Login</button>
                    </Link>        
                </SignedOut>
                
                <SignedIn>
                    <UserButton/>
                </SignedIn>       
            </div>
        </div>
  );
};

export default Navbar;