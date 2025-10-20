import { Link } from "react-router-dom"
import Imageb from "./Imageb"   


const PostListItem = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-8 mb-12'>
        {/* Image  */}
        <div className="md:hidden xl:block xl:w-1/3">
            <Imageb src="postImg.jpeg" alt="postImage" className=" object-cover rounded-2xl" w="735" />
        </div>
        {/* Details */}
        <div className="flex flex-col gap-4 xl:w-2/3" >
            <Link to="/test" className="text-4xl font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Link>
            <div className="flex items-center gap-2 text-gray-800 text-sm">
                <span className="text-gray-500">Written By </span>
                <Link to="/test" className="text-blue-800 font-semibold">John Doe</Link>
                <span className="text-gray-500">on </span>
                <Link to="/test" className="text-blue-800 font-semibold">Web Design</Link>
                <span className="text-gray-500">2 Days ago</span>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
                voluptatum, cumque, asperiores, incidunt, dolor, quisquam, 
                reprehenderit, molestiae, magnam, minima,
            </p>
            <Link to="/test" className="underline text-blue-800 text-sm font-semibold">
                Read More
            </Link>
        </div>
    </div>
  )
}

export default PostListItem