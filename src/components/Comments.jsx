import Comment from './Comment'

const Comments = () => {
  return (
    <div className='flex flex-col gap-8 lg:w-3/5'>
        <h1 className="text-xl text-gray-500 underline">Comments</h1>
        <div className="flex items-center justify-between gap-8 w-full">
            <textarea className="w-full rounded-2xl p-4 bg-white " placeholder="Write a comment..." rows={3} />
            <button className="bg-blue-800 px-4 py-3 text-white rounded-2xl">Send</button>
        </div>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
    </div>
    
  )
}

export default Comments