import { Link } from "react-router-dom"

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
        <div className="bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 cursor-pointer flex items-center gap-2">
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input type="text" placeholder="Search..." className="bg-transparent outline-none" />
        </div>
    </div>
  )
}

export default MainCategories