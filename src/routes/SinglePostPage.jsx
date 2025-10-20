import Imageb from '../components/Imageb'
import { Link}  from 'react-router-dom'
import PostMenuActions from '../components/PostMenuActions'
import Search from '../components/Search'

const SinglePostPage = () => {
  return (
    <div className='flex flex-col gap-8'>
      {/* details  */}
      <div className="flex gap-8">
        <div className="w-3/5 flex flex-col gap-8">
            <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quidem.</h1>
            <div className="flex items-center gap-2 text-sm text-gray-5 00">
                <span>Written by</span>
                <Link className='text-blue-800 font-semibold'>John Doe</Link>
                <span>on</span>
                <Link className='text-blue-800 font-semibold'>Web Design</Link>
                <span>2 days ago</span>
            </div>
            <p className='text-gray-500 font-medium'>  
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <div className="hidden lg:block w-2/5">  
          <Imageb src="postImg.jpeg" alt="Featured Post" className="rounded-3xl object-cover" w="600"/>
        </div>
      </div>
      {/* content  */}
      <div className='flex flex-col md:flex-row gap-8'>
        {/* text  */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cum beatae,
             magni possimus quisquam aperiam odit, 
             laboriosam doloribus nostrum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde et voluptates eum! Ab, placeat ullam? Odit neque temporibus at exercitationem minus earum molestiae ab sunt, voluptate a dolorem, commodi quo.
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cum beatae,
             magni possimus quisquam aperiam odit, 
             laboriosam doloribus nostrum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde et voluptates eum! Ab, placeat ullam? Odit neque temporibus at exercitationem minus earum molestiae ab sunt, voluptate a dolorem, commodi quo.
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cum beatae,
             magni possimus quisquam aperiam odit, 
             laboriosam doloribus nostrum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde et voluptates eum! Ab, placeat ullam? Odit neque temporibus at exercitationem minus earum molestiae ab sunt, voluptate a dolorem, commodi quo.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cum beatae,
             magni possimus quisquam aperiam odit, 
             laboriosam doloribus nostrum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde et voluptates eum! Ab, placeat ullam? Odit neque temporibus at exercitationem minus earum molestiae ab sunt, voluptate a dolorem, commodi quo.
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cum beatae,
             magni possimus quisquam aperiam odit, 
             laboriosam doloribus nostrum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde et voluptates eum! Ab, placeat ullam? Odit neque temporibus at exercitationem minus earum molestiae ab sunt, voluptate a dolorem, commodi quo.
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cum beatae,
             magni possimus quisquam aperiam odit, 
             laboriosam doloribus nostrum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde et voluptates eum! Ab, placeat ullam? Odit neque temporibus at exercitationem minus earum molestiae ab sunt, voluptate a dolorem, commodi quo.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cum beatae,
             magni possimus quisquam aperiam odit, 
             laboriosam doloribus nostrum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde et voluptates eum! Ab, placeat ullam? Odit neque temporibus at exercitationem minus earum molestiae ab sunt, voluptate a dolorem, commodi quo.
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cum beatae,
             magni possimus quisquam aperiam odit, 
             laboriosam doloribus nostrum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde et voluptates eum! Ab, placeat ullam? Odit neque temporibus at exercitationem minus earum molestiae ab sunt, voluptate a dolorem, commodi quo.
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cum beatae,
             magni possimus quisquam aperiam odit, 
             laboriosam doloribus nostrum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde et voluptates eum! Ab, placeat ullam? Odit neque temporibus at exercitationem minus earum molestiae ab sunt, voluptate a dolorem, commodi quo.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cum beatae,
             magni possimus quisquam aperiam odit, 
             laboriosam doloribus nostrum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde et voluptates eum! Ab, placeat ullam? Odit neque temporibus at exercitationem minus earum molestiae ab sunt, voluptate a dolorem, commodi quo.
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cum beatae,
             magni possimus quisquam aperiam odit, 
             laboriosam doloribus nostrum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde et voluptates eum! Ab, placeat ullam? Odit neque temporibus at exercitationem minus earum molestiae ab sunt, voluptate a dolorem, commodi quo.
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cum beatae,
             magni possimus quisquam aperiam odit, 
             laboriosam doloribus nostrum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde et voluptates eum! Ab, placeat ullam? Odit neque temporibus at exercitationem minus earum molestiae ab sunt, voluptate a dolorem, commodi quo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit.  Quisquam, quidem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illo iusto eaque dolores nisi ipsam repellat vitae, accusamus totam qui labore ut corporis, voluptatum assumenda incidunt hic veniam est eum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam repellendus tenetur corrupti sequi! Eligendi sint harum illum quasi esse sapiente maxime dolor molestias officiis? Saepe voluptas nobis id veritatis quaerat! 
          </p>
        </div>
        {/* menu  */}
        <div className="px-4 h-max sticky top-8">
          <h1 className='mb-4 text-sm font-medium'>Author</h1>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-8'>
              <Imageb src="userImg.jpeg" className="w-12 h-12 rounded-full object-cover" alt="Profile Picture" w="48" h="48"/>
              <Link className='text-blue-800'>John Doe</Link>
            </div>
            <p className='text-sm text-gray-500'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem.</p>
            <div className='flex gap-2'>
              <Link className=''>
              <Imageb src="facebook.svg" alt="Facebook"/>
              </Link>
              <Link className=''>
              <Imageb src="instagram.svg" alt="Instagram"/>
              </Link>
            </div>
          </div>
          
          <PostMenuActions />
          <h1 className='mt-8 mb-4 text-sm font-medium'> Categories</h1>
          <div className='flex flex-col gap-2 text-sm'>
            <Link className='underline'>
              All
            </Link>
            <Link to="" className="underline">
                Web Design
            </Link>
            <Link to="" className="underline">
                Technology
            </Link>
            <Link to="" className="underline">
                Programming
            </Link>
            <Link to="" className="underline">
                Life Style
            </Link>
            <Link to="" className="underline">
                Travel
            </Link>
          </div>
          <h1 className='mt-8 mb-4 text-sm font-medium'>Search</h1>
          <Search />
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage