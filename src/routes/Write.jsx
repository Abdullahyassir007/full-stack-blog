import { useUser } from "@clerk/clerk-react"
// import 'react-quill/dist/quill.snow.css';

const Write = () => {

  const {isLoaded, isSignedIn} = useUser()

  if (!isLoaded){
    return <div>Loading...</div>
  }
  
  if(isLoaded && !isSignedIn){
    return <div>You should Sign In</div>
  }

  return (
    <div className=''>
      <h1>Create a new Post</h1>
      <form action="">
        <button>Add a cover image</button>
        <input type="text" placeholder="My Awesome Story" />
        <div>
          <label htmlFor="">Choose a category:</label>
          <select name="cat" id="">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="technology">Technology</option>
            <option value="programming">Programming</option>
            <option value="life-style">Life Style</option>
            <option value="travel">Travel</option>
          </select>
        </div>
        <textarea name="desc" id="" placeholder="A Short Description" />
      </form>
    </div>
  )
}

export default Write