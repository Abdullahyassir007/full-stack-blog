import { Link } from 'react-router-dom'
import Imageb from './ImageB'

const FeaturedPosts = () => {
  return (
    <div className='mt-8 flex flex-col gap-8 lg:flex-row'>


        {/* First  */}
        <div className='w-full lg:w-1/2 flex flex-col gap-4'>
            {/* IMAGE  */}
            <Imageb src="featured1.jpeg" alt="Featured Post" className="rounded-3xl object-cover" />
            {/* DETAILS  */}
            <div>
                <h1 className='lg:text-lg font-semibold'>01.</h1>
                <Link className='text-blue-800 lg:text-lg'>Web Design </Link>
                <span className='text-sm text-gray-500'>2 days ago</span>
            </div>
            {/* TITLE  */}
            <Link to='/test' className='text-xl lg:text-3xl font-semibold lg:font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Link>
        </div>



        {/* Others */}
        <div className='w-full lg:w-1/2 flex flex-col gap-4'>

            {/* Second */}
            <div className='lg:h-1/3 flex justify-between gap-4'>
                <Imageb src="featured2.jpeg" alt="Featured Post" className="rounded-3xl object-cover w-1/3 aspect-video" />
                {/* details and title  */}
                <div className='w-2/3'>
                    <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
                        <h1 className='font-semibold'>02.</h1>
                        <Link className='text-blue-800 '>Graphic Design</Link>
                        <span className='text-sm text-gray-500'>3 days ago</span>
                    </div>
                <Link to='/test' className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Link>
                </div>
            </div>

            {/* Third */}
            <div className='lg:h-1/3 flex justify-between gap-4'>
                <Imageb src="featured3.jpeg" alt="Featured Post" className="rounded-3xl object-cover w-1/3 aspect-video" />
                {/* details and title  */}         
                <div className='w-2/3'>     

                    <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
                        <h1 className='font-semibold'>03.</h1>
                        <Link className='text-blue-800 '>Technology</Link>
                        <span className='text-sm text-gray-500'>5 days ago</span>
                    </div>
                <Link to='/test' className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Link>
                </div>
            </div>
            
            {/* Fourth */}
            <div className='lg:h-1/3 flex justify-between gap-4'>
                <Imageb src="featured4.jpeg" alt="Featured Post" className="rounded-3xl object-cover w-1/3 aspect-video" />
                {/* details and title  */}
                <div className='w-2/3'>
                    <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
                        <h1 className='font-semibold'>04.</h1>
                        <Link className='text-blue-800 '>Marketing</Link>
                        <span className='text-sm text-gray-500'>1 week ago</span>
                    </div>
                    <Link to='/test' className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedPosts