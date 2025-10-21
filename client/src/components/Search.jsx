const Search = () => {
  return (
    <div className="bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 cursor-pointer flex items-center gap-2">
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <input type="text" placeholder="Search..." className="bg-transparent outline-none" />
    </div>
  )
}

export default Search