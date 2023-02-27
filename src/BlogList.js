import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {
  // const BlogList = (props) => {
  // const blogs = props.blogs;
  // const title = props.title;

  return (
    <div className="blog-list">
      <h2 className="blogs-title">{ title }</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={ `/blogs/${ blog.id }` }>
            <h2>{blog.title}</h2>
            <p>Written by: {blog.author}</p>
            <p>{blog.body}</p>
            {/* <button onClick={() => handleDelete(blog.id)}>Delete</button> */}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;