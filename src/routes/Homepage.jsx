import { Link } from "react-router-dom"
import MainCategories from "../components/MainCategories"
import FeaturedPosts from "../components/FeaturedPosts"

const Homepage = () => {
  return (
    <div className='mt-4 flex flex-col gap-4'>
      {/* BREADCRUMBS */}
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <span>•</span>
          <span className="text-blue-800"> Blogs and Articles</span>
        </div>
      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/* titles */}
        <div className="">
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </h1>
        <p className="mt-8 text-md md:text-xl">
          Welcome to our blog! Dive into a world of insightful articles, expert tips, and the latest trends. Whether you're here to learn, explore, or get inspired, we've got something for everyone. Happy reading!
        </p>
        </div>
          {/* animated button */}
          <Link to="write" className="relative hidden md:block">
            <svg
              viewBox="0 0 200 200"
              width="200"
              height="200"
              className="text-lg tracking-widest animate-spin animatedButton"
            >
              <path
                id="circlePath"
                fill="None"
                d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
              <text>
                <textPath href="#circlePath" startOffset="0%">Write your Story •</textPath>
                <textPath href="#circlePath" startOffset="50%">Share your Idea •</textPath>
                
              </text>
            </svg>
            {/* button */}
            <button className="absolute top-0 bottom-0 left-0 right-0 m-auto w-20 h-20 bg-blue-800 rounded-full w-20 h-20 flex items-center justify-center">
              <svg 
                width="48" 
                height="48" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M12 21V11M12 11L9 14M12 11L15 14M7 16.8184C4.69636 16.2074 3 14.1246 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.8148 19.25 16.7236 17 16.9725" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>

          </Link>
        

      </div>
      {/* CATEGORIES */}
      <MainCategories />
      {/* FEATURED POSTS */}
      <FeaturedPosts />
      {/* POST LIST */}
    </div>
  )
}

export default Homepage