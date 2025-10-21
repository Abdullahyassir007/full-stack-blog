import Search from "./Search"
import { Link } from "react-router-dom"
const SideMenu = () => {
  return (
    <div className='px-4 h-max sticky top-8'>
        <h1 className="mb-4 text-sm font-medium">Search</h1>
        <Search />
        <h1 className="my-4 text-sm font-medium">Filter
            <div className="mt-1 px-4 flex flex-col gap-2 text-sm">
                <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                   <input type="radio" name="sort" value="newest" className="appearance-none bg-white w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800"/> 
                   <span>Newest</span>  
                </label>
                <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                   <input type="radio" name="sort" value="most-popular" className="appearance-none bg-white w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800"/> 
                   <span>Most Popular</span>  
                </label>
                <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                   <input type="radio" name="sort" value="trending" className="appearance-none bg-white w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800"/> 
                   <span>Trending</span>  
                </label>
                <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                   <input type="radio" name="sort" value="oldest" className="appearance-none bg-white w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800"/> 
                   <span>Oldest</span>  
                </label>
            </div>
        </h1>
        <h1 className="mb-4 text-sm font-medium">Categories</h1>
        <div className="flex-1 flex items-center justify-between flex-wrap">
            <Link to="/posts" className="bg-blue-800 text-white px-4 py-2 rounded-full">
                All Posts
            </Link>
            <Link to="/posts?category=web-design" className="hover:bg-blue-50 px-4 py-2 rounded-full">
                Web Design
            </Link>
            <Link to="/posts?category=technology" className="hover:bg-blue-50 px-4 py-2 rounded-full">
                Technology
            </Link>
            <Link to="/posts?category=programming" className="hover:bg-blue-50 px-4 py-2 rounded-full">
                Programming
            </Link>
            <Link to="/posts?category=life-style" className="hover:bg-blue-50 px-4 py-2 rounded-full">
                Life Style
            </Link>
            <Link to="/posts?category=travel" className="hover:bg-blue-50 px-4 py-2 rounded-full">
                Travel
            </Link>
        </div>
    </div>
  )
}

export default SideMenu