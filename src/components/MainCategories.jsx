import { Link } from "react-router-dom"
import Search from "./Search"

const MainCategories = () => {
  return (
    <div className='hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8'>
        {/* Links  */}
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
        <span className="text-xl font-medium">|</span>
        {/* Search */}
        <Search />
    </div>
  )
}

export default MainCategories