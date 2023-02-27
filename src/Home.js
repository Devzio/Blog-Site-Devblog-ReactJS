import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');
  
  // const [blogs, setBlogs] = useState([
  //   { title: 'Blog 1', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', author: 'Ezio', id: 1 },
  //   { title: 'Blog 2', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', author: 'Altair', id: 2 },
  //   { title: 'Blog 3', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', author: 'Ezio', id: 3 },
  // ])

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   setBlogs(newBlogs);
  // }

  // Note: good practice to set useEffect hook to an Empty dependency array to only use the useEffect hook on page render, instead of every useState change
  // const [name, setName] = useState('dev');
  // const [age, setAge] = useState(26);

  // arrow function
  // const handleClick = () => {
  //   setName('Justdev')
  //   setAge(27)
  // }

  // const handleClick2 = (name) => {
  //   console.log('hello ' + name);
  // }

	return (
		<div className="home">
      {error && <div> { error } </div>}
      {isLoading && <div> Loading ... </div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
      
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Ezio')} title="Ezio's Blogs"/> */}

			{/* <h1>Homepage</h1>
      <p>{name} is {age} years old</p>
      <button onClick={ handleClick }>Click me</button> */}

      {/* Note: If handleClick() was used, it will invoke the function on page load */}
      {/* <button onClick={ () => {handleClick2('mario')}}>Click me again</button> */}
      {/* Note: invoke function with an anonymous function */}
    </div>
	);
}

export default Home;