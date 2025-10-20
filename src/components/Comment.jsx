import Imageb from "./Imageb"

const Comment = () => {
  return (
    <div className='p-4 bg-slate-50 rounded-xl mb-8'>
        <div className="flex items-center gap-4">
            <Imageb src="userImg.jpeg" className="w-10 h-10 rounded-full object-cover" w="40"/>
            <span className="font-medium">John Doe</span>
            <span className="text-sm text-gray-500">2 days ago</span>
        </div>
        <div className="mt-4">
            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam qui architecto quibusdam nulla! Inventore eaque qui quasi enim recusandae, quo veritatis facilis, quas cupiditate ducimus consectetur error, neque voluptates maxime. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, asperiores, recusandae consectetur totam assumenda aliquid possimus earum vero mollitia nemo ratione. Corporis, dolor commodi quam ullam cumque laudantium ducimus ea! 
            </p>
        </div>
    </div>
  )
}

export default Comment